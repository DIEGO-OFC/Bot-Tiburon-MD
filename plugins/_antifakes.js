import db from '../lib/database.js'
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
if (!m.isGroup) return !1		
if (m.sender.startsWith('212' || '212')) {
if (!m.isGroup) return !1
db.data.users[m.sender].banned = true
m.reply(`✳️ Anti árabes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}  
if (m.sender.startsWith('265' || '265')) {
if (!m.isGroup) return !1
db.data.users[m.sender].banned = true
m.reply(`✳️ Anti árabes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
}
export default handler
