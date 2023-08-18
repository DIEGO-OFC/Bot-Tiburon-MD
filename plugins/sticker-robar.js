import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw 'ETIQUETA EL STICKER, IMBECIL!'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Y EL STICKER?!'
    let img = await m.quoted.download()
    if (!img) throw 'Y EL STICKERRRR?'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw 'Bot Tiburón🦈 | *「 ERROR 」*\n\n NO SE PUEDE ROBAR ESTE STICKER.'
  }
}
handler.help = ['robar <Nombre>|<Autor>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
handler.register = true

export default handler
