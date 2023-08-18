import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Bot Tiburón🦈 | *「 MP3 」*\n\n Responde a la nota de voz que quieres que sea MP3*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw 'ERROR'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'IMPOSIBLE DE HACER'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (respuesta)']
handler.tags = ['audio']

handler.command = /^to(mp3|a(udio)?)$/i
handler.register = true

export default handler
