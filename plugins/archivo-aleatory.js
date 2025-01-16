import PhoneNumber from 'awesome-phonenumber';
import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';
import axios from 'axios';
import { toAudio } from '../lib/converter.js'
const {downloadContentFromMessage} = (await import("baileys"));
let baileys = (await import(global.baileys)).default;
let handler = async (m, { conn, usedPrefix, command, args, text, command }) => {

//Crear un grupo.
if (command == 'gnew') {
if (!text) return conn.sendMessage(m.chat, {text: '✎ _Ingrese el comando y escriba el nombre del grupo para crear un grupo nuevo con el bot._'}, {quoted: m});
try{
conn.sendMessage(m.chat, {text: '✎ _Creando el grupo, espere un momento..._'}, {quoted: m});
let group = await conn.groupCreate(text, [m.sender]);
let link = await conn.groupInviteCode(group.gid);
let url = 'https://chat.whatsapp.com/' + link;
conn.sendMessage(m.chat, {text: `✎ _Aqui tiene el enlace del grupo creado:_\n• ${url}`}, {quoted: m});
} catch (e) {
conn.sendMessage(m.chat, {text: `✎ _El comando:_ *#${command}*\n• _Ha fallado, si el error continua, es mejor reportarlo al grupo de soporte._\n\n🝐 *Grupo de soporte:*\n• ${global.grupo_soporte}\n\n⫿  _Recuerda reportar comandos erroneos._`}, {quoted: m});
}};

//Mostrar mensajea de una vez visto.
if (command == 'mostrar') {
if (!m.quoted) throw `❪ ✎ › Ingrese el comando y responda a una imagen o video que esten ver una sola vez.`;
if (m.quoted.mtype !== 'viewOnceMessageV2') throw tradutor.texto2;
const msg = m.quoted.message;
const type = Object.keys(msg)[0];
const media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (/video/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.mp4', msg[type].caption || '', m);
} else if (/image/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.jpg', msg[type].caption || '', m);
}};

//Publicar contenidos en el bot de manera rpg.
if (command == 'share') {
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
const publicador = m.constructor;
const which = command.replace(/share_/i, '');
if (!m.quoted) conn.sendMessage(m.chat, { text: '✎ _Ingrese el comando y responda a un contenido y asignale un nombre para publicarlo._' }, { quoted: m });
if (!text) return conn.sendMessage(m.chat, { text: `✎ _Ingrese el comando de lista para ver las publicaciones._\n\n• *Por ejemplo:*\n_#listp_`}, { quoted: m });
const msgs = global.db.data.msgs;
if (text in msgs) return conn.sendMessage(m.chat, {text: `✎ _Ese nombre ya esta registrado en las publicaciones, elija otro nombre._`}, { quoted: m });
msgs[text] = publicador.toObject(await m.getQuotedObj());
conn.sendMessage(m.chat, {text: `✓ _El contenido se ha publicado con exito._\n\n¿Ver publicacion?\nUse el comando: #verp ${text}`}, { quoted: m });
global.db.data.users[m.sender].boletos += 1000
global.db.data.users[m.sender].piesas += 1
conn.sendMessage(m.chat, {text: `✅ Publicado en MBMD.`}, { quoted: m });
conn.reply(`${who.split`@`[0]}@s.whatsapp.net`, 
`*_¡Acabas de publicar un contenido!_*
_Por tu publicacion obtienes:_

• 1000 🧧 *Boletos*
• 1 🧩 *Piesa*`, 
m);
};

//Ver lista de publicaciones rpg.
if (command == 'listp') {
const msgs = global.db.data.msgs;
conn.sendMessage(m.chat, {text: `
*\`MBMD : PUBLICACIONES\`*

*╭──────•····*
${Object.keys(msgs).map((v) => '*│⊹ ' + v).join('*\n*│⊹')}*
*╰──────•····*`}, { quoted: m });
};

//Ver el contenido publicado.
if (command == 'verp_') {
  const which = command.replace(/verp_/i, '');
  if (!text) return conn.sendMessage(m.chat, {text: `❪ ✎ › Ingrese el comando y escriba el nombre de la publicacion.\n\n• *Por ejemplo:*\n#ver-video MBMD\n\n- _Si sabe los nombres de las publicaciones, use el comando:_\n#listp`}, { quoted: m });
  const msgs = global.db.data.msgs;
  if (!text in msgs) return conn.sendMessage(m.chat, {text: `❪ ✘ › El nombre de la publicacion: *${text}*\n- No existe o se ha eliminado...`}, { quoted: m });
  const _m = await conn.serializeM(msgs[text]);
  await _m.copyNForward(m.chat, true);
};

//Eliminar publicacion rpg.
if (command == 'delp_') {
  const which = command.replace(/delp_/i, '');
  if (!text) return conn.sendMessage(m.chat, { text: `✎ _Ingrese el comando y escriba el nombre de su publicacion para eliminarlo._\n\n• *Por ejemplo:*\n#delp_video MBMD\n\n- _Si no sabe como era el nombre de su publicacion, puede ver la lista usando el comando:_\n#listp` }, { quoted: m });
  const msgs = global.db.data.msgs;
  if (!text in msgs) return conn.sendMessage(m.chat, {text: `✘ _El nombre de la publicacion: *${text}*\n- No existe o se ha eliminado._`}, { quoted: m });
  delete msgs[text];
  conn.sendMessage(m.chat, {text: `✓ _Se ha eliminado la publicacion, puedes publicar mas contenido si desea._`}, { quoted: m });
};

//Informacion de un grupo.
if (command == 'isgroup') {
let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
if (!code) return conn.sendMessage(m.chat, {text: `✎ _Ingrese el comando mas un enlace grupal de WhatsApp para inspeccionarlo._`}, { quoted: m });
let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
data = extractGroupMetadata(res),
txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error);
let groupinfo = `
𐇭 *NOMBRE:* ${data.subject}
𐇭 *CREADO EN:* ${data.creation}
𐇭 *CREADOR/A:* ${data.owner}
𐇭 *ID:* ${data.id}
𐇭 *DESCRIPCION:* 
${data.desc}
`.trim();
awat conn.sendMessage(m.chat, {url: pp}, {text: groupinfo}, { quoted: m });
};

