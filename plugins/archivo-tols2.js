import uploadImage from '../lib/uploadImage.js';
import { sticker } from "../lib/sticker.js";
import { toDataURL } from 'qrcode';
import { webp2png } from '../lib/webp2mp4.js';
import { webp2mp4 } from '../lib/webp2mp4.js';
import uploadFile from '../lib/uploadFile.js';
import { toAudio } from '../lib/converter.js';
import { ffmpeg } from '../lib/converter.js';
import { toPTT } from '../lib/converter.js';
import FormData from 'form-data';
import fetch from 'node-fetch';
import gtts from 'node-gtts';
import { JSDOM } from 'jsdom'
import { readFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import fs from 'fs';
const defaultLang = 'es';
import axios from "axios";
const emj = /^[\p{Emoji}\u200d]+$/u;
let { proto } = (await import('@whiskeysockets/baileys')).default

const handler = async (m, {conn, text, args, usedPrefix, command}) => {

if (command == 'animef') {
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || q.mediaType || '';
if (!/image/g.test(mime)) return conn.sendMessage(m.chat, {text: `✎ _Ingrese el comando y responda a una imagen que tenga una cara fijada para convertirlo en anime._`}, {quoted: m});
conn.sendMessage(m.chat, {text: `✎ _Ejecutando los resultados, espere un momento._`}, { quoted: m });
const data = await q.download?.();
const image = await uploadImage(data);
try {
const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
await conn.sendFile(m.chat, anime, 'error.jpg', null, {quoted: m});
} catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
await conn.sendFile(m.chat, anime2, 'error.jpg', null, {quoted: m});
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
await conn.sendFile(m.chat, anime3, 'error.jpg', null, {quoted: m});
} catch (e) {
conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error inesperado en la convercion, debe ser por que la imagen no contrae una cara o la cara no se vea bien fotografiada._`}, {quoted: m});
}}}};

if (command == 'simg') {
const notStickerMessage = `✎ _Ingrese el comando y responda a un sticker sin movimiento para convertirlo en una imagen._`
const q = m.quoted || m
const mime = q.mediaType || ''
if (!/sticker/.test(mime)) return conn.sendMessage(m.chat, {text: notStickerMessage}, {quoted: m});
const media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendMessage(m.chat, { text: '✎ _Convirtiendo, espere un momento..._' }, {quoted: m})
await conn.sendFile(m.chat, out, 'error.png', '_Aqui tiene su imagen.', {quoted: m});
};

if (command == 'ts_audio') {
let q = m.quoted ? m.quoted : m;
let mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
if (!/video|audio/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _Ingrese el comando y responda a un video o nota de voz para convertirlo en audio mp3._` }, {quoted: m});
await conn.sendPresenceUpdate('recording', m.chat);
let media = await q.download?.();
if (!media && !/video/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _No se pudo convertir el video a audio mp3, intentalo de nuevo por favor._` }, {quoted: m});
if (!media && !/audio/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _No se pudo convertir la nota de voz a audio mp3, intentalo de nuevo por favor._` }, {quoted: m});
let audio = await toAudio(media, 'mp4');
if (!audio.data && !/audio/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _No se pudo convertir la nota de voz a audio mp3, intentalo de nuevo._` }, {quoted: m});
if (!audio.data && !/video/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _No se pudo convertir el video a audio mp3, intentalo de nuevo._` }, {quoted: m});
conn.sendFile(m.chat, audio.data, 'error.mp3', '', {quoted: m}, null, { mimetype: 'audio/mp4' });
};

if (command == 'ts_nota') {
let q = m.quoted ? m.quoted : m;
let mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
if (!/video|audio/.test(mime)) return conn.sendMessage(m.chat, `✎ _Ingrese el comando y responda a un video o audio mp3 para convertirlo en una nota de voz._`, {quoted: m});
let media = await q.download?.();
if (!media && !/video/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _No se pudo convertir el video a una nota de voz, intentalo de nuevo por favor._` }, {quoted: m});
if (!media && !/audio/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _No se pudo convertir el audio mp3 a una nota de voz, intentalo de nuevo por favor._` }, {quoted: m});
let audio = await toPTT(media, 'mp4');
if (!audio.data && !/audio/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _No se pudo convertir el audio mp3 a una nota de voz, intentalo de nuevo._` }, {quoted: m});
if (!audio.data && !/video/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _No se pudo convertir el video a una nota de voz, intentalo de nuevo._` }, {quoted: m});
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' });
};

