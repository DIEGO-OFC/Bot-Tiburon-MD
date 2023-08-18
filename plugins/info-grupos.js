let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
✧─────[ *Bot Tiburón🦈* ]─────✧
comunidad:
https://chat.whatsapp.com/FWTfjomM3vuClWhlopElVd
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `Bot Tiburón🦈`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^grupos|Grupos$/i
handler.register = true

export default handler 
