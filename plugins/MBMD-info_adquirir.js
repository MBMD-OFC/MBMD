let handler  = async (m, { conn, usedPrefix, command }) => {
let mbmd = `❪ ✎ › Para adquirir el bot y agregarlo a tu grupo de WhatsApp, debes hablar con el creador o un asistente.
- Puede hacerlo presionando los siguientes comandos.`
conn.sendButton(m.chat, mbmd, `${wm}`, null, null, null, [[esmsMT.bnCreador(), telegram], [esmsMT.bnAsistencia(), 'https://wa.me/523142183828']], m)}
handler.command = /^(adquirir|adquirirbot)/i
export default handler