if (command == 'turl') {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg);
let name = await conn.getName(who);
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!mime) return conn.sendMessage(m.chat, { text: `✎ _Ingrese el comando y responda a una imagen para convertirlo en un enlace._` }, {quoted: m});
let media = await q.download();
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
let link = await (isTele ? uploadImage : uploadFile)(media);
let caption = `
╭────────────· · · ⭒
│ *Enlace* ⊳ ${link}
│ *Expiracion:* ⊳ ${isTele ? 'No expira.' : 'Se desconoce.'}
╰────────────· · · ⭒`;
conn.sendMessage(m.chat, { text: caption }, { quoted: m });
};

if (command == 'turl2') {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!mime) return conn.sendMessage(m.chat, {text: `❪ ✎ › Ingrese el comando y responda a un video o imagen.`}, {quoted: m});
let media = await q.download();
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
let link = await (isMedia ? uploadImage : uploadImage)(media);
let source = await jimp.read(await link);
let height = await source.getHeight();
let width = await source.getWidth();
let resultados = `- _Aqui tiene la imagen, se ha identificado la anchura de ( ${width} ) y la altura de ( ${height} ) durante su proceso._
_Aqui tiene el enlace de la imagen:_ ${link}`;
conn.sendMessage(m.chat, {text: resultados}, {quoted: m});
};


if (command == 'ts_video') {
if (!m.quoted) return conn.sendMessage(m.chat, { text: `✎ _Ingrese el comando y responda a un sticker en movimiento para convertirlo en un video._` }, {quoted: m});
let mime = m.quoted.mimetype || '';
if (!/webp|audio/.test(mime)) return conn.sendMessage(m.chat, { text: `✎ _El contenido mensionado no es un sticker en movimiento, intentalo de nuevo respondiendo a un sticker en movimiento._` }, {quoted: m});
let media = await m.quoted.download();
let out = Buffer.alloc(0);
if (/webp/.test(mime)) {
out = await webp2mp4(media);
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4');
};
await conn.sendFile(m.chat, out, 'error.mp4', '_Aqui tiene su video._', {quoted: m}, 0, { thumbnail: out });
};

if (command == 'textvoz') {
let lang = args[0];
let text = args.slice(1).join(' ');
if ((args[0] || '').length !== 2) {
lang = defaultLang;
text = args.join(' ');
};
if (!text && m.quoted?.text) text = m.quoted.text;
let res;
try { res = await tts(text, lang) };
catch (e) {
m.reply(e + '');
text = args.join(' ');
if (!text) return conn.sendMessage(m.chat, { text: `✎ _Ingrese el comando y escriba el tipo de lenguaje y texto para crear una nota de voz._\n\n- *Por ejemplo:*\n*#textvoz* en Hola como estas?` }, {quoted: m});
await conn.sendPresenceUpdate('recording', m.chat);
res = await tts(text, defaultLang);
} finally {
if (res) conn.sendFile(m.chat, res, 'tts.opus', null, {quoted: m}, true);
}};

if (command == 'ts_pdf') {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!mime) return conn.sendMessage(m.chat, {text: `❪ ✎ › Ingrese el comando y responda a una imagen para convertirlo en pdf.`}, {quoted: m});
let img = await q.download?.();
let url = await uploadImage(img);
let docname = text ? text : m.pushName || 'documento';
conn.sendFile(m.chat, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkeysapi}&img=${url}`, docname + '.pdf', '', m, false, { asDocument: true });
};

if (command == 'testext') {
const q = m.quoted ? m.quoted : m;
const mime = (q || q.msg).mimetype || q.mediaType || '';
if (/image/.test(mime)) {
const url = await webp2png(await q.download());
const res = await fetch(API('https://api.ocr.space', '/parse/imageurl', {apikey: '8e65f273cd88957', url}));
if (res.status !== 200) throw res.statusText;
const json = await res.json();
m.reply(json?.ParsedResults?.[0]?.ParsedText);
} else return conn.sendMessage(m.chat, {text: `✎ _El comando:_ *#${command}*\n• _Ha fallado, si el error continua, es mejor reportarlo al grupo de soporte._\n\n🝐 *Grupo de soporte:*\n• ${global.grupo_soporte}\n\n⫿  _Recuerda reportar comandos erroneos._`}, {quoted: m});
};

