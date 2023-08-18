import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, text }) => {
	
	let user = db.data.users[m.sender]
	let money = user.limit
	let role2 = user.role
    //let who
   // if (m.isGroup) who = m.sender
    //else who = m.sender
	//let { name, limit, money, lastclaim, registered, regTime, age, level, role2, banned, rango, errores } = global.db.data.users[who]
	//let username = conn.getName(who)
	
    m.reply(` *🏦 *Bot Tiburón🦈*\n\n Hola ${conn.getName(m.sender)}!\n*Tienes: ${money} Leaf!*\n*Tu clase social es: ${role2}* \n recuerda que cada comando semi premium cuesta 10 leaf. Si necesitas ayuda, escribe !ayudaleaf. Si necesitas ayuda, escribe !creador o !hstaff`)
}
handler.help = ['leaf (para saber cuantos leaf tienes)']
handler.tags = ['xp']
handler.command = /^(leaf)$/i
handler.register = false
export default handler
