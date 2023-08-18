import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `
*Oe causa un gato que hace wau wau*
_Bot-Tiburon🦈_
`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch {
throw '*[❗] 𝙴𝚁𝚁𝙾𝚁*'
}}
handler.help = ['cat']
handler.tags = ['general']
handler.command = /^cat$/i
handler.fail = null
handler.register = true
export default handler
