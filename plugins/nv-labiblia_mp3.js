import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/ora.mp3'
conn.sendFile(m.chat, vn, 'ora.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /laoracion|La biblia|La oración|La biblia|La oración|la biblia|La Biblia/
handler.command = new RegExp
export default handler
