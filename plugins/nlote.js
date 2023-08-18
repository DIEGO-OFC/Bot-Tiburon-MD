// test!!! comando para medusa bot, no robar XD
import db from '../lib/database.js'


let handler = async (m, { conn, usedPrefix, text }) => {
	
	 //let who = m.fromMe ? conn.user.jid : m.sender
	 let user = db.data.users[m.sender]
	 //let username = conn.getName(who)
	 let money = user.money
	 let role = user.role
	// let prem = global.prems.includes(who.split`@`[0])
	 //let { money, exp, role } = global.db.data.users[who]
	 if (money < -25) throw `🏦 *Bot Tiburón🦈-CASINO®*\n\n*Hola ${conn.getName(m.sender)}.*\nNo podemos prestarte mas Fichas!\n *Le debes al Casino: ${money} 💶 Fichas Bot Tiburón🦈!* \n*Paga tu deuda y con gusto te prestaremos!*\n Recuerda que para comprar fichas debes usar !tienda comprar fichas x (x = cantidad) usa el comando !fichas para saber cuantas fichas tienes! `
	 if (!text) throw ` *MeduS.A-bot® | RULETA*\n\nHola, ${conn.getName(m.sender)} !\nPor favor, Escribe un numero del 1 al 36\n EJEMPLO: ${usedPrefix}ruleta 26`
	 if (text > 36) throw ` *MeduS.A-bot® | RULETA*\n\nHola, ${conn.getName(m.sender)} !\nPor favor, Escribe un numero del 1 al 36\n EJEMPLO: ${usedPrefix}ruleta 26 `
	 
	 var myArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36"
	 
	 
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

if (text == randomItem) {
        //loteria = 'win'
		user.money += 100
            user.pocion += 1
			user.money -= 5
  			await m.reply(`🏦 *MeduS.A-CASINO®*\n\n*+ 100 Fichas MeduSA* A tu cuenta y 1 pocion de regalo!!`)
			//await conn.send2Button(m.chat, `MeduS.A-bot® | *「 RULETA 」*\n\n*Enhorabuena ${username}!*\n*Ganaste en la ruleta de la fortuna!* Son: *130 Fichas MeduSA* para ti!\n Apostaste 5 LEAF al numero: ${text}, y Te toco el numero: ${randomItem}. `, 'MeduS.A-bot® | 「 RULETA 」', 'Gracias bot!', `!graciasbot`, 'Cuantas fichas me quedan?', `${usedPrefix}fichas`, m)
			
			conn.sendHydrated(m.chat, `MeduS.A-bot® | *「 RULETA 」*\n\n*Enhorabuena ${conn.getName(m.sender)}!*\n*Ganaste en la ruleta de la fortuna!* Son: *130 Fichas MeduSA* para ti!\n Apostaste 5 LEAF al numero: ${text}, y Te toco el numero: ${randomItem}.`, 'MeduSA-BOT® v21 | 「 RULETA 」', null, null, null, null, null, [
      ['Gracias bot!!', '!graciasbot'],
      ['Cuantas fichas me quedan?', '/fichas'],
      ['Apostar al 26!!', '/ruleta 26']
	  ], m)
		
		
		}
if (text !== randomItem) {
        //loteria = 'lose' 
		
		//SI PIERDES xd
			user.exp += 100
			user.money -= 5
			await m.reply(`🏦 *MeduS.A-bank®*\n\n*+ 100 EXP* Por intentarlo!\n- 5 Fichas MeduSA de apuesta`)
			//await conn.send2Button(m.chat, `*MeduS.A-bot®* | *「 RULETA 」*\n\nPerdiste!\nApostaste 5 Fichas MeduSA al numero ${text}, y Te toco el numero: ${randomItem}.\n*Sigue intentando!! que estas muy cerca del premio, ${username}!!*`, 'MeduS.A-bot® | 「 RULETA 」', 'Apostar al 26!', `${usedPrefix}ruleta 26`, 'Quiero el tragamonedas!', `${usedPrefix}tragamonedas`, m)
			
			conn.sendHydrated(m.chat, `*MeduS.A-bot®* | *「 RULETA 」*\n\nPerdiste!\nApostaste 5 Fichas MeduSA al numero ${text}, y Te toco el numero: ${randomItem}.\n*Sigue intentando!! que estas muy cerca del premio, ${conn.getName(m.sender)}!!*`, 'MeduSA-BOT® v21 | 「 RULETA 」', null, null, null, null, null, [
      ['Quiero el tragamonedas!', '!tragamonedas'],
      ['Apostar contra el bot!', '/apostar 10'],
      ['Apostar al 26!!', '/ruleta 26']
	  ], m)
		
		}
		
	/*if (loteria == 'win') {
		    user.money += 130
            user.pocion += 1
			user.money -= 5
  			await m.reply(`🏦 *MeduS.A-CASINO®*\n\n*+ 130 Fichas MeduSA* A tu cuenta y 1 pocion de regalo!!`)
			//await conn.send2Button(m.chat, `MeduS.A-bot® | *「 RULETA 」*\n\n*Enhorabuena ${username}!*\n*Ganaste en la ruleta de la fortuna!* Son: *130 Fichas MeduSA* para ti!\n Apostaste 5 LEAF al numero: ${text}, y Te toco el numero: ${randomItem}. `, 'MeduS.A-bot® | 「 RULETA 」', 'Gracias bot!', `!graciasbot`, 'Cuantas fichas me quedan?', `${usedPrefix}fichas`, m)
			
			conn.sendHydrated(m.chat, `MeduS.A-bot® | *「 RULETA 」*\n\n*Enhorabuena ${username}!*\n*Ganaste en la ruleta de la fortuna!* Son: *130 Fichas MeduSA* para ti!\n Apostaste 5 LEAF al numero: ${text}, y Te toco el numero: ${randomItem}.`, 'MeduSA-BOT® v21 | 「 RULETA 」', null, null, null, null, null, [
      ['Gracias bot!!', '!graciasbot'],
      ['Cuantas fichas me quedan?', '/fichas'],
      ['Apostar al 26!!', '/ruleta 26']
	  ], m)
				} */
			
  /*  if (loteria == 'lose') {
            //SI PIERDES xd
			user.exp += 100
			user.money -= 5
			await m.reply(`🏦 *MeduS.A-bank®*\n\n*+ 100 EXP* Por intentarlo!\n- 5 Fichas MeduSA de apuesta`)
			//await conn.send2Button(m.chat, `*MeduS.A-bot®* | *「 RULETA 」*\n\nPerdiste!\nApostaste 5 Fichas MeduSA al numero ${text}, y Te toco el numero: ${randomItem}.\n*Sigue intentando!! que estas muy cerca del premio, ${username}!!*`, 'MeduS.A-bot® | 「 RULETA 」', 'Apostar al 26!', `${usedPrefix}ruleta 26`, 'Quiero el tragamonedas!', `${usedPrefix}tragamonedas`, m)
			
			conn.sendHydrated(m.chat, `*MeduS.A-bot®* | *「 RULETA 」*\n\nPerdiste!\nApostaste 5 Fichas MeduSA al numero ${text}, y Te toco el numero: ${randomItem}.\n*Sigue intentando!! que estas muy cerca del premio, ${username}!!*`, 'MeduSA-BOT® v21 | 「 RULETA 」', null, null, null, null, null, [
      ['Quiero el tragamonedas!', '!tragamonedas'],
      ['Apostar contra el bot!', '/apostar 10'],
      ['Apostar al 26!!', '/ruleta 26']
	  ], m)
			
			}
*/


}
handler.help = ['ruleta 0 - 36 (numero del 0 al 36! gana hasta 300 FICHAS MeduSA)']
handler.tags = ['game']
handler.command = /^(ruleta)$/i
handler.limit = false
handler.register = true
handler.owner = false

export default handler

