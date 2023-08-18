import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `Bot Tiburón🦈 | *「 GRUPO INFO 」*\n
*ID:* 
${groupMetadata.id}
*Nombre:* 
${groupMetadata.subject}
*Descripcion:* 
${groupMetadata.desc?.toString() || 'DESCONOCIDO'}
*Miembros totales:*
${participants.length} Miembros
*Dueno del grupo:* 
@${owner.split('@')[0]}
*Admins del grupo:*
${listAdmin}
*Configuracion del grupo:*
${isBanned ? '✅' : '❌'} Baneado
${welcome ? '✅' : '❌'} bienvenida
${detect ? '✅' : '❌'} Detect
${del ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link
*Message Settings:*
Bienvenida: ${sWelcome}
Despedida: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['groupinfo']
handler.tags = ['grupo']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i
handler.register = true

handler.group = true

export default handler
