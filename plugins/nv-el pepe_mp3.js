let handler = async (m, { conn }) => {
let vn = './media/el pepe.mp3'
conn.sendFile(m.chat, vn, 'el pepe.mp3', null, m, true, {type: 'audioMessage', ptt: true })}
handler.customPrefix = /El pepe|el pepe|El Pepe|el Pepe/ 
handler.command = new RegExp
export default handler
