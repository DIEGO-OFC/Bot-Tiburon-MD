import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, text }) => {
	
	let user = db.data.users[m.sender]
	let money = user.money
	let role2 = user.role2
    //let who
   // if (m.isGroup) who = m.sender
    //else who = m.sender
	//let { name, limit, money, lastclaim, registered, regTime, age, level, role2, banned, rango, errores } = global.db.data.users[who]
	//let username = conn.getName(who)
	
    m.reply(` *Bot Tiburón🦈-CASINO®*\n\n Hola ${conn.getName(m.sender)}!\n*Tienes: ${money} Ficha(s) Bot Tiburón🦈!*\n*🎰 Clase de jugador en Casino: ${role2}* \n recuerda que Para cambiar tus fichas por leaf, debes poner !tienda vender fichas x (x remplazas por cantidad). Si necesitas ayuda, escribe !creador o !hstaff`)
}
handler.help = ['fichas']
handler.tags = ['casino']
handler.command = /^(fichas)$/i
handler.register = false
export default handler