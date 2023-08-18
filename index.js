console.log('CARGANDO Bot Tiburón🦈 v21.')
console.log('CARGANDO Bot Tiburón🦈 v21..')
console.log('CARGANDO Bot Tiburón🦈 v21...')
console.log('INICIANDO Bot Tiburón🦈 v21')

import { join, dirname } from 'path'
import { createRequire } from 'module';
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'
import Helper from './lib/helper.js'

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Bring in the ability to create the 'require' method
const { name, author } = require(join(__dirname, './package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('Bot Tiburon\nWhatsApp Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
say(`'${name}' By @${author.name || author}`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
var isRunning = false

/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('Ocurrio un error inesperado:', code)
    if (code === 0){ 
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
    p.process.kill()
   } else if (process.env.pm_id) {
      process.exit(1)
    } else {
      process.exit()
      //stop('reset', 'crash')
    }
  })

  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!Helper.opts['test']) {
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
} else if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
  p.emit('message', line.trim())
})

}
start('main.js')
