import db from '../lib/database.js'

const rewards = {
  limit: 20
}
const cooldown = 86400000
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  let user = db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `*Bot Tiburón🦈*\n\nYa Has realizado tu pedido de Leaf/EXP gratis hoy.\nrecuerda que solo puedes realizarlo 1 vez cada 24 horas.\n\n*Próximo Monto:* +20 LEAF \n*En:*  *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendHydrated(m.chat, `*Bot Tiburón🦈* | 「 CLAIM 」\n\nEstos son tus 20 LEAF diarios gratis!`, 'MeduSA-BOT v21', null, null, null, null, null, [
      ['Cuantos leaf tengo?', '/leaf'],
      ['ir al casino!', '/casino'],
      ['Menu!', '/menu']
    ], m)
  user.lastclaim = new Date * 1
}
//handler.help = ['leaf', 'claim']
//handler.tags = ['xp']
handler.command = /^(claimleaf)$/i
handler.register = true

handler.cooldown = cooldown

export default handler
