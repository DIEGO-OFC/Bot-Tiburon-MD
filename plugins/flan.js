//let util = require('util')
//let path = require('path')
//let { spawn } = from('child_process')
//let spawn = import { readFileSync } from 'child_process'
//import { join } from 'path'
//import { readFileSync } from 'fs'
import { spawn } from 'child_process'
import { readdirSync, readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

// Font By MFarelS:V
let fontPath = 'src/font/Roboto-Regular.ttf'
let handler = async (m, { conn, args }) => {
  if (!global.support.convert &&
      !global.support.magick &&
      !global.support.gm) return handler.disabled = true // Disable if doesnt support
  let inputPath = 'src/kertas/flan.jpeg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  let teks = args.join` `
  // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
  let bufs = []
  const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
    'convert',
    inputPath,
    '-font',
    fontPath,
    '-size',
    '512x512',
    '-pointsize',
    '30',
    '-interline-spacing',
    '1',
    '-annotate',
    '+999+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '512x512',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+999+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '512x512',
    '-pointsize',
    '39',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+34+76',
    teks,
    'jpg:-'
  ]
  spawn(_spawnprocess, _spawnargs)
    .on('error', e => conn.reply(m.chat, util.format(e), m))
    .on('close', () => {
      conn.sendFile(m.chat, Buffer.concat(bufs), 'nulis.jpg', 'Aqui tienes', m)
    })
    .stdout.on('data', chunk => bufs.push(chunk))
}
handler.help = ['flan texto'].map(v => v + ' a')
handler.tags = ['varios']
handler.command = /^flan$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.register = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

// BY MFARELS NJEENK
// https://GitHub.com/MFarelS/