if (command == 'ts_emoji') {
if (!text) return conn.sendMessage(m.chat, {text: "❪ ✎ › Ingrese el comando y ponga un emoji para ver el resultado."}, {quoted: m});
try {
const res = await axios.get(global.BASE_API_DELIRIUS + "/tools/mojito", { params: { emoji: text }, }, );
const resultxd = res.data;
const stiker = await sticker( Buffer.from(resultxd.result.split(",").map(Number)), null, 'MBMD', 'Emojis', );
 conn.sendFile(m.chat, stiker, "sticker.webp", "", m, { asSticker: true }, {quoted: m});
} catch (e) {
 conn.sendMessage(m.chat, {text: "❪ ✘ › El emoji ingresado no es valido, o puede que no esta disponible, intenta con otro..."}, {quoted: m});
}};

if (command == 'qr') {
if (!text) return conn.sendMessage(m.chat, {text: `❪ ✎ › Ingrese el comando y escriba un texto para crear un codigo QR.`}, { quoted: m });
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '❪ ✎ › Aqui tiene su texto en formato QR\n- Para ver el texto, use el comando: *#viewqr*', { quoted: m });
};

if (command == 'textvoz2') {
const match = text.match(/^(\w+)\s*\|\s*(.+)/i);
  if (!match) {
    const voices = await getVoices();
    const voiceNames = voices.voices.map(voice => voice.name).join('\n- ');
    return conn.sendMessage(m.chat, { text: '❪ ✎ › Ingrese el comando y el nombre de la voz y el texto que quieras que diga.\n\n• *Por ejemplo:*\n- #convoice nombre | text.' }, {quoted: m});
conn.sendMessage(m.chat, { text: `*\`LISTA DE VOCES:\`*\n\n${voiceNames}` }, { quoted: m });
}
  const [, voiceName, inputText] = match;
  const voices = await getVoices();
  const voice = voices.voices.find(voice => voice.name.toLowerCase() === voiceName.toLowerCase());
  if (!voice) {
    const voiceNames = voices.voices.map(voice => voice.name).join('\n- ');
    return conn.sendMessage(m.chat, { text: `❪ ✎ › No se ha encontrado la voz con el nombre: "${voiceName}".` }, { quoted: m });
    conn.sendMessage(m.chat, { text: `*\`LISTA DE VOCES:\`*\n\n${voiceNames}` }, { quoted: m });
  };
  const audio = await convertTextToSpeech(inputText, voice.voice_id);
  if (audio) {
    conn.sendMessage(m.chat, { audio: audio.audio, fileName: `error.mp3`, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
  }};

if (command == 'style') {
conn.sendMessage(m.chat, Object.entries(await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`, m)
};

if (command == 'viewqr') {
const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return conn.sendMessage(m.chat, {text: `❪ ✎ › Ingrese el comando y responda el texto en formato QR para saber que dice.`}, { quoted: m });
  const img = await q.download?.();
  const url = await uploadImage(img);
  const anu = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=${lolkeysapi}&img=${url}`);
  const json = await anu.json();
  await conn.sendMessage(m.chat, {text: `- *Texto:*\n${json.result}`}, { quoted: m });
 };

if (command == 'react') {
  if (!args[0]) return conn.sendMessage(m.chat, { text: '' }, { quoted : m });
  let q = m.quoted ? await m.getQuotedObj() : m;
 conn.sendMessage(m.chat, { react: { text: args[0], key: q.key }}, { quoted: q });
};

if (command == 'simface') {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';

if (!mime.startsWith('image/')) {
return conn.sendMessage(m.chat, { text: '• Ingrese el comando y responda a una imagen para ver su similitud' }, { quoted: m });
}
conn.sendMessage(m.chat, { text: 'Buscando similitud...' }, { quotesd: m });
let media = await q.download();
let formData = new FormData();
formData.append('image', media, { filename: 'file' });
let uploadResponse = await axios.post('https://api.imgbb.com/1/upload?key=10604ee79e478b08aba6de5005e6c798', formData, { headers: { ...formData.getHeaders() }});
if (uploadResponse.data.data) {
let url = uploadResponse.data.data.url;
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/face-similar?url=${url}`);
let json = await api.json();
let { name, image, similar, others } = json;
let txt = `✎ _Aqui tiene los resultados._

⟡ Nombre: *${name}*
⟡ Similitud:* ${similar}`;
await conn.sendFile(m.chat, image, 'mbmd.jpg', txt, { quoted: m });
if (others && others.length > 0) {
for (let other of others) {
await conn.sendFile(m.chat, other.image, 'other.jpg', `${other.name}`, m, null, rcanal);
}}
conn.sendMessage(m.chat, { text: `_Ahi tienes los resultados._` }, { quoted: m });
await m.react('✅');
} else {
conn.sendMessage(m.chat, { text: `✎ _El comando:_ *#${command}*\n• _Ha fallado, si el error continua, es mejor reportarlo al grupo de soporte._\n\n🝐 *Grupo de soporte:*\n• ${global.grupo_soporte}\n\n⫿  _Recuerda reportar comandos erroneos._` }, { quoted: m });
}};

if (command == 'tols_yt') {
if (!text) return conn.sendMessage(m.chat, { text: '✎ _Ingrese el comando mas un enlace de un video de YouTube.' }, { quoted: m });
try {
let app = await fetch(`https://apis-starlights-team.koyeb.app/starlight/transcribir-youtube?url=${text}`, { headers: { 'Content-Type': 'application/json' }});
let res = await app.json();
if (!res.result) return conn.sendMessage(m.chat, { text: '⟡ _Ocurrio un error inesperado en el comando, intentalo de nuevo por favor._\n• _Si el error persiste, contacta al grupo de soporte._' }, { quoted: m });
await conn.sendMessage(m.chat, { text: res.result }, { quoted: m });
await m.react('✅');
} catch {
await m.react('⛔');
}};


};
handler.command = [
'animef', 
'simg', 
'ts_audio', 
'ts_nota', 
'turl', 
'turl2', 
'ts_video', 
'textvoz', 
'textvoz2', 
'testext', 
'ts_pdf', 
'ts_emoji', 
'qr', 
'viewqr', 
'style',
'react',
'tols_yt',
'simface'
];
export default handler;

function tts(text, lang = 'es') {
console.log(lang, text);
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang);
let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav');
tts.save(filePath, text, () => {
resolve(readFileSync(filePath));
unlinkSync(filePath);
});
} catch (e) { reject(e) };
})};

const apiKey = 'a0e2c6022f1aeb28b5020b1dd0faf6ee';
const getVoices = async () => {
  const url = 'https://api.elevenlabs.io/v1/voices';
  const options = { method: 'GET', headers: { 'Content-Type': 'application/json', 'xi-api-key': apiKey }};
  try {
    const response = await fetch(url, options);
    const voices = await response.json();
    return voices;
  } catch (error) {
    console.error('Error al obtener las voces:', error);
    return [];
  }
};
const convertTextToSpeech = async (text, voiceId) => {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const options = { method: 'POST', headers: { 'Content-Type': 'application/json', 'xi-api-key': apiKey }, body: JSON.stringify({ text: text, model_id: 'eleven_monolingual_v1', voice_settings: { stability: 0.5, similarity_boost: 0.5 }})};
  try {
    const response = await fetch(url, options);
    const audioBuffer = await response.buffer();
    return { audio: audioBuffer };
  } catch (error) {
    console.error('Error al generar el audio:', error);
    return [];  
  }
};

async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj 
}
