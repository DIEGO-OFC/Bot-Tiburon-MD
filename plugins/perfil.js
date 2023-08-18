import db from '../lib/database.js'
//import { promises } from 'fs'
//import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import { plugins } from '../lib/plugins.js'

//let PhoneNumber = require('awesome-phonenumber')
//import { PhoneNumber } from 'awesome-phonenumber'
//let levelling = require('../lib/levelling')
//import { xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    //pp = await conn.getProfilePicture(who)
	pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {
  } finally {
    //let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
	let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, premiumDate, pasangan, bank, exp, lastclaim, registered, regTime, age, level, role, banned, rango, motivoban, money, healt, sword, armor, role2 } = db.data.users[m.sender]
    //let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
   // let math = max - xp
	let now = new Date() * 1
    let prem = global.prems.includes(who.split`@`[0])
    let staff = global.mods.includes(who.split`@`[0])
	let due = global.owner.includes(who.split`@`[0])
	let headstaff = global.smods.includes(who.split`@`[0])
	//let jodoh = `En una relacion con @${pasangan.split`@`[0]}`
	

    let str = `Bot Tiburón🦈  | *「 PERFIL 」*\n
🚫 Baneado: ${banned}
Motivo del baneo: ${motivoban}

🥇 Rango: ${rango} 

🔖 Nombre: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nInfo: ' + about : ''}

Relacion: ${pasangan ? jodoh : 'Soltero/a' }

☎️ Numero: ERROR.
🔗 Link: https://wa.me/${who.split`@`[0]}${registered ? '\nEdad: ' + age : ''}
📍 Experiencia: TOTAL %exp  y para subir necesitas %maxexp
📌 Nivel: ${level}

🗡️ Espada: *${sword == 0 ? 'No tiene' : '' || sword == 1 ? 'espada de piedra' : '' || sword == 2 ? 'Espada de hierro' : '' || sword == 3 ? 'Espada de oro' : '' || sword == 4 ? 'Espada de diamante' : '' || sword == 5 ? 'Espada de Netherite' : ''}*
👕 Armadura: *${armor == 0 ? 'No tiene' : '' || armor == 1 ? 'Armadura de cuero' : '' || armor == 2 ? 'Armadura de hierro' : '' || armor == 3 ? 'Armadura de oro' : '' || armor == 4 ? 'Armadura de diamante' : '' || armor == 5 ? 'Armadura de Netherite' : ''}*

👤 Clase social por Leaf: *${role}*
🎰 Clase de jugador en Casino: *${role2}*
💶 Leaf: ${limit}
💶 Leaf en el banco: ${bank}
🎰 Fichas MeduSA: ${money}

🖇️ Registrado: ${registered ? 'Si (' + new Date(regTime) + ')': 'No'}

👑 Caducidad del premium: ${(premiumDate - now) > 1 ? msToDate(premiumDate - now) : '*No tiene fecha de Caducidad!*'}${lastclaim > 0 ? '\nUltimo claim: ' + new Date(lastclaim) : ''}

SN: para saber tu S/N el comando es !sn (Envialo al privado del bot.)
`.trim()
    let mentionedJid = [who]
    //conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
	conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid: conn.parseMention(str) }})
	if (banned === true) throw `Bot Tiburón🦈  | *「 BANEO 」*\n\n ${username} ESTA BANEADO POR: ${motivoban} 
	No podra usar el bot, hasta que tenga desban. escribe !banlist Para saber quienes estan baneados, o !creadorb para desban.`
	//if (errores === "ERR1") throw ` Este usuario, ${username} , es un STAFF oficial del bot. Y tiene 1/3 Advertencia(s) Por no hacer cumplir los TNC del bot.`
	if (rango === "HeadStaff") throw `Bot Tiburón🦈  | *「 RANGO 」*\n\nEste usuario, ${username} , es un HEADSTAFF oficial de Bot Tiburón🦈 .`
	if (rango === "Staff") throw `Bot Tiburón🦈  | *「 RANGO 」*\n\nEste usuario, ${username} , es un STAFF oficial de Bot Tiburón🦈 .`
	if (rango === "BOT") throw `Bot Tiburón🦈  | *「 BOT 」*\n\n${username} Es un bot...`
	if (rango === "Programador") throw `Bot Tiburón🦈  | *「 RANGO 」*\n\n${username} Es un programador del bot.`
	if (prem === true) throw `Bot Tiburón🦈  | *「 PREMIUM 」*\n\n${username} Es un usuario PREMIUM del bot!`
	//if (banned === false) throw `${username} No violo los TNC`
  }
}
handler.help = ['perfil [@user] (Para ver el perfil de otro user.)']
handler.tags = ['tools']
handler.command = /^profile|perfil$/i
handler.register = true
export default handler

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Dias "+hours+" Horas "+ minutes + " Minutos.";
		// +minutes+":"+sec;
  }
  
  const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
