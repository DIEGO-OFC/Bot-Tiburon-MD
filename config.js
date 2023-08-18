import { watchFile, unwatchFile } from 'fs' 
 import chalk from 'chalk' 
 import fs from 'fs' 
 import cheerio from 'cheerio' 
 import fetch from 'node-fetch' 
 import axios from 'axios' 
 import path, { join } from 'path' 
 import { fileURLToPath, pathToFileURL } from 'url' 
 import moment from 'moment-timezone'  
import { platform } from 'process' 
 import db, { loadDatabase } from './lib/database.js' 
 
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) } 
const __dirname = global.__dirname(import.meta.url)
global.owner = [['584125778026']
//[número, Nombre de creador/dueño?, Modo programador?]
] //Pon tu número aquí 
global.smods = []
global.mods = ['595983186566'] // números de moderadores aquí
global.prems = ['595983186566'] // numeros premium aquí 
global.APIs = { // Sitios de APIs
  // nombre: 'https://sitioweb'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // Apikeys de los sitios
  // 'https://sitioweb': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
//Thumb / Logo del bot
global.thumb = fs.readFileSync('./media/thumb.jpg')

/***************GLOBAL CONFIG****************/
global.conn = this
global.db = db
global.loadDatabase = (db.data == null)? loadDatabase() : db.data
global.raiz = './'
global.aniD = 'sessions/'
global.stickerAMX = fs.readFileSync('./TiburonBot.webp')
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.imagen1 = fs.readFileSync('./menu2.jpg')

// Sticker WM / Info del sticker 
global.packname = 'Bot Tiburón🦈'
global.author = 'DIEGO-OFC'
global.wm = 'Bot Tiburón🦈'

global.multiplier = 100 // más alto el número, más difícil se volverá subir de nivel

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("[LOG_BOT] Se acaba de actualizar el archivo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
