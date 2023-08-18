//let { MessageType } = require('@adiwajshing/baileys')
import db from '../lib/database.js'
const cooldown = 300000
	   let handler = async (m, { conn, usedPrefix, DevMode }) => { 
 
        let user = db.data.users[m.sender]
        let timers = (cooldown - (new Date - user.lastadventure)) 
      if (new Date - user.lastadventure <= cooldown) return m.reply(`
Ya fuiste de aventura o minaste!! debes esperar *🕐${timers.toTimeString()}* Para hacerlo otra vez.
`.trim())
	   if (user.health < 80) return m.reply(`
Necesitas Minimo 80 de ❤️Vida Para Minar!!
Por favor, curate primero, asi: *${usedPrefix}comprar pocion <cantidad>*,
y escribe *${usedPrefix}curar <cantidad>* Para usar las pociones!
`.trim())
		let leaf = user.limit
			if (leaf < 400) throw `*Bot Tiburón🦈* | ⚠️ 「 MINA 」 \n\n Solo De clase media en adelante puede entrar a la mina!! Minimo 400 Leaf en tu cuenta debes tener para minar! (no te descontaremos nada)`
 
            let armor = user.armor
            let zorro = user.fox
            let caballo = user.horse
            let gato = user.cat
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let gatonya = (gato == 0? 0 : '' || gato == 1 ? 5 : '' || gato == 2 ? 10 : '' || gato == 3 ? 15 : '' || gato == 4 ? 21 : ''  || gato == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - gatonya - armornya : ___health)
            let healt = (gato == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : gato > 0 && armor > 0 ? __health : ___health)
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _diamond = (zorro == 0 ? pickRandom(['0', '1', '0', '1', '0', '0', '0']) : '' || zorro == 1 ? pickRandom(['0', '1', '0', '1']) : '' || zorro == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || zorro == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || zorro == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || zorro == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
			let _gato = (gato == 0 ? pickRandom(['1', '7', '0', '5', '1', '4', '0']) : '' || gato == 1 ? pickRandom(['10', '13', '8', '5', '0', '4', '0']) : '' || gato == 2 ? pickRandom(['10', '16', '20', '19', '23']) : '' || gato == 3 ? pickRandom(['18', '23', '26', '29', '24', '30']) : '' || gato == 4 ? pickRandom(['31', '28', '37', '32', '38', '36', '35']) : '' || gato == 5 ? pickRandom(['40', '47', '50', '42', '41', '40', '45', '48']) : '' )
            let diamond = (_diamond * 1)
			let leafg = (_gato * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
            let kayu =  `${Math.floor(Math.random() * 7)}`.trim() 
            let batu =  `${Math.floor(Math.random() * 20)}`.trim() 
            let iron = `${Math.floor(Math.random() * 20)}`.trim()
            let exp = `${Math.floor(Math.random() * 20)}`.trim() 
            //let uang = `${Math.floor(Math.random() * 3)}`.trim() 
            //conn.reply(m.chat, '*MeduS.A-bot®* | ⚠️ *「 COMANDO BETA 」* \n\n ↓Minado:', m)
            let str = `
*Bot Tiburón🦈* | *「 MINA 」* \n\nMientras minabas, encontraste:
🔮Piedra: ${batu}
🔩Hierro: ${iron}
🪵Madera: ${kayu}
${diamond == 0 ? '' : '💎  *Diamantes:* ' + diamond + ''}
${leafg == 0 ? '' : '💵  *Leaf:* ' + leafg + ''}
⚜️Exp: ${exp}
`.trim()
            conn.reply(m.chat, str, m)
            user.wood += kayu * 1
			user.diamond += diamond * 1
            user.stone += batu * 1
            user.iron += iron * 1
            user.exp += exp * 1
            user.limit += leafg * 1
            user.lastadventure = new Date * 1
           
        
    
}
handler.help = ['mine', 'minar']
handler.tags = ['rpg']
handler.command = /^(nmine|minar)$/i
handler.mods = false
handler.register = true
handler.level = 5

handler.disabled = false

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
