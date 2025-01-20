import { sticker } from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import { webp2png } from '../lib/webp2mp4.js';
let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false;
let user = db.data.users[m.sender];
try {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || '';
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return conn.sendMessage(m.chat, {text: '_Para convertir el video en un sticker, el video no debe de durar mas de 10 segundos._\n• _Intentalo de nuevo recortando el video._'}, { quoted: m });
let img = await q.download?.();
if (!img) return conn.sendMessage(m.chat, {text: `✎ _Ingrese el comando y responda a una imagen, video o gif para convertirlo en un sticker._`}, { quoted: m });
let out;
try {
stiker = await sticker(img, false, 'MBMD', 'stickers');
} catch (e) {
console.error(e);
} finally {
await conn.sendMessage(m.chat, {text: `_Estoy creando el sticker, espere un momento..._`}, { quoted: m });
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img);
else if (/image/g.test(mime)) out = await uploadImage(img);
else if (/video/g.test(mime)) out = await uploadFile(img);
if (typeof out !== 'string') out = await uploadImage(img);
stiker = await sticker(false, out, 'MBMD', 'stickers');
}};
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], 'MBMD', 'stickers');
else return conn.sendMessage(m.chat, {text: '✎ _El enlace tiene que ser con la terminacion *jpg* o *png* para crear un sticker._'}, {quoted: m});
};
} catch (e) {
console.error(e);
if (!stiker) stiker = e;
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', { quoted: m });
else return conn.sendMessage(m.chat, {'✎ _El contenido mensionado no es correcto._\n• _Responda a un video, imagen o gif para convertirlo en sticker._'}, { quoted: m });
}};
handler.command = ['s', 'sticker', 'stiker'];
export default handler;
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));
};
