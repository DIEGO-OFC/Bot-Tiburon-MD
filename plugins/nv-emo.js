import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/emo.mp3'
conn.sendFile(m.chat, vn, 'emo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /emo|donde|emo saber donde vives/
handler.command = new RegExp
export default handler


