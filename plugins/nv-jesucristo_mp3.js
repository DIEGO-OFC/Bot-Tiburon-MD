let handler = async (m, { conn }) => {
let vn = './media/jesucristo.mp3'
conn.sendFile(m.chat, vn, 'jesucristo.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
handler.customPrefix = /Jesucristo|jesucristo|Jesús|jesús|Auronplay|Auron|Dios/ 
handler.command = new RegExp
export default handler
