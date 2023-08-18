/* By https://github.com/Micasatio */
let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var tiburon = `
*ミ😈 Hola cara de bola 😈彡*
*ミ🥵 Estado del Bot 🥵彡*
*=> Bot exitado ✔️*
*=> Bot uso público ✔️*
 
Bot Tiburón 🦈
`.trim()
m.reply(tiburon)}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler
