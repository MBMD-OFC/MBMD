let media = mbmdImagens
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let info = `
*\`INFORMACION DE REGISTRO\`*

- _Los usuarios que se registren, pueden tener acceso a las demas funciones ocultas del proyecto._

- _Esto para hacer que el bot sea seguro y confiable, al tener personas registradas en el._

- _Ademas, esto servira para revisar las acciones de cada usuario, de acuerdo con las políticas de seguridad en el proyecto, sea toxicidad, etc._

> ¿Quieres registrarte?`
let info2 = 'Selecciona una opcion.'
await conn.reply(m.chat, info, m)
handler.command = /^info_reg|info_registro$/i
export default handler
