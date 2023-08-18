
import db from '../lib/database.js'
const moneymins = 1

let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^sacar/i, '')
  count = count ? /todo/i.test(count) ? Math.floor(db.data.users[m.sender].bank / moneymins) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (db.data.users[m.sender].bank >= moneymins * count) {
    db.data.users[m.sender].bank -= moneymins * count
    db.data.users[m.sender].limit += count
    conn.reply(m.chat, `Bot Tiburón🦈 | *「 ATM 」*\n\n-${moneymins * count} LEAF en la cuenta de banco\n+ ${count} Leaf`, m)
  } else conn.reply(m.chat, `NO TIENES ${count} PARA RETIRAR`, m)
}
handler.help = ['sacar <cantidad> (Saca leaf de tu cuenta de banco)', 'sacartodo']
handler.tags = ['rpg']
handler.command = /^sacar([0-9]+)|sacar|sacartodo$/i
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