import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Bot Tiburón🦈 | *「 A VN 」*\n\nResponde el Audio que quieres que sea una nota de voz! *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw 'Error'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Imposible'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (responde)']
handler.tags = ['audio']

handler.command = /^to(vn|(ptt)?)$/i
handler.register = true

export default handler
