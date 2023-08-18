let handler = async (m, { conn }) => {
let vn = './media/asen.mp3'
conn.sendFile(m.chat, vn, 'asen.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
handler.customPrefix = /Enojado|ENOJADO|enojado|Molesto|Enojada|ENOJADA|enojada|Molesta/i 
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
