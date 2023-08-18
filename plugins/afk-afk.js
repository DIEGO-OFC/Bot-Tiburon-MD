import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
Bot Tiburón🦈 | 🕐 *「 AFK v2 」*

Ahora estás ausente hasta que vuelvas a enviar un nuevo mensaje, cuando te intenten tagear el usuario será notificado de tu ausencia con el motivo.

  ${conn.getName(m.sender)} Esta AFK, Motivo:${text ? ': ' + text : ''}
  `)
}
handler.help = ['afk [motivo]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.register = true

export default handler
