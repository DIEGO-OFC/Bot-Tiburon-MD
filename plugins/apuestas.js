import db from '../lib/database.js'

let buatall = 1
//let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
	let user = db.data.users[m.sender]
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 55)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
		let who = m.fromMe ? conn.user.jid : m.sender
	    let username = conn.getName(who)
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'apostar <cantidad>\n ' + usedPrefix + 'apostar 1000', m)
        if (user.money >= count * 1) {
            user.money -= count * 1
            await m.reply(`*${username}, Nadie me puede ganar! Tengo mucha suerte...*`) //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `🏦 *MeduS.A-CASINO®*\n\n Veamos que numeros tienen!\n*MeduSA-BOT:${Aku}*\n*${username}: ${Kamu}*\n\n ${username}, *PERDISTE* ${count} Fichas MeduSA`.trim(), m)
            } else if (Aku < Kamu) {
                user.money += count * 2
                conn.reply(m.chat, `🏦 *MeduS.A-CASINO®*\n\n Veamos que numeros tienen!\n*MeduSA-BOT:${Aku}*\n*${username} : ${Kamu}*\n\nBien! ${username}, *GANASTE!* ${count * 2} Fichas MeduSA`.trim(), m)
            } else {
                user.money += count * 1
                conn.reply(m.chat, `🏦 *MeduS.A-CASINO®*\n\n Veamos que numeros tienen!\n*MeduSA-BOT: ${Aku}*\n*${username}: ${Kamu}*\n\n *EMPATE*, ${username} obtienes ${count * 1} Fichas MeduSA`.trim(), m)
            }
        } else conn.reply(m.chat, `🏦 *MeduS.A-CASINO®*\n\n ${username}, NO TIENES ${count} FICHAS MEDUSA PARA APOSTAR!\n Para comprar escribe !comprar fichas x (x = cantidad)`.trim(), m)
    
}
    
handler.help = ['apostar <cantidad>']
handler.tags = ['casino']
handler.command = /^(apostar)$/i
handler.register = true

handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}