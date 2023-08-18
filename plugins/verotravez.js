let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));

let handler = async (m, { conn }) => {
    if (!m.quoted) throw '[❌] Y DONDE ESTA EL MENSAJE?'
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Bot Tiburón🦈 |  *「 VerOtraVez 」*\n\nESTA FUNCION ESTA DESHABILITADA. COMUNICATE CON UN PROGRAMADOR O STAFF.'
    const buffer = await m.quoted.download()
    const media = m.quoted.mediaMessage[m.quoted.mediaType]
    conn.sendFile(m.chat, buffer, /video/.test(media.mimetype) ? 'video.mp4' : 'image.jpg', media.caption || '', m)
}

handler.help = ['vermensaje (reenvia en imagen o video, los archivos de ver una sola vez)']
handler.tags = ['tools']
handler.register = true
handler.command = /^vermensaje|verotravez/i

export default handler
