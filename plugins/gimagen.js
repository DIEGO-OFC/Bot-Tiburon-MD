import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `EJEMPLO: ${usedPrefix}${command} roki vulovic`
    const res = await googleImage(text)
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
*── 「 IMAGEN DE GOOGLE 」 ──*
Resultados de *${text}*
`.trim(), m)
}
handler.help = ['gimage <query>', 'imajeng <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|imajeng)$/i
handler.register = true

export default handler