import Connection from '../lib/connection.js'
import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let groups = Object.entries(Connection.store.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `📢 *DIFUSIÓN (GRUPOS)*\n\n_Mensajes de difusión enviados a ${groups.length} grupos_`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '*Bot Tiburón🦈* | ⚠️ 「 AVISO 」 \n\n ' + teks + '\n\n' + '_Las respuestas a este mensaje no seran leidas_ \n\n _Att: Bot Tiburón🦈 | Equipo de administración._\n' + randomID(32)), true).catch(_ => _)
  m.reply('EXITOSO')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <texto>')
handler.tags = ['programador']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
