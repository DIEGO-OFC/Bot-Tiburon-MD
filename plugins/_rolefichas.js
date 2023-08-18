import db from '../lib/database.js'
let handler = m => m

handler.before = function (m) {
  let user = db.data.users[m.sender]
        let role2 = (user.money <= 0) ? 'DEUDOR 🚫'
		  : ((user.money >= 1) && (user.money <= 40)) ? 'Jugador de prueba'
          : ((user.money >= 40) && (user.money <= 100)) ? 'Jugador social'
          : ((user.money >= 100) && (user.money <= 1001)) ? 'Jugador habitual'
          : ((user.money >= 1001) && (user.money <= 3000)) ? 'Jugador Profesional'
          : ((user.money >= 3000) && (user.money <= 99999)) ? 'Jugador Compulsivo'
         // : ((user.money >= 2100) && (user.money <= 3000)) ? 'Clase alta 🥇💶'
        //  : ((user.money >= 3000) && (user.money <= 4300)) ? 'Clase media superior 🏆💶'
         // : ((user.money >= 4300) && (user.money <= 10000)) ? 'Clase superior 🎖️💶'
		 // : ((user.money >= 10000) && (user.money <= 70000)) ? 'Royal 👑💶'
          : 'Cazador de bonos'
  user.role2 = role2
  return true
}

export default handler

