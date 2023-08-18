import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'SOLO EN GRUPOS'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata NO ESTA DEFINIDA :\\'
    if (!('participants' in groupMetadata)) throw 'Los participantes no estan definidos :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'No estoy en ese grupo :('
    if (!me.admin) throw 'El bot no es admin, Baneando grupo.'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['grupo']
handler.command = /^link(gro?up)?$/i
handler.register = true


export default handler