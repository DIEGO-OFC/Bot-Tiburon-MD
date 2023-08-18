let handler = async (m, { conn }) => {
let vn = './media/niconico.mp3'
conn.sendFile(m.chat, vn, 'niconico.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
handler.customPrefix = /niconico|NICONICO|Niconico|niconiconi|Niconiconi|NICONICONI/ 
handler.command = new RegExp
export default handler
