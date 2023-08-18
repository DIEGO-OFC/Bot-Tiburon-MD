//let { MessageType } = require('@adiwajshing/baileys')
import db from '../lib/database.js'


let handler = async (m, { conn, command, args, text, usedPrefix, DevMode }) => {
  let user = db.data.users[m.sender]
    let bruh = `*Bot Tiburón🦈* | *「 CAJAS 」*\n\n ${usedPrefix}abrir <nombre de la caja> < 1 | 10 >\n\nEjemplo: *${usedPrefix}abrir comun 10*\n\nlista de cajas:\n*comun*\n*anormal*\n*mitica*\n*legendaria*`
    let _lmao = args[0]
    let Lmao = `*Bot Tiburón🦈* | *「 CAJAS 」*\n\nSolo soporto 1 a 10 Cajas...\nEjemplo: *${usedPrefix}abrir ${args > 2 ? _lmao : pickRandom(['comun', 'anormal', 'mitica', 'legendaria'])} 10*`
    let type = (args[0] || '').toLowerCase()
    let jumlah = (args[1] || '').toLowerCase()
    switch (type) {
        case 'comun':
            switch (jumlah) {
                case '1':
                case 'crate':
				let leaf = user.limit
	             if (leaf < 10) throw `🏦🏦 *Bot Tiburón🦈*\n\n No tienes 10 LEAF en tu cuenta para comprar la llave! `
                    let _cm = `${Math.floor(Math.random() * 20)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 0)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
*MeduS.A-bot®* | *「 CAJAS 」*\n\nAbriste una caja comun! Esto hay dentro:${cm > 0 ? `\nLeaf: ${cm}` : ''}${ce > 0 ? `\nExp: ${ce} *EXP*` : ''}${cp > 0 ? `\nPocion: ${cp} *Pocion/es*` : ''}${cc > 0 ? `\nCaja comun: ${cc} *Cajas comunes*` : ''}${cu > 0 ? `\nCaja anormal: ${cu} *Cajas anormales*` : ''}
`.trim()
                    if (user.common >= 1) {
                        user.common -= 1
                        user.limit += cm * 1
                        user.exp += ce * 1
                        user.potion += cp * 1
                        user.uncommon += cu * 1
                        user.common += cc * 1
						user.limit -= 10
                        conn.reply(m.chat, Hcom, m)
						conn.reply(m.chat, `🏦 *Bot Tiburón🦈*\n\n -10 LEAF Para comprar la llave.`, m)
                    } else conn.reply(m.chat, '*Bot Tiburón🦈* | *「 CAJAS 」*\n\nNo tienes tantas cajas!!!', m)
                    break
                case '10':
				let leaf1 = user.limit
	             if (leaf1 < 17) throw `🏦🏦 *Bot Tiburón🦈*\n\n No tienes 17 LEAF en tu cuenta para comprar las llaves! `
                    let _cm1 = `${Math.floor(Math.random() * 40)}`.trim()
                    let _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _cp1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _ce1 = `${Math.floor(Math.random() * 700)}`.trim()
                    let _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let cm1 = (_cm1 * 1)
                    let cc1 = (_cc1 * 1)
                    let cp1 = (_cp1 * 1)
                    let ce1 = (_ce1 * 1)
                    let cu1 = (_cu1 * 1)
                    let Hcom1 = `
*MeduS.A-bot®* | *「 CAJAS 」*\n\nAbriste varias cajas normales, y Encontraste:${cm1 > 0 ? `\nLeaf: ${cm1}` : ''}${ce1 > 0 ? `\nExp: ${ce1} *EXP*` : ''}${cp1 > 0 ? `\nPocion: ${cp1} *POCION/ES*` : ''}${cc1 > 0 ? `\nCajas normales: ${cc1} *CAJAS*` : ''}${cu1 > 0 ? `\nCajas anormales: ${cu1} *CAJAS*` : ''}
`.trim()
                    if (user.common >= 10) {
                        user.common -= 10
                        user.limit += cm1 * 1
                        user.exp += ce1 * 1
                        user.potion += cp1 * 1
                        user.uncommon += cu1 * 1
                        user.common += cc1 * 1
						user.limit -= 17
                        conn.reply(m.chat, Hcom1, m)
						conn.reply(m.chat, `🏦 *Bot Tiburón🦈*\n\n -17 LEAF Para comprar las llaves.`, m)
                    } else conn.reply(m.chat, 'No tienes tantas cajas comunes...', m)
                    break
                case 'test932':
                    let _cm2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _cc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cp2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ce2 = `${Math.floor(Math.random() * 7500)}`.trim()
                    let _cu2 = `${Math.floor(Math.random() * 30)}`.trim()
                    let cm2 = (_cm2 * 1)
                    let cc2 = (_cc2 * 1)
                    let cp2 = (_cp2 * 1)
                    let ce2 = (_ce2 * 1)
                    let cu2 = (_cu2 * 1)
                    let Hcom2 = `
QUE, COMO PUEDES VER ESTO XD:${cm2 > 0 ? `\nMoney: ${cm2}` : ''}${ce2 > 0 ? `\nExp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\nPotion: ${cp2} *potion*` : ''}${cc2 > 0 ? `\ncommon crate: ${cc2} *crate*` : ''}${cu2 > 0 ? `\nUncommon crate: ${cu2} *crate*` : ''}
`.trim()
                    if (user.common >= 100) {
                        user.common -= 100
                        user.money += cm2 * 1
                        user.exp += ce2 * 1
                        user.potion += cp2 * 1
                        user.uncommon += cu2 * 1
                        user.common += cc2 * 1
                        conn.reply(m.chat, Hcom2, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case 'test032':
                    let _cm3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
                    let _cp3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
                    let _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let cm3 = (_cm3 * 1)
                    let cc3 = (_cc3 * 1)
                    let cp3 = (_cp3 * 1)
                    let ce3 = (_ce3 * 1)
                    let cu3 = (_cu3 * 1)
                    let Hcom3 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm3 > 0 ? `\nMoney: ${cm3}` : ''}${ce3 > 0 ? `\nExp: ${ce3} *exp*` : ''}${cp3 > 0 ? `\nPotion: ${cp3} *potion*` : ''}${cc3 > 0 ? `\ncommon crate: ${cc3} *crate*` : ''}${cu3 > 0 ? `\nUncommon crate: ${cu3} *crate*` : ''}
`.trim()
                    if (user.common >= 1000) {
                        user.common -= 1000
                        user.money += cm3 * 1
                        user.exp += ce3 * 1
                        user.potion += cp3 * 1
                        user.uncommon += cu3 * 1
                        user.common += cc3 * 1
                        conn.reply(m.chat, Hcom3, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'anormal':
            switch (jumlah) {
                case '1':
                case 'crate':
				let leaf2 = user.limit
	             if (leaf2 < 18) throw `🏦🏦 *Bot Tiburón🦈*\n\n No tienes 18 LEAF en tu cuenta para comprar la llave! `
                    let _ud = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ue = `${Math.floor(Math.random() * 100)}`.trim()
                    let _um = `${Math.floor(Math.random() * 30)}`.trim()
                    let _up = `${Math.floor(Math.random() * 2)}`.trim()
                    let _umc = `${Math.floor(Math.random() * 1)}`.trim()
                    let _uu = `${Math.floor(Math.random() * 1)}`.trim()
                    let _uc = `${Math.floor(Math.random() * 2)}`.trim()
                    let ud = (_ud * 1)
                    let ue = (_ue * 1)
                    let um = (_um * 1)
                    let up = (_up * 1)
                    let umc = (_umc * 1)
                    let uu = (_uu * 1)
                    let uc = (_uc * 1)
                    let Hun = `
*MeduS.A-bot®* | *「 CAJAS 」*\n\nAbriste una caja anormal, esto hay adentro:${um > 0 ? `\nLeaf: ${um}` : ''}${ue > 0 ? `\nExp: ${ue} *EXP*` : ''}${ud > 0 ? `\nDiamantes: ${ud} *Diamantes*` : ''}${up > 0 ? `\nPocion: ${up} *Pocion/es*` : ''}${uc > 0 ? `\nCajas comunes: ${uc} *CAJAS*` : ''}${uu > 0 ? `\nCajas anormales: ${uu} *CAJAS*` : ''}
`.trim()
                    if (user.uncommon >= 1) {
                        user.uncommon -= 1
                        user.limit += um * 1
                        user.diamond += ud * 1
                        user.exp += ue * 1
                        user.potion += up * 1
                        user.common += uc * 1
                        user.uncommon += uu * 1
						user.limit -= 18
                        conn.reply(m.chat, Hun, m)
						conn.reply(m.chat, `🏦 *Bot Tiburón🦈*\n\n -18 LEAF Para comprar la llave.`, m)
                        if (umc > 0) {
                            m.reply(`*Bien! encontraste un item raro, es*\n${umc} Caja mitica`)
                            user.mythic += umc * 1
                        }
                    } else conn.reply(m.chat, '*MeduS.A-bot®* | *「 CAJAS 」*\n\nNo tienes cajas', m)
                    break
                case '10':
				let leaf3 = user.limit
	             if (leaf3 < 20) throw `🏦🏦 *Bot Tiburón🦈*\n\n No tienes 22 LEAF en tu cuenta para comprar las llaves! `
                    let _ud1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _ue1 = `${Math.floor(Math.random() * 700)}`.trim()
                    let _um1 = `${Math.floor(Math.random() * 60)}`.trim()
                    let _up1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _umc1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uu1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uc1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let ud1 = (_ud1 * 1)
                    let ue1 = (_ue1 * 1)
                    let um1 = (_um1 * 1)
                    let up1 = (_up1 * 1)
                    let umc1 = (_umc1 * 1)
                    let uu1 = (_uu1 * 1)
                    let uc1 = (_uc1 * 1)
                    let Hun1 = `
*MeduS.A-bot®* | *「 CAJAS 」*\n\nAbriste Varias cajas anormales, esto hay adentro:${um1 > 0 ? `\nLeaf: ${um1}` : ''}${ue1 > 0 ? `\nExp: ${ue1} *EXP*` : ''}${ud1 > 0 ? `\nDiamantes: ${ud1} *DIAMANTES*` : ''}${up1 > 0 ? `\nPociones: ${up1} *Pocion/es*` : ''}${uc1 > 0 ? `\nCajas comunes: ${uc1} *CAJAS*` : ''}${uu1 > 0 ? `\nCajas anormales: ${uu1} *CAJAS*` : ''}
`.trim()
                    if (user.uncommon >= 10) {
                        user.uncommon -= 10
                        user.leaf += um1 * 1
                        user.diamond += ud1 * 1
                        user.exp += ue1 * 1
                        user.potion += up1 * 1
                        user.common += uc1 * 1
                        user.uncommon += uu1 * 1
						user.limit -= 22
                        conn.reply(m.chat, Hun1, m)
						conn.reply(m.chat, `🏦 *Bot Tiburón🦈*\n\n -22 LEAF Para comprar las llaves.`, m)
                        if (umc1 > 0) {
                            m.reply(`*Bien! encontraste un item raro, es*\n${umc} Caja mitica`)
                            user.mythic += umc1 * 1
                        }
                    } else conn.reply(m.chat, 'No tienes tantas cajas anormales!!!', m)
                    break
                case '10232341':
                    let _ud2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ue2 = `${Math.floor(Math.random() * 8000)}`.trim()
                    let _um2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _up2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _umc2 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
                    let _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let ud2 = (_ud2 * 1)
                    let ue2 = (_ue2 * 1)
                    let um2 = (_um2 * 1)
                    let up2 = (_up2 * 1)
                    let umc2 = (_umc2 * 1)
                    let uu2 = (_uu2 * 1)
                    let uc2 = (_uc2 * 1)
                    let Hun2 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um2 > 0 ? `\nMoney: ${um2}` : ''}${ue2 > 0 ? `\nExp: ${ue2} *exp*` : ''}${ud2 > 0 ? `\nDiamond: ${ud2} *diamond*` : ''}${up2 > 0 ? `\nPotion: ${up2} *potion*` : ''}${uc2 > 0 ? `\nCommon crate: ${uc2} *crate*` : ''}${uu2 > 0 ? `\nUncommon crate: ${uu2} *crate*` : ''}
`.trim()
                    if (user.uncommon >= 100) {
                        user.uncommon -= 100
                        user.money += um2 * 1
                        user.diamond += ud2 * 1
                        user.exp += ue2 * 1
                        user.potion += up2 * 1
                        user.common += uc2 * 1
                        user.uncommon += uu2 * 1
                        conn.reply(m.chat, Hun2, m)
                        if (umc2 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc2} Mythic Crate`)
                            user.mythic += umc2 * 1
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '102324122220':
                    let _ud3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _ue3 = `${Math.floor(Math.random() * 100000)}`.trim()
                    let _um3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _up3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _umc3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uu3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let ud3 = (_ud3 * 1)
                    let ue3 = (_ue3 * 1)
                    let um3 = (_um3 * 1)
                    let up3 = (_up3 * 1)
                    let umc3 = (_umc3 * 1)
                    let uu3 = (_uu3 * 1)
                    let uc3 = (_uc3 * 1)
                    let Hun3 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um3 > 0 ? `\nMoney: ${um3}` : ''}${ue3 > 0 ? `\nExp: ${ue3} *exp*` : ''}${ud3 > 0 ? `\nDiamond: ${ud3} *diamond*` : ''}${up3 > 0 ? `\nPotion: ${up3} *potion*` : ''}${uc3 > 0 ? `\nCommon crate: ${uc3} *crate*` : ''}${uu3 > 0 ? `\nUncommon crate: ${uu3} *crate*` : ''}
`.trim()
                    if (user.uncommon >= 1000) {
                        user.uncommon -= 1000
                        user.money += um3 * 1
                        user.diamond += ud3 * 1
                        user.exp += ue3 * 1
                        user.potion += up3 * 1
                        user.common += uc3 * 1
                        user.uncommon += uu3 * 1
                        conn.reply(m.chat, Hun3, m)
                        if (umc3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc3} Mythic Crate`)
                            user.mythic += umc3 * 1
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao ,m)
            }
            break
        case 'mitica':
            switch (jumlah) {
                case '1':
                case 'crate':
				let leaf4 = user.limit
	             if (leaf4 < 27) throw `🏦🏦 *Bot Tiburón🦈*\n\n No tienes 27 LEAF en tu cuenta para comprar la llave! `
                    let _mm = `${Math.floor(Math.random() * 70)}`.trim()
                    let _mmm = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                    let _me = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mp = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mu = `${Math.floor(Math.random() * 2)}`.trim()
                    let _mc = `${Math.floor(Math.random() * 4)}`.trim()
                    let _ml = `${pickRandom(['0', '0', '1', '0',  '0'])}`.trim()
                    let _md = `${Math.floor(Math.random() * 2)}`.trim()
                    let mm = (_mm * 1)
                    let mmm = (_mmm * 1)
                    let me = (_me * 1)
                    let mp = (_mp * 1)
                    let mu = (_mu * 1)
                    let mc = (_mc * 1)
                    let ml = (_ml * 1)
                    let md = (_md * 1)
                    let Mychat = `
*MeduS.A-bot®* | *「 CAJAS 」*\n\nAbriste una caja mitica! esto hay dentro:${mm > 0 ? `\nLeaf: ${mm}` : ''}${me > 0 ? `\nExp: ${me} *EXP*` : ''}${md > 0 ? `\nDiamantes: ${md} *DIAMANTES*` : ''}${mp > 0 ? `\nPociones: ${mp} *POCIONES*` : ''}${mc > 0 ? `\nCajas comunes: ${mc} *CAJAS*` : ''}${mu > 0 ? `\nCajas anormales: ${mu} *CAJAS*` : ''}
`.trim()
                    if (user.mythic >= 1) {
                        user.mythic -= 1
                        user.limit += mm * 1
                        user.diamond += md * 1
                        user.exp += me * 1
                        user.potion += mp * 1
                        user.common += mc * 1
                        user.uncommon += mu * 1
						user.limit -= 27
                        conn.reply(m.chat, Mychat, m)
						conn.reply(m.chat, `🏦 *Bot Tiburón🦈*\n\n -27 LEAF Para comprar la llave.`, m)
                        if (mmm > 0) {
                            m.reply(`*Encontraste un item raro llamado*\n${mmm} CAJA MITICA`)
                            user.mythic += mmm * 1
                        }
                        if (ml > 0) {
                            m.reply(`*Encontraste un item super raro llamado*\n${ml} CAJA LEGENDARIA`)
                            user.legendary += ml * 1
                        }
                    } else conn.reply(m.chat, 'No tienes tantas cajas', m)
                    break
                case '10':
				let leaf5 = user.limit
	             if (leaf5 < 47) throw `🏦🏦 *Bot Tiburón🦈*\n\n No tienes 47 LEAF en tu cuenta para comprar las llaves! `
                    let _mm1 = `${Math.floor(Math.random() * 140)}`.trim()
                    let _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _mp1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let _mu1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mc1 = `${Math.floor(Math.random() * 8)}`.trim()
                    let _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _md1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let mm1 = (_mm1 * 1)
                    let mmm1 = (_mmm1 * 1)
                    let me1 = (_me1 * 1)
                    let mp1 = (_mp1 * 1)
                    let mu1 = (_mu1 * 1)
                    let mc1 = (_mc1 * 1)
                    let ml1 = (_ml1 * 1)
                    let md1 = (_md1 * 1)
                    let Mychat1 = `
*MeduS.A-bot®* | *「 CAJAS 」*\n\nAbriste 10 *CAJAS MITICAS* y encontraste:${mm1 > 0 ? `\nLeaf: ${mm1}` : ''}${me1 > 0 ? `\nExp: ${me1} *EXP*` : ''}${md1 > 0 ? `\nDiamantes: ${md1} *DIAMANTES*` : ''}${mp1 > 0 ? `\nPociones: ${mp1} *POCIONES*` : ''}${mc1 > 0 ? `\nCajas comunes: ${mc1} *CAJAS*` : ''}${mu1 > 0 ? `\nCajas anormales: ${mu1} *CAJAS*` : ''}
`.trim()
                    if (user.mythic >= 10) {
                        user.mythic -= 10
                        user.leaf += mm1 * 1
                        user.diamond += md1 * 1
                        user.exp += me1 * 1
                        user.potion += mp1 * 1
                        user.common += mc1 * 1
                        user.uncommon += mu1 * 1
						user.limit -= 47
                        conn.reply(m.chat, Mychat1, m)
						conn.reply(m.chat, `🏦 *Bot Tiburón🦈*\n\n -27 LEAF Para comprar las llaves.`, m)
                        if (mmm1 > 0) {
                            m.reply(`*Encontraste un item raro llamado*\n${mmm} CAJA MITICA`)
                            user.mythic += mmm1 * 1
                        }
                        if (ml1 > 0) {
                            m.reply(`*Encontraste un item super raro llamado*\n${ml} CAJA LEGENDARIA`)
                            user.legendary += ml1 * 1
                        }
                    } else conn.reply(m.chat, 'No tienes esa cantidad', m)
                    break
                case '102323235555550':
                    let _mm2 = `${Math.floor(Math.random() * 25000)}`.trim()
                    let _mmm2 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _me2 = `${Math.floor(Math.random() * 30000)}`.trim()
                    let _mp2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _mu2 = `${Math.floor(Math.random() * 80)}`.trim()
                    let _mc2 = `${Math.floor(Math.random() * 150)}`.trim()
                    let _ml2 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _md2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let mm2 = (_mm2 * 1)
                    let mmm2 = (_mmm2 * 1)
                    let me2 = (_me2 * 1)
                    let mp2 = (_mp2 * 1)
                    let mu2 = (_mu2 * 1)
                    let mc2 = (_mc2 * 1)
                    let ml2 = (_ml2 * 1)
                    let md2 = (_md2 * 1)
                    let Mychat2 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm2 > 0 ? `\nMoney: ${mm2}` : ''}${me2 > 0 ? `\nExp: ${me2} *exp*` : ''}${md2 > 0 ? `\nDiamond: ${md2} *diamond*` : ''}${mp2 > 0 ? `\nPotion: ${mp2} *potion*` : ''}${mc2 > 0 ? `\nCommon crate: ${mc2} *crate*` : ''}${mu2 > 0 ? `\nUncommon crate: ${mu2} *crate*` : ''}
`.trim()
                    if (user.mythic >= 100) {
                        user.mythic -= 100
                        user.money += mm2 * 1
                        user.diamond += md2 * 1
                        user.exp += me2 * 1
                        user.potion += mp2 * 1
                        user.common += mc2 * 1
                        user.uncommon += mu2 * 1
                        conn.reply(m.chat, Mychat2, m)
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                case '10012323323255550':
                    let _mm3 = `${Math.floor(Math.random() * 500000)}`.trim()
                    let _mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _me3 = `${Math.floor(Math.random() * 750000)}`.trim()
                    let _mp3 = `${Math.floor(Math.random() * 70)}`.trim()
                    let _mu3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mc3 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _ml3 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _md3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let mm3 = (_mm3 * 1)
                    let mmm3 = (_mmm3 * 1)
                    let me3 = (_me3 * 1)
                    let mp3 = (_mp3 * 1)
                    let mu3 = (_mu3 * 1)
                    let mc3 = (_mc3 * 1)
                    let ml3 = (_ml3 * 1)
                    let md3 = (_md3 * 1)
                    let Mychat3 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm3 > 0 ? `\nMoney: ${mm3}` : ''}${me3 > 0 ? `\nExp: ${me3} *exp*` : ''}${md3 > 0 ? `\nDiamond: ${md3} *diamond*` : ''}${mp3 > 0 ? `\nPotion: ${mp3} *potion*` : ''}${mc3 > 0 ? `\nCommon crate: ${mc3} *crate*` : ''}${mu3 > 0 ? `\nUncommon crate: ${mu3} *crate*` : ''}
`.trim()
                    if (user.mythic >= 1000) {
                        user.mythic -= 1000
                        user.money += mm3 * 1
                        user.diamond += md3 * 1
                        user.exp += me3 * 1
                        user.potion += mp3 * 1
                        user.common += mc3 * 1
                        user.uncommon += mu3 * 1
                        conn.reply(m.chat, Mychat3, m)
                        if (mmm3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm3} Mythic Crate`)
                            user.mythic += mmm3 * 1
                        }
                        if (ml3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml3} Legendary Crate`)
                            user.legendary += ml3 * 1
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'legendaria':
            switch (jumlah) {
                case '1':
                case 'crate':
				let leaf6 = user.limit
	             if (leaf6 < 51) throw `🏦🏦 *Bot Tiburón🦈*\n\n No tienes 51 LEAF en tu cuenta para comprar la llave! `
                    let _lm = `${Math.floor(Math.random() * 100)}`.trim()
                    let _le = `${Math.floor(Math.random() * 550)}`.trim()
                    let _lp = `${Math.floor(Math.random() * 4)}`.trim()
                    let _lu = `${Math.floor(Math.random() * 4)}`.trim()
                    let _lc = `${Math.floor(Math.random() * 7)}`.trim()
                    let _ll = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                    let _lpp = `${pickRandom(['0', '1', '0'])}`.trim()
                    let _ld = `${Math.floor(Math.random() * 3)}`.trim()
                    let _lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
                    let lm = (_lm * 1)
                    let le = (_le * 1)
                    let lp = (_lp * 1) 
                    let lu = (_lu * 1) 
                    let lc = (_lc * 1) 
                    let ll = (_ll * 1) 
                    let lpp = (_lpp * 1)       
                    let ld = (_ld * 1) 
                    let lmm = (_lmm * 1)
                    let Lechat = `
*MeduS.A-bot®* | *「 CAJAS 」*\n\nABRISTE UNA *CAJA LEGENDARIA!* y dentro encontraste:${lm > 0 ? `\nLeaf: ${lm}` : ''}${le > 0 ? `\nExp: ${le} *EXP*` : ''}${ld > 0 ? `\nDiamantes: ${ld} *DIAMANTES*` : ''}${lp > 0 ? `\nPociones: ${lp} *POCIONES*` : ''}${lc > 0 ? `\nCajas comunes: ${lc} *CAJAS*` : ''}${lu > 0 ? `\nCajas anormales: ${lu} *CAJAS*` : ''}
`.trim()  
                    if (user.legendary >= 1) {
                        user.legendary -= 1
                        user.leaf += lm * 1
                        user.diamond += ld * 1
                        user.exp += le * 1
                        user.potion += lp * 1
                        user.common += lc * 1
                        user.uncommon += lu * 1
						user.limit -= 53
                        conn.reply(m.chat, Lechat, m)
						conn.reply(m.chat, `🏦 *Bot Tiburón🦈*\n\n -53 LEAF Para comprar la llave.`, m)
                        if (lmm > 0) {
                            m.reply(`*Encontraste un item raro llamado*\n${lmm} Cajas miticas`)
                            user.mythic += lmm * 1
                        }
                        if (ll > 0 || lpp > 0) {
                             m.reply(`*Encontraste un item EPICO llamado:*${ll > 0 ? `\n${ll} CAJA LEGENDARIA` : ''}${lpp > 0 ? `\n${lpp} CAJA DE MASCOTAS` : ''}`)
                            user.legendary += ll * 1
                            user.pet += lpp * 1
                        }
                    } else conn.reply(m.chat, 'No tienes cajas legendarias!', m)
                    break
                case '10':
				let leaf7 = user.limit
	             if (leaf7 < 90) throw `🏦🏦 *Bot Tiburón🦈*\n\n No tienes 90 LEAF en tu cuenta para comprar la llave! `
                    let _lm1 = `${Math.floor(Math.random() * 200)}`.trim()
                    let _le1 = `${Math.floor(Math.random() * 15000)}`.trim()
                    let _lp1 = `${Math.floor(Math.random() * 8)}`.trim()
                    let _lu1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lc1 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _ll1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _lpp1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _ld1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _lmm1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let lm1 = (_lm1 * 1)
                    let le1 = (_le1 * 1)
                    let lp1 = (_lp1 * 1) 
                    let lu1 = (_lu1 * 1) 
                    let lc1 = (_lc1 * 1) 
                    let ll1 = (_ll1 * 1) 
                    let lpp1 = (_lpp1 * 1)       
                    let ld1 = (_ld1 * 1) 
                    let lmm1 = (_lmm1 * 1)
                    let Lechat1 = `
*MeduS.A-bot®* | *「 CAJAS 」*\n\nABRISTE 10 *CAJAs LEGENDARIAs!* Y adentro encontraste:${lm1 > 0 ? `\nLeaf: ${lm1}` : ''}${le1 > 0 ? `\nExp: ${le1} *EXP*` : ''}${ld1 > 0 ? `\nDiamantes: ${ld1} *DIAMANTES*` : ''}${lp1 > 0 ? `\nPociones: ${lp1} *POCIONES*` : ''}${lc1 > 0 ? `\nCajas comunes: ${lc1} *CAJAS*` : ''}${lu1 > 0 ? `\nCajas anormales: ${lu1} *CAJAS*` : ''}
`.trim()  
                    if (user.legendary >= 10) {
                        user.legendary -= 10
                        user.leaf += lm1 * 1
                        user.diamond += ld1 * 1
                        user.exp += le1 * 1
                        user.potion += lp1 * 1
                        user.common += lc1 * 1
                        user.uncommon += lu1 * 1
						user.limit -= 100
                        conn.reply(m.chat, Lechat1, m)
						conn.reply(m.chat, `🏦 *Bot Tiburón🦈*\n\n -100 LEAF Para comprar las llaves.`, m)
                        if (lmm1 > 0) {
                            m.reply(`*Encontraste un item raro llamado*\n${lmm} Cajas miticas`)
                            user.mythic += lmm1 * 1
                        }
                        if (ll1 > 0 || lpp1 > 0) {
                             m.reply(`*Encontraste un item EPICO llamado:${ll1 > 0 ? `\n${ll1} Caja legendaria` : ''}${lpp1 > 0 ? `\n${lpp1} CAJA DE MASCOTAS` : ''}`)
                            user.legendary += ll1 * 1
                            user.pet += lpp1 * 1
                        }
                    } else conn.reply(m.chat, 'NO TIENES TANTAS!', m)
                    break
                case '1231241424124100':
                    let _lm2 = `${Math.floor(Math.random() * 100000)}`.trim()
                    let _le2 = `${Math.floor(Math.random() * 200000)}`.trim()
                    let _lp2 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _lu2 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _lc2 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _ll2 = `${Math.floor(Math.random() * 11)}`.trim()
                    let _lpp2 = `${Math.floor(Math.random() * 51)}`.trim()
                    let _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
                    let lm2 = (_lm2 * 1)
                    let le2 = (_le2 * 1)
                    let lp2 = (_lp2 * 1) 
                    let lu2 = (_lu2 * 1) 
                    let lc2 = (_lc2 * 1) 
                    let ll2 = (_ll2 * 1) 
                    let lpp2 = (_lpp2 * 1)       
                    let ld2 = (_ld2 * 1) 
                    let lmm2 = (_lmm2 * 1)
                    let Lechat2 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm2 > 0 ? `\nMoney: ${lm2}` : ''}${le2 > 0 ? `\nExp: ${le2} *exp*` : ''}${ld2 > 0 ? `\nDiamond: ${ld2} *diamond*` : ''}${lp2 > 0 ? `\nPotion: ${lp2} *potion*` : ''}${lc2 > 0 ? `\nCommon crate: ${lc2} *crate*` : ''}${lu2 > 0 ? `\nUncommon crate: ${lu2} *crate*` : ''}
`.trim()  
                    if (user.legendary >= 100) {
                        user.legendary -= 100
                        user.money += lm2 * 1
                        user.diamond += ld2 * 1
                        user.exp += le2 * 1
                        user.potion += lp2 * 1
                        user.common += lc2 * 1
                        user.uncommon += lu2 * 1
                        conn.reply(m.chat, Lechat2, m)
                        if (lmm2 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm2} Mythic Crate`)
                            user.mythic += lmm2 * 1
                        }
                        if (ll2 > 0 || lpp2 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll2 > 0 ? `\n${ll2} Legendary Crate` : ''}${lpp2 > 0 ? `\n${lpp2} Pet Crate` : ''}`)
                            user.legendary += ll2 * 1
                            user.pet += lpp2 * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '10023232323232444440':
                    let _lm3 = `${Math.floor(Math.random() * 2000000)}`.trim()
                    let _le3 = `${Math.floor(Math.random() * 5000000)}`.trim()
                    let _lp3 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _lu3 = `${Math.floor(Math.random() * 1000)}`.trim()
                    let _lc3 = `${Math.floor(Math.random() * 2500)}`.trim()
                    let _ll3 = `${Math.floor(Math.random() * 51)}`.trim()
                    let _lpp3 = `${Math.floor(Math.random() * 222)}`.trim()
                    let _ld3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _lmm3 = `${Math.floor(Math.random() * 111)}`.trim()
                    let lm3 = (_lm3 * 1)
                    let le3 = (_le3 * 1)
                    let lp3 = (_lp3 * 1) 
                    let lu3 = (_lu3 * 1) 
                    let lc3 = (_lc3 * 1) 
                    let ll3 = (_ll3 * 1) 
                    let lpp3 = (_lpp3 * 1)       
                    let ld3 = (_ld3 * 1) 
                    let lmm3 = (_lmm3 * 1)
                    let Lechat3 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm3 > 0 ? `\nMoney: ${lm3}` : ''}${le3 > 0 ? `\nExp: ${le3} *exp*` : ''}${ld3 > 0 ? `\nDiamond: ${ld3} *diamond*` : ''}${lp3 > 0 ? `\nPotion: ${lp3} *potion*` : ''}${lc3 > 0 ? `\nCommon crate: ${lc3} *crate*` : ''}${lu3 > 0 ? `\nUncommon crate: ${lu3} *crate*` : ''}
`.trim()  
                    if (user.legendary >= 1000) {
                        user.legendary -= 1000
                        user.money += lm3 * 1
                        user.diamond += ld3 * 1
                        user.exp += le3 * 1
                        user.potion += lp3 * 1
                        user.common += lc3 * 1
                        user.uncommon += lu3 * 1
                        conn.reply(m.chat, Lechat3, m)
                        if (lmm3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm3} Mythic Crate`)
                            user.mythic += lmm3 * 1
                        }
                        if (ll3 > 0 || lpp3 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll3 > 0 ? `\n${ll3} Legendary Crate` : ''}${lpp3 > 0 ? `\n${lpp3} Pet Crate` : ''}`)
                            user.legendary += ll3 * 1
                            user.pet += lpp3 * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'mascotas':
            let _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
            let mknp = (_mknp * 1)
            let gato = user.cat
            let zorro = user.fox
            let caballo = user.horse
            let _pet = `${pickRandom(['gato', 'zorro', 'caballo'])}`.trim()
            if (user.pet > 0) { 
                user.pet -= 1
                if (_pet == 'gato' && gato > 0) {
                    user.potion += 2
                    user.petFood += mknp * 1
                    conn.reply(m.chat, `Tu ya tienes un ${_pet}, El regalo se remplaza con 2 pociones ${mknp > 0 ? ` y ${mknp} Comida de mascota` : ''}`, m)
                } else if (_pet == 'gato' && gato == 0) {
                    user.cat += 1
                    user.petFood += mknp * 1
                    conn.reply(m.chat, `*Enhorabuena! ahora tienes un ${_pet} de mascota! ${mknp > 0 ? ` y ${mknp} Alimento de mascotas*` : '*'}`, m)
                } else if (_pet == 'zorro' && zorro > 0) {
                    user.potion += 2
                    user.petFood += mknp * 1
                    conn.reply(m.chat, `Tu ya tienes un ${_pet}, El regalo se remplaza con 2 pociones ${mknp > 0 ? ` y ${mknp} Comida de mascota` : ''}`, m)
                } else if (_pet == 'zorro' && zorro == 0) {
                    user.fox += 1
                    user.petFood += mknp * 1
                    conn.reply(m.chat, `*Enhorabuena! ahora tienes un ${_pet} de mascota! ${mknp > 0 ? ` y ${mknp} Alimento de mascotas*` : '*'}`, m)
                } else if (_pet == 'caballo' && caballo  > 0) {
                    user.potion += 2
                    user.petFood += mknp * 1
                    conn.reply(m.chat, `Tu ya tienes un ${_pet}, El regalo se remplaza con 2 pociones ${mknp > 0 ? ` y ${mknp} Comida de mascota` : ''}`, m)
                } else if (_pet == 'caballo' && caballo == 0) {
                    user.horse += 1
                    user.petFood += mknp * 1
                    conn.reply(m.chat, `*Enhorabuena! ahora tienes un ${_pet} de mascota! ${mknp > 0 ? ` y ${mknp} Alimento de mascotas*` : '*'}`, m)
                } else {
                    user.petFood += mknp * 1
                    m.reply(pickRandom(['No tienes tanta suerte', 'Intenta la proxima vez!, Porque no gane una mascota? :c', 'Lo siento, no ganaste una mascota.', 'No mascotas para ti hoy.', 'Felipe se robo un mascota!']) + '. Solo ganaste *' + mknp + '* Comida de mascotas')
                }
            } else m.reply('NO TIENES CAJAS DE MASCOTAS')
            break
        default:
            return conn.reply(m.chat, bruh, m)
    }
  
}
handler.help = ['abrir <caja>']
handler.tags = ['rpg']
handler.command = /^(abrir|open)$/i
handler.group = false
handler.register = false
handler.fail = null
handler.limit = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}