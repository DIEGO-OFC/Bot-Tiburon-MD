let handler = async (m, { conn, text }) => {
    let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    conn.reply(m.chat, l + readMore + r, m)
}
handler.help = ['readmore', 'leermas'].map(v => v + ' <texto>|<texto>')
handler.tags = ['tools']
handler.command = /^(spoiler|hidetext|readmore|leermas)$/i
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)