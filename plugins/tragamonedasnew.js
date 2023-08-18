// NUEVO TRAGAMONEDAS v3 PARA MEDUSA BOT v21 by arris
import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix  }) => {
	let who = m.fromMe ? conn.user.jid : m.sender
	 let username = conn.getName(who)
	 let prem = global.prems.includes(who.split`@`[0])
	 let { money, exp, role, limit } = db.data.users[who]
	 if (money < -25) throw `🏦 *Bot Tiburón🦈-CASINO®*\n\n*Hola ${username}.*\nNo podemos prestarte mas Fichas!\n *Le debes al Casino: ${money} 💶 Fichas MeduSA!* \n*Paga tu deuda y con gusto te prestaremos!*\n Recuerda que para comprar fichas debes usar !tienda comprar fichas x (x = cantidad) usa el comando !fichas para saber cuantas fichas tienes! `
	 if (limit > 500) throw `🏦 *Bot Tiburón🦈*\n\n*Hola ${username}.*\nCreo que tienes muchos leaf, no?\n *Tienes: ${limit} 💶 Leaf!* \n*Gasta algo de LEAF y sigue jugando! (necesitas menos de 500)*\nclase social: *${role}* `
	 if (money > 500) throw `🏦 *Bot Tiburón🦈-CASINO®*\n\n*Hola ${username}.*\nCreo que tienes muchas fichas, no?\n *Tienes: ${money} 💶 Fichas Bot Tiburón🦈* \n*Cambialas por LEAF y sigue jugando! (necesitas menos de 500)*\nclase social: *${role}* `
	 let premi = `*Bot Tiburón🦈* | *PREMIUM*\n\n Hola, ${username}!\n Eres premium! utiliza el comando:\n !tragamonedasp (obsoleto)`
	 if (prem === true) throw premi

var myArray = [
  "🍉|🍋|🍌",
  "🍉|🍋|🍋",
  "🍉|🍋|🍌",
  "🍌|🍌|🍋",
  "🍉|🍋|🍋",
  "🍋|🍋|🍋",
  "🍌|🍉|🍌",
  "🍌|🍌|🍉",
  "🍋|🍋|🍉",
  "🍋|🍋|🍋"

];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];



if (randomItem == '🍋|🍋|🍋') {
            db.data.users[m.sender].money += 12
			db.data.users[m.sender].money -= 2
            //m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n GANASTE!\n\n ${randomItem} <===\n\n Sigue asi! Podrias ganar hasta 150 LEAF!`) //aqui para ganar
			await m.reply(`💰 *Bot Tiburón🦈*\n\n*+ 12 Fichas Bot Tiburón🦈* A tu cuenta!`)
			/*await conn.send2Button(m.chat, `MeduS.A-bot® | *「 TRAGA-MONEDAS 」*\n\n GANASTE, ${username}!\n\n ${randomItem} <===\n\n Sigue asi! Podrias ganar hasta 500 FICHAS MeduSA!`, 'MeduS.A-bot® | 「 TRAGA-MONEDAS 」', 'Gracias bot!', `!graciasbot`, 'Otra vez!', `${usedPrefix}tragamonedas`, m)*/
			await conn.sendHydrated(m.chat, `Bot Tiburón🦈 | *「 TRAGA-MONEDAS 」*\n\n GANASTE, ${username}!\n\n ${randomItem} <===\n\n Sigue asi! Podrias ganar hasta 500 FICHAS Bot Tiburón🦈!`, 'Bot Tiburón🦈 | 「 TRAGA-MONEDAS 」', null, null, null, null, null, [
      ['Gracias bot!!', '!graciasbot'],
      ['Cuantas fichas tengo?', '/fichas'],
      ['Otra vez!', '/tragamonedas']
	  ], m)
			}
if (randomItem !== '🍋|🍋|🍋') {
         //SI PIERDES xd
			db.data.users[m.sender].exp += 240
			db.data.users[m.sender].money -= 2
			//await m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n Perdiste!\n\n ${randomItem} <===\n\n Sigue intentando, que estas muy cerca de GANAR!!\n `)
			await m.reply(`Bot Tiburón🦈 | *「 TRAGA-MONEDAS 」*\n\n*+ 220 EXP* Por intentarlo!\n - 2 Fichas MeduSA de apuesta`)
			//await conn.send2Button(m.chat, `MeduS.A-bot® | *「 TRAGA-MONEDAS 」*\n\n Perdiste!\n\n ${randomItem} <===\n\n Sigue intentando, que estas muy cerca de GANAR, ${username}!!\n `, 'MeduS.A-bot® | *TRAGA-MONEDAS*', 'Otra vez, por favor!', `${usedPrefix}tragamonedas`, 'Quiero la loteria!', `${usedPrefix}lote`, m)
			
			await conn.sendHydrated(m.chat, `Bot Tiburón🦈 | *「 TRAGA-MONEDAS 」*\n\n Perdiste!\n\n ${randomItem} <===\n\n Sigue intentando, que estas muy cerca de GANAR, ${username}!!\n`, 'Bot Tiburón🦈 | 「 TRAGA-MONEDAS 」', null, null, null, null, null, [
      ['Otra vez!!', '!tragamonedas'],
      ['Apostar contra el bot!', '/apostar 10'],
      ['Apostar en ruleta!!', '/ruleta 26']
	  ], m)
			}
		
	/*if (astro == 'win') {
		    global.db.data.users[m.sender].money += 15
			global.db.data.users[m.sender].money -= 2
            //m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n GANASTE!\n\n ${randomItem} <===\n\n Sigue asi! Podrias ganar hasta 150 LEAF!`) //aqui para ganar
			await m.reply(`💰 *MeduS.A-bank®*\n\n*+ 15 Fichas MeduSA* A tu cuenta!`)
			await conn.send2Button(m.chat, `MeduS.A-bot® | *「 TRAGA-MONEDAS 」*\n\n GANASTE, ${username}!\n\n ${randomItem} <===\n\n Sigue asi! Podrias ganar hasta 500 FICHAS MeduSA!`, 'MeduS.A-bot® | 「 TRAGA-MONEDAS 」', 'Gracias bot!', `!graciasbot`, 'Otra vez!', `${usedPrefix}tragamonedas`, m)
			}
			
    if (astro == 'lose') {
            //SI PIERDES xd
			global.db.data.users[m.sender].exp += 240
			global.db.data.users[m.sender].money -= 2
			//await m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n Perdiste!\n\n ${randomItem} <===\n\n Sigue intentando, que estas muy cerca de GANAR!!\n `)
			await m.reply(`MeduS.A-bot® | *TRAGA-MONEDAS*\n\n*+ 220 EXP* Por intentarlo!\n - 2 Fichas MeduSA de apuesta`)
			await conn.send2Button(m.chat, `MeduS.A-bot® | *TRAGA-MONEDAS*\n\n Perdiste!\n\n ${randomItem} <===\n\n Sigue intentando, que estas muy cerca de GANAR, ${username}!!\n `, 'MeduS.A-bot® | *TRAGA-MONEDAS*', 'Otra vez, por favor!', `${usedPrefix}tragamonedas`, 'Quiero la loteria!', `${usedPrefix}lote`, m)
			}
*/

}


handler.help = ['!tragamonedas (Prueba tu suerte! ganas 15 Fichas MeduSA!)']
handler.tags = ['game']
handler.command = /^(tragamonedas)$/i
handler.limit = false
handler.register = true

export default handler

