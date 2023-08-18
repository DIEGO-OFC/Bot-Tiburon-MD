import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/nadie te pregunto.mp3'
conn.sendFile(m.chat, vn, 'nadie te pregunto.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Nadie te pregunto|quien te pregunto/
handler.command = new RegExp
export default handler


