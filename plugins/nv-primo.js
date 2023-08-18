import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/primo.mp3'
conn.sendFile(m.chat, vn, 'primo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Mi primo|Primo|Mamá mi primo|Ayuda mi primo/
handler.command = new RegExp
export default handler
