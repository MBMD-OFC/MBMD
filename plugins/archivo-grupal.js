let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who;
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
else who = m.chat;
let name = await conn.getName(m.sender);	
let user = global.db.data.users[who];
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `✎ _Este comando esta desactivado por las restricciones._\n• _Puedes pedirle al creador del bot que active el comando._\n\n> *Contacto:*\n- @${global.owner[0][0]}`, {quoted: m}) 
if (!text) return conn.reply(m.chat, `✎ _Ingrese el comando y escriba o pegue el numero de *WhatsApp* de la persona que quieres invitarlo al grupo._\n• _Recuerda no agregar el simbolo internacional ( + )_\n\n• *Por ejemplo:*\n*#${command}* 5493973273727`, { quoted: m })
if (text.includes('+')) return conn.reply(m.chat, `✎ _Por favor, asegurese de no agregar el simbolo internacional ( + ) al escribir el numero._\n• _Hagalo de esta manera facil._\n\n• *Por ejemplo:*\n*#${command}* 5493873675737`, { quoted: m })
let group = m.chat;
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
await conn.reply(text+'@s.whatsapp.net', `_Holaa, soy MBMD, estoy aqui por que un usuario llamado ${name} te invito a su grupo._\n• _¡En hora especial, te esperamos hoy dia, estoy seguro de que encontraras buenas personas!_\n\n• \`INFORMACION:\`\n_En este grupo estoy alojado, soy un bot de *WhatsApp*, podras pedirme cosas en este grupo si entras._\n\n✓ _Bot activo 24/7._\n✓ _Comandos gratis._\n✓ _Sin registro o inicio de sesion._\n✓ _Metodos de descargas._\n✓ _Chat GPT._\n✓ _Entretenimiento y más._\n\n> *_Enlace grupal:_*\n🜸 h${link}\n\n- _¡Ven a saber mas!_`, m, {mentions: [m.sender]});
conn.reply(m.chat, `✓ _Se ha enviado la solicitud al usuario:_ @${who.split`@`[0]}\n• _Ahora a esperar a que el usuario acceda._`, { quoted: m });
};
handler.command = /^(add|agregar)$/i;
handler.group = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;
