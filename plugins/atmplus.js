import db from '../lib/database.js'
const moneyplus = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^depositar/i, '')
  count = count ? /todo/i.test(count) ? Math.floor(db.data.users[m.sender].limit / moneyplus) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].limit >= moneyplus * count) {
   db.data.users[m.sender].limit -= moneyplus * count
    db.data.users[m.sender].bank += count
    conn.reply(m.chat, `Bot Tiburón🦈 | *「 ATM 」*\n\n -${moneyplus * count} LEAF\n+ ${count} En la cuenta de banco`, m)
  } else conn.reply(m.chat, `No tienes ${count} Para depositar...`, m)
}
handler.help = ['depositar <cantidad>(depositar leaf a tu cuenta de banco)', 'depositartodo']
handler.tags = ['rpg']
handler.command = /^depositar([0-9]+)|depositar|depositartodo$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false
handler.admin = false
handler.register = true
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler