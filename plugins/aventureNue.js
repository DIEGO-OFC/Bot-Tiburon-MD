//let { MessageType } = require('@adiwajshing/baileys')
import db from '../lib/database.js'
const cooldown = 300000
	   let handler = async (m, { conn, usedPrefix, DevMode }) => { 
 
 let user = db.data.users[m.sender]
	    //let leaf = global.db.data.users[m.sender].limit
       let timers = (cooldown - (new Date - user.lastadventure)) 
      if (new Date - user.lastadventure <= cooldown) return m.reply(`
Ya fuiste de aventura!! debes esperar *🕐${timers.toTimeString()}* Para hacerlo otra vez.
`.trim())
	   if (user.health < 80) return m.reply(`
Necesitas Minimo 80 de ❤️Vida Para ,a aventura!!
Por favor, curate primero, asi: *${usedPrefix}comprar pocion <cantidad>*,
y escribe *${usedPrefix}curar <cantidad>* Para usar las pociones!
`.trim())
            
				
            let armor = user.armor
            let zorro = user.fox
            let caballo = user.horse
            let gato = user.cat
			let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let pleaf = `${Math.floor(Math.random() * 45)}`.trim()
            let ___health = (____health * 1)
            let gatonya = (gato == 0? 0 : '' || gato == 1 ? 5 : '' || gato == 2 ? 10 : '' || gato == 3 ? 15 : '' || gato == 4 ? 21 : ''  || gato == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - gatonya - armornya : ___health)
            let healt = (gato == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : gato > 0 && armor > 0 ? __health : ___health)
            let exp = (Math.floor(Math.random() * 400) + (caballo * 100))
            let uang = `${Math.floor(Math.random() * 20)}`.trim() 
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _diamond = (zorro == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || zorro == 1 ? pickRandom(['0', '1', '0', '1']) : '' || zorro == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || zorro == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || zorro == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || zorro == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
            let diamond = (_diamond * 1)
            let _common = `${Math.floor(Math.random() * 2)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 1)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 30)}`.trim()
            let legendary = (_legendary * 1)
            let str = `
*Bot Tiburón🦈* | *「 AVENTURA 」*\n\nPerdiste -${healt * 1} de vida, y -${pleaf * 1} Leaf, Porque te aventuraste a ${pickRandom(['Syed', 'Corea del norte', 'Rusia', 'Norte America', 'Iraq', 'Chile', 'La cola de Felipe', 'Brasil', 'Geometry America', 'Argentina', 'El fin del mundo', 'El nether', 'Un grupo de legioneros (maricones)', 'Pluton', 'El sol', 'El conflicto ruso-ucraniano', 'El valle del olvido', 'Liberty city', 'un pueblo donde dios los abandono.'])} Y obtuviste:
*EXP:* ${exp} 
*Leafs:* ${uang}
*Basura:* ${sampah}${diamond == 0 ? '' : '\n*Diamante:* ' + diamond + ''}${potion == 0 ? '' : '\n*Pocion(es):* ' + potion + ''}${common == 0 ? '' : '\n*Caja comun:* ' + common + ''}${uncommon == 0 ? '' : '\n*Caja anormal:* ' + uncommon + ''}
`.trim()
            conn.reply(m.chat, str, m)
            if (mythic > 0) {
                   user.mythic += mythic * 1
                   conn.reply(m.chat, '*Felicitaciones! obtuviste un item raro, llamado:*\n' + mythic + ' CAJA MITICA', m)
            }
            if (legendary > 0) {
                user.legendary += legendary * 1
                conn.reply(m.chat, '*Felicitaciones! obtuviste un item Epico llamado:*\n' + legendary + ' CAJA LEGENDARIA', m)
            }
			
            user.health -= healt * 1
			user.limit -= pleaf * 1
            user.exp += exp * 1
            user.limit += uang * 1
           user.potion += potion * 1
            user.diamond += diamond * 1
            user.common += common * 1 
            user.uncommon += uncommon * 1
            user.trash += sampah * 1
			user.lastadventure = new Date * 1
			//global.db.data.users[m.sender].limit -= 150
           // global.db.data.users[m.sender].lastadventure = new Date * 1
			//conn.reply(m.chat, `🏦 *MeduS.A-bank®*\n\n -null LEAF de impuestos.`, m)
          
 
    
}
//handler.help = ['adventura']
//handler.tags = ['rpg']
handler.command = /^(aventura)$/i
handler.register = true
handler.limit = false
handler.level = 5

handler.fail = null

handler.cooldown = cooldown
handler.disabled = false

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
