import db from '../lib/database.js'
let handler = m => m

handler.before = function (m) {
   let user = db.data.users[m.sender]
        let role = (user.limit <= 0) ? 'Vagabundo 🚫 - Deudor.'
		  : ((user.limit >= 1) && (user.limit <= 180)) ? 'Vagabundo 🚫'
		  : ((user.limit >= 180) && (user.limit <= 300)) ? 'Pobreza 🚫'
          : ((user.limit >= 300) && (user.limit <= 500)) ? 'Clase Baja 💶'
          : ((user.limit >= 500) && (user.limit <= 650)) ? 'Clase media baja 🥉💶'
          : ((user.limit >= 650) && (user.limit <= 1000)) ? 'Clase Media 🥈💶'
          : ((user.limit >= 1000) && (user.limit <= 2300)) ? 'Clase Media Alta 🥈💶'
          : ((user.limit >= 2300) && (user.limit <= 3400)) ? 'Clase alta 🥇💶'
          : ((user.limit >= 3400) && (user.limit <= 4600)) ? 'Clase media superior 🏆💶'
          : ((user.limit >= 4600) && (user.limit <= 15000)) ? 'Clase superior 🎖️💶'
		  : ((user.limit >= 15000) && (user.limit <= 50000)) ? 'Familia real 👑💶'
		  : ((user.limit >= 50000) && (user.limit <= 90000)) ? 'Admin de GA'
          : 'Bot Tiburón🦈'
  user.role = role
  return true
}

export default handler
