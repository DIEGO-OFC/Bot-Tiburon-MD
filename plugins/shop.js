//let { MessageType } = require('@adiwajshing/baileys')
import db from '../lib/database.js'

const potion = 45
const spotion = 2 
const limit = 1
const money = 2
const Slimit = 1
const Bdiamond = 60
const Sdiamond = 10
const Bcommon = 9
const Scommon = 1
const Suncommon = 2
const Buncommon = 4
const Bmythic = 50 
const Smythic = 7
const Blegendary = 120 
const Slegendary = 10
const Bsampah = 1
const Ssampah = 0.5
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let user = db.data.users[m.sender]
    const _armor = user.armor
    const _sword = user.sword
    //const _budak = user.budak
	const _gato = user.cat
	const _zorro = user.fox
   // const budak = (_budak == 0 ? 6600 : '' || _budak == 1 ? 10000 : '' || _budak == 2 ? 17000 : '' || _budak == 3 ? 26000 : '' || _budak == 4 ? 49000 : '')
    const armor = (_armor == 0 ? 400 : '' || _armor == 1 ? 900 : '' || _armor == 2 ? 1400 : '' || _armor == 3 ? 3800 : '' || _armor == 4 ? 18000 : '')
    const sword = (_sword == 0 ? 370 : '' || _sword == 1 ? 1500 : '' || _sword == 2 ? 2500 : '' || _sword == 3 ? 5000 : '' || _sword == 4 ? 16000 : '')
	const gato = (_gato == 1 ? 202 : '' || _gato == 2 ? 480 : '' || _gato == 3 ? 690 : '' || _gato == 4 ? 2050 : '')
	const zorro = (_zorro == 1 ? 200 : '' || _zorro == 2 ? 490 : '' || _zorro == 3 ? 700 : '' || _zorro == 4 ? 2100 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
*MeduS.A-bot®* | *「 TIENDA 」*\n\n${usedPrefix}tienda <comprar|vender> <item> <cantidad>\n
Ejemplo de uso: *${usedPrefix}tienda comprar pocion 1*\n\n
lista de Bienes:\n\n
*Bienes   |  Precio de compra En LEAFS*\n
Fichas MeduSA:    ${limit}
Pociones MeduSA:    ${potion}
Diamantes:        ${Bdiamond}
Comunes:          ${Bcommon}
Anormales:        ${Buncommon}
Miticas:          ${Bmythic}
Legendarias:      ${Blegendary}
Basura:           ${Bsampah}
Armadura:         ${armor}
Espada:           ${sword}
Nivel gato:       ${gato}
Nivel zorro:       ${zorro}
*Bienes   | Precio de venta En LEAFS*\n
Fichas MeduSA ${Slimit}
Pociones MeduSA:    ${spotion}
Diamantes:    ${Sdiamond}
Comunes:      ${Scommon}
No comunes:   ${Suncommon}
Miticos:      ${Smythic}
Legendarios:  ${Slegendary}
Basura:       ${Ssampah}\n\n
`.trim()
 
        if (/shop|tienda/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = user.sampah
            switch (jualbeli) {
            case 'comprar':
                switch (_type) {
                    case 'pociones':
                            if (user.limit >= potion * count) {
                                user.limit -= potion * count
                                user.potion += count * 1
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nCompraste ${count} Pociones por ${potion * count} Leafs  .\n\nPara usarla, escribe: *${usedPrefix}usar pocion <cantidad>*`, m)
                            } else conn.reply(m.chat, `*MeduS.A-bot®* | *TIENDA*\n\nNo tienes Leaf para comrar ${count} Pocion/es ${potion * count} Leaf  `,)
                        break
                    case 'fichas':
					         if (user.limit <= 0) return conn.reply(m.chat, 'NO TIENES LEAFS!', m)
                             if (user.limit >= money * count) {
                                 user.limit -= money * count
                                 user.money += count * 1
                                 conn.reply(m.chat, `Bot Tiburón🦈 | 「 CASINO 」 \n\n Compraste ${count} Fichas MeduSA, por ${money * count} Leafs`, m)
                              } else conn.reply(m.chat, `Bot Tiburón🦈 | ⚠️ 「 AVISO 」 \n\n No tienes leaf para comprar ${count} Fichas Para el CASINO.`, m)
                           break
                    case 'diamantes':
                            if (user.limit >= Bdiamond * count) {
                                user.diamond += count * 1
                                user.limit -= Bdiamond * count
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nCompraste ${count} Diamantes, al precio de ${Bdiamond * count} Leafs  `, m)
                            } else conn.reply(m.chat, `No tienes Leaf para comprar esto.`, m)
                        
                        break
                    case 'comun':
                            if (user.limit >= Bcommon * count) {
                                user.common += count * 1
                                user.limit -= Bcommon * count
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nCompraste ${count} Caja comunes por ${Bcommon * count} Leafs `, m)
                            } else conn.reply(m.chat, `No tienes Leaf   para comprar esto.`, m)
                        
                        break
                    case 'nocomun':
                            if (user.limit >= Buncommon * count) {
                                user.uncommon += count * 1
                                user.limit -= Buncommon * count
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nCompraste ${count} cajas no comunes, por ${Buncommon * count} Leafs  `, m)
                            } else conn.reply(m.chat, `No tienes Leafs   para comprar esto.`, m)
                        
                        break
                    case 'mitica':
                            if (user.limit >= Bmythic * count) {
                                    user.mythic += count * 1
                                user.limit -= Bmythic * count
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nCompraste  ${count} Cajas misticas por ${Bmythic * count} Leaf  `, m)
                            } else conn.reply(m.chat, `No tienes Leaf   para comprar esto.`, m)
                        
                        break
                    case 'legendaria':
                            if (user.limit >= Blegendary * count) {
                                user.legendary += count * 1
                                user.limit -= Blegendary * count
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nCompraste  ${count} cajas legendarias por ${Blegendary * count} Leaf  `, m)
                            } else conn.reply(m.chat, `No tienes Leaf   para comprar esto.*`, m)
                        
                        break
                    case 'basura':
                            if (user.limit >= Bsampah * count) {
                                user.trash += count * 1
                                user.limit -= Bsampah * count
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nCompraste  ${count} Basura por ${Bsampah * count} Leaf  `, m)
                            } else conn.reply(m.chat, `No tienes Leaf   para comprar esto.`.trim(), m)
                        
                        break
                    case 'espada':
                            if (user.sword == 5) return conn.reply(m.chat, 'La espada esta en *NIVEL MAXIMO*', m)
                            if (user.limit > sword) {
                                user.sword += 1
                                user.limit -= sword * 1
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nActualizaste tu Espada Por ${sword} Leaf  ` ,m)
                            } else conn.reply(m.chat, `No tienes ${sword} leaf para actualizar tu espada.`, m)
                     
                        break
                    case 'armadura':
                            if (user.armor == 5) return conn.reply(m.chat, 'Tu armadura esta en  *NIVEL MAXIMO*', m)
                            if (user.limit > armor) {
                                user.armor += 1
                                user.limit -= armor * 1
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nActualizaste tu armadura por ${armor} leaf` ,m)
                            } else conn.reply(m.chat, `No tienes ${armor} Leafs para actualizar tu armadura.`, m)
                        
                        break
                   /* case 'esclavo':
                            if (user.budak == 5) return conn.reply(m.chat, 'Tu esclavo esta en *NIVEL MAXIMO*', m)
                            if (user.limit > budak) {
                                user.budak += 1
                                user.limit -= budak * 1
                                conn.reply(m.chat, `*MeduS.A-bot®* | *TIENDA*\n\nCompraste exclavo por ${budak} Leaf  ` ,m)
                            } else conn.reply(m.chat, `No tienes dinero para comrar`, m)
                        
                        break
						*/
						case 'zorro':
                            if (user.zorro == 5) return conn.reply(m.chat, 'Tu zorro esta en *NIVEL MAXIMO*', m)
                            if (user.limit > zorro) {
                                user.fox += 1
                                user.limit -= zorro * 1
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nTu zorro subio de nivel Por ${zorro} Leaf  ` ,m)
                            } else conn.reply(m.chat, `No tienes ${zorro} leaf para Subir el nivel de tu zorro.`, m)
                     
                        break
						case 'gato':
                            if (user.gato == 5) return conn.reply(m.chat, 'Tu gato esta en *NIVEL MAXIMO*', m)
                            if (user.limit > gato) {
                                user.cat += 1
                                user.limit -= gato * 1
                                conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nTu gato subio de nivel Por ${gato} Leaf  ` ,m)
                            } else conn.reply(m.chat, `No tienes ${gato} leaf para Subir el nivel de tu gato..`, m)
                     
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'vender': 
                switch (_type) {
                    case 'pociones':
                        if (user.potion >= count * 1) {
                            user.limit += Spotion * count
                            user.potion -= count * 1
                            conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nVendiste ${count} Pocion(es) por ${Spotion * count} Leafs  `.trim(), m)
                        } else conn.reply(m.chat, `No tienes mas pociones`.trim(), m)
                        break
                   case 'fichas':
				   if (user.money <= 0) return conn.reply(m.chat, 'NO TIENES FICHAS!', m)
                       if (user.money >= count * 1) {
                            user.money -= Slimit * count
                            user.limit += count * 1
                            conn.reply(m.chat, `Bot Tiburón🦈 | ⚠️ 「 CASINO 」 \n\n Cambiaste ${Slimit * count} Fichas MeduSA por ${count} Leafs`.trim(), m)
                         } else conn.reply(m.chat, `MeduS.A-bot | ⚠️ 「 AVISO 」 \n\n  No tienes leaf`.trim(), m)
                         break
                    case 'comun':
                        if (user.common >= count * 1) {
                            user.limit += Scommon * count
                            user.common -= count * 1
                            conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nvendiste ${count} Cajas comunes por ${Scommon * count} Leaf  `.trim(), m)
                        } else conn.reply(m.chat, `No tienes cajas comunes`.trim(), m)
                        break
                    case 'nocomunes':
                        if (user.uncommon >= count * 1) {
                            user.limit += Suncommon * count
                            user.uncommon -= count * 1
                            conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nvendiste ${count} Cajas no comunes por ${Suncommon * count} Leaf  `.trim(), m)
                        } else conn.reply(m.chat, `No tienes cajas nocomunes`.trim(), m)
                        break
                    case 'mitica':
                        if (user.mythic >= count * 1) {
                            user.limit += Smythic * count
                            user.mythic -= count * 1
                            conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nVendiste ${count} cajas miticas por ${Smythic * count} Leaf  `.trim(), m)
                        } else conn.reply(m.chat, `No tienes cajas miticas`.trim(), m)
                        break
                    case 'legendaria':
                        if (user.legendary >= count * 1) {
                            user.limit += Slegendary * count
                            user.legendary -= count * 1
                            conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nvendiste ${count} Cajas legendarias por ${Slegendary * count} Leaf  `.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'basura':
                        if (user.trash >= count * 1) {
                            user.trash -= count * 1
                            user.limit += Ssampah * count
                            conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nVendiste ${count} basura, por ${Ssampah * count} leaf  `, m)
                        } else conn.reply(m.chat, `No tienes basura`, m)
                        break
                    case 'diamantes':
                        if (user.diamond >= count * 1) {
                            user.diamond -= count * 1
                            user.limit += Sdiamond * count
                            conn.reply(m.chat, `*Bot Tiburón🦈* | *TIENDA*\n\nvendiste ${count} Diamantes por ${Sdiamond * count} Leaf  `, m)
                        } else conn.reply(m.chat, `No tienes diamantes!`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        }
    
}

handler.help = ['tienda <comprar|vender> <argumentos>']
handler.tags = ['rpg']
    
handler.command = /^(tienda|comprar|vender)$/i
handler.register = true
export default handler