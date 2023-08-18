let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 

let pp = '.media/menu2.jpg'
 
const sections = [  
{
title: `Bot Tiburón🦈 Menu`,
rows: [
       {title: "/Pack 🥵", description: "para ver el pack bot", rowId: `${usedPrefix}pack`},
        {title: "/Más pack xd 🥵", description: "para ver la concha del bot", rowId: `${usedPrefix}pack`},
        {title: "/menu completo", description: "para vez la lista del menu completo", rowId: `${usedPrefix}menu`},
      {title: "/Menú de audios", description: "Para ver los audios del bot", rowId: `${usedPrefix}menuaudios`},
       
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `╭─「 Bot Tiburón🦈 」
║❥Hola, ${name}! Espero que tengas un lindo día o noche!!
║❥Este Es El Menú +18 
║❥Creador del Bot: wa.me/56937358804
║❥YouTube: https://www.youtube.com/c/TheKillerMaxOFC
║❥Reestablecer códigos de tu número de WhatsApp en menos de 30 segundos: https://youtu.be/c4K0n3XdCXE
║❥Sacar de soporte cualquier número de WhatsApp en menos de 30 segundos: https://youtu.be/DzSAB9_HmC8
║❥Envia ¨Bot¨ para ver los Grupos del Bot.
║❥Envia ¨/serbot¨ para tener el bot en tu número (no disponible por el momento)
║❥Si quieres ayudar a mejorar el bot, puedes donar
║❥Paypal: paypal.me/arris187
║❥Envia los comandos sin * * ¨ ¨ ( )
║ 
╰────
*Bot Tiburón🦈*`, footer: ``, pp,
title: null,
buttonText: "menu +18", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu+18|menúporno|memu3|labiblia|menusexo|+18|memu18|menu18|18menu|menú.18|menucristiano|comandos18|+18|\?)$/i
handler.register = true
export default handler
