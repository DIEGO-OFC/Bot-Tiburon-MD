
let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
Padre nuestro, que estás en los Cielos, santificado sea tu nombre, venga tu Reino, hágase tu voluntad así en la tierra como en el cielo. y perdónanos nuestras deudas así como nosotros perdonamos a nuestros deudores, y no nos dejes caer en la tentación, mas líbranos del mal.
`.trim(), 'Bot Tiburón 🦈| Black bot command', '🔷️ MENÚ 🔷', `${usedPrefix}menu`, '👻 Run Time 👻', `${usedPrefix}runtime`, '💠️ MENÚ AUDIOS 💠️', `${usedPrefix}menu2`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
