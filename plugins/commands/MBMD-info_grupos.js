let handler = async (m, { conn, command }) => {
let media = mbmdImagens
let grupos = `*¡¡BIENVENIDO A LOS GRUPOS PRINCIPALES!!*
- _Puedes interactuar con cualquier integrante en los siguientes grupos._
- _Tambien es importante que sigas las reglas establecidas para evitar problemas._
- _Puedes hacer tus preguntas para que otros te contesten con una respuesta posible._
- _No queremos una comunidad toxica, se tratan de buena manera, de lo contrario, sera eliminado._

· · ───────────────── · · 
- 💬 *GENERAL ): _Este es un grupo general, en donde puedes platicar y dar opiniones o pasar el tiempo, no se aceptan otros bots, solo un bot espesificado._*
• ${grupo1}

- 🎮 *GAMES ): _Este grupo solo trata de juegos, sea eventos y logros para ganar mas cosas en MBMD._*
• ${grupo2}

- 🕯️ *SKY ): _Este grupo es exclusivo para los jugadores de Sky, no se acepta ninguna toxicidad, solo compartan o jueguen._*
• ${grupo3} 

- 📌 *SUPPORT ): _Este grupo solo podras consultar problemas o saber mas sobre el tema del proyecto._*
• ${grupo4}

- 🤖 *BOTS ): _El grupo es exclusivo y unicamente para bots, aqui puedes adquirir uno o usar uno distinto._*
• ${grupo5}`
await conn.reply(m.chat, grupos, m)
//await conn.sendButton(m.chat, str, wm, media, [
//[esmsMT.bnCuentas(), '.cuentasofc'],
//[esmsMT.bnEstado(), '.estado']], null, [
//[esmsMT.bnMBMD,() `${md}`]], fkontak)}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33
export default handler