//Buscador de musicas.
if (command == 'wmusix') {
let q = m.quoted ? m.quoted : m;
let mime = q.mediaType || '';
if (/audio|video/.test(mime)) {
let media = await q.download(true);
let upload = await uploadFile(media);
let shp = await fetch(`https://apis-starlights-team.koyeb.app/starlight/chazam?url=${upload.files[0].url}`, { headers: { 'Content-Type': 'application/json' }});
let json = await shp.json();
let app = { title: json.title, artist: json.artist, type: json.type, url: json.url };
let txt = `✎ _Aqui tiene los resultados.__
ㅇ *Nombre:* ${app.title}
ㅇ *Artista:* ${app.artist}
ㅇ *Tipo:* ${app.type}
ㅇ *Enlace:* ${app.url}`;
conn.sendMessage(m.chat, { text: txt }, { quoted: m });
} else {
return conn.sendMessage(m.chat, { text: '✎ _Responda a un audio o video para obtener el nombre de la cancion._' }, { quoted: m });
}};

if (command == 'blackbox') {
if (!text) return conn.sendMessage(m.chat, { text: '✎ Ingrese el comando y escriba un texto para pedira BlackBox.' }, { quoted: m });
await conn.sendMessage(m.chat, { text: 'Buscando resultados...' }, { quoted : m });
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/blackbox?system=Eres+una+ai+llamada+blackbox&text=${text}`);
let json = await api.json();
if (json.results) {
await conn.sendMessage(m.chat, { text: json.results }, { quoted: m });
} else {
await m.react('⛔');
}
} catch {
await m.react('🚫');
}};

if (command == 'dtcface') {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!mime.startsWith('image/')) { 
return conn.sendMessage(m.chat, { text: '✎ Responda a una imagen para usar este comando.' }, { quoted: m });
}
await conn.sendMessage(m.chat, { text: 'Generando, espere un momento...' }, { quoted: m });

let media = await q.download();
let formData = new FormData();
formData.append('image', media, { filename: 'file' });

  let uploadResponse = await axios.post('https://api.imgbb.com/1/upload?key=10604ee79e478b08aba6de5005e6c798', formData, { headers: { ...formData.getHeaders(),}});

if (uploadResponse.data.data) {
let url = uploadResponse.data.data.url;
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/detect-faces?url=${url}`);
let json = await api.json();
let { results } = json;
let txt = `✎ Aqui tiene los resultados logrados.

• *Forma:* ${results.form}
• *Genero:* ${results.gender}`;
await conn.reply(m.chat, txt, { quoted: m });
} else {
await conn.sendMessage(m.chat, { text: 'Ocurrio un error en este comando, reportalo al creador del bot.' }, { quoted: m });
}};

