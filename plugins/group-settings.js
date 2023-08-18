let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'abrir': 'not_announcement',
        'cerrar': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*ERROR! ejemplos :*
  * ${usedPrefix + command} cerrar*
  * ${usedPrefix + command} abrir*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grupo *abrir / cerrar*']
handler.tags = ['group']
handler.command = /^(grupo)$/i

handler.admin = true
handler.botAdmin = true
handler.register = true

export default handler
