import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/bts.mp3'
conn.sendFile(m.chat, vn, 'bts.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /calla|bts|Bts/
handler.command = new RegExp
export default handler


