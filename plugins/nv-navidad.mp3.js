let handler = async (m, { conn }) => {
let vn = './media/navidad.m4a'
conn.sendFile(m.chat, vn, 'navidad.m4a', null, m, true, {type: 'audioMessage', ptt: true})}
handler.customPrefix = /Feliz navidad|feliz navidad|Merry Christmas|merry chritmas/ 
handler.command = new RegExp
export default handler