if (command == 'user_bio') {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
let bio = await conn.fetchStatus(who).catch(_ => 'undefined');
let biot = bio.status?.toString() || 'Sin descripcion.';
let user = global.db.data.users[who];
let username = conn.getName(who);
let str = `${biot}`;
conn.sendMessage(m.chat, { text: str }, { quoted: m });
};

if (command == 'user_name') {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
let bio = await conn.fetchStatus(who).catch(_ => 'undefined');
let biot = bio.status?.toString() || 'Nombre no encontrado.';
let user = global.db.data.users[who];
let username = conn.getName(who);
let str = `${username}`;
await conn.sendMessage(m.chat, { text: str }, { quoted: m });
};

if (command == 'filedoc') {
let q = m.quoted || m;
let mime = (q.msg || q).mimetype || '';
if (!m.quoted) return conn.sendMessage(m.chat, { text: '✎ Ingrese el comando y responda a un video o imagen para convertirlo en un documento.' }, { quoted: m });
if(!text) return conn.sendMessage(m.chat, { text: '✎ Ingrese el comando y escriba un nombre para responder al contenido para guardarlo.' }, { quoted: m });
if (!/audio|video/.test(mime)) return conn.sendMessage(m.chat, { text: 'De favor, responda a una imagen o video para usar este comando.' }, { quoted: m });
let media = await q.download?.();
if (!media) return conn.sendMessage(m.chat, { text: '• Parece que el archivo que respondiste no es compatible, responda a un video o imagen por favor.' }, { quoted: m });
await conn.sendMessage(m.chat, { text: 'Convirtiendo, espere un momento...' }, { quoted: m });
if (/video/.test(mime)) {
return conn.sendMessage(m.chat, { document: media, mimetype: 'video/mp4', fileName: `${text}.mp4`}, {quoted: m}).then(_ => m.react('✅'));
} else if (/audio/.test(mime)) {
return conn.sendMessage(m.chat, { document: media, mimetype: 'audio/mpeg', fileName: `${text}.mp3`}, {quoted: m}).then(_ => m.react('✅'))};
};

if (command == 'user_contact') {
if (!text) return conn.sendMessage(m.chat, { text: '✎ Ingrese el comando y mensione a un usuario para sacar su contacto de WhatsApp' }, { quoted: m });
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
let bio = await conn.fetchStatus(who).catch(_ => 'undefined');
let biot = bio.status?.toString() || 'Sin informacion.';
let user = global.db.data.users[who];
let name = await conn.getName(who);
const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nORG:${name}\nTITLE:\nitem1.TEL;waid=${who.split`@`[0]}:+${who.split`@`[0]}\nitem1.X-ABLabel:${name}\nX-WA-BIZ-DESCRIPTION:${biot}\nX-WA-BIZ-NAME:${name}\nEND:VCARD`;
conn.sendMessage(m.chat, { contacts: { displayName: `${name}`, contacts: [{ vcard }] }}, { quoted: m, contextInfo: { externalAdReply: { showAdAttribution: true }}});
};

};
handler.command = ['newgroup', 'gnew', 'blackbox', 'wmusix',];
export default handler;


const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group');
	const descChild = baileys.getBinaryNodeChild(group, 'description');
	let desc;
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content;
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'America/Los_Angeles' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	};
	return metadata;
}

async function uploadFile(path) {
let form = new FormData();
form.append('files[]', fs.createReadStream(path));
let res = await (await fetch('https://uguu.se/upload.php', { method: 'post',
headers: {
...form.getHeaders()
},
body: form
})).json();
await fs.promises.unlink(path);
return res;
};