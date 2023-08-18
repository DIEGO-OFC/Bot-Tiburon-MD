import { execSync } from 'child_process'
let handler = async (m) => {
var update = execSync('git remote set-url origin https://github.com/DIEGO-OFC/Bot-Tiburon-MD.git && git pull')
m.reply(update.toString())}
handler.help = ['actualizarbot']
handler.tags = ['propietario']
handler.command = /^(actualizarbot|actualizar|update)$/i
handler.rowner = true
export default handler
