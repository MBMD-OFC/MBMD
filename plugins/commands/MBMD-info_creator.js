let media = mbmdImagens
let handler = async (m, { conn, command }) => {
let creador = `
> Si tienes dudas o problemas, puedes contactar al creador del proyecto o al asistente.

⎔ *Creador:*
${telegram}

⎔ *Asistencia:*
${asistencia}
`
conn.reply(m.chat, creador, m)}
handler.command = /^creador|creator|desarrolladores$/i
export default handler
