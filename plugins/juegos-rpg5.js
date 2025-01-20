import util from 'util';
import path from 'path';
let toM = a => '@' + a.split('@')[0];
let handler = async (m, { conn, groupMetadata, participants, command, text, usedPrefix, sender}) => {
if (!db.data.chats[m.chat].juegos) return conn.sendMessage(m.chat, { text: `✎ _Los juegos rpg estan desactivados en este chat._\n\n• _Puedes activarlos de la siguiente manera:*\n_#on rpg_` }, { quoted : m });
try {

let user = a => '@' + a.split('@')[0];
let ps = groupMetadata.participants.map(v => v.id);
let a = ps.getRandom();
let b = ps.getRandom();
let c = ps.getRandom();
let d = ps.getRandom();
let e = ps.getRandom();
let f = ps.getRandom();
let g = ps.getRandom();
let h = ps.getRandom();
let i = ps.getRandom();
let j = ps.getRandom();

if (command == 'ship') {
conn.sendMessage(m.chat, { text: `Segun mis busquedas en este grupo.\nEl participante ${toM(a)} y ${toM(b)} se aman en secreto.` }, null, {mentions: [a, b]});
};

if (command == 'personalidad' || command == 'person') {
if (!text) return conn.sendMessage(m.chat, { text: '✎ _Ingrese el comando y mensione o escriba el nombre de una persona._' }, { quoted : m });
let personalidad = `🜲 *PERSONALIDAD:* 🜲

⟡ *Nombre:* ${text}
⟡ *Género:* ${pickRandom(['Hombre', 'Mujer', 'Heterosexual', 'Homosexual', 'Femboy'])}
⟡ *Bueno:* ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
⟡ *Malo:* ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
⟡ *Tipo:* ${pickRandom(['Machista', 'Feminista'])}
`;
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) });
};

if (command == 'fun') {
if (!text) return conn.sendMessage(m.chat, { text: '✎ _Ingrese el comando y mensione a una persona mas un tipo de referido._\n\n• *Por ejemplo:*\n#fun @tag gay' }, { quoted : m });
let jsjsjs = `${toM(b)} es ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','100%','1%','2,9%','0%','0,4%'])} ${text}
`;
conn.reply(m.chat, jsjsjs, m, { mentions: conn.parseMention(personalidad) });
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

if (command == 'doxeo' || command == 'doxear') {
let user = global.db.data.users[m.sender];
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, {text: `✎ _Ingrese el comando y mensione a una persona para doxearla._`}, { quoted: m});
const { key } = await conn.sendMessage(m.chat, {text: `Buscando datos, espere un momento...`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `✓ Direccion IP encontrada.`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `Buscando...`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `Buscando..`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `Buscando.`, edit: key});
let old = performance.now();
let neww = performance.now();
let speed = `${neww - old}`
let doxeo = `*Nombre:* ${text}
*Ip:* 192.28.213.234
*N:* 43 7462
*W:* 12.4893
*SS NUMBER:* 6979191519182016
*IPV6:* fe80::5dcd::ef69::fb22::d9888%12 
*UPNP:* Enabled
*DMZ:* 10.112.42.15
*MAC:* 5A:78:3E:7E:00
*ISP:* TORNADO SLK PRODUCTION
*DNS:* 8.8.8.8
*ALT DNS:* 1.1.1.1.1  
*DNS SUFFIX:* TORNADO WI-FI
*WAN:* 100.23.10.90
*WAN TYPE:* private nat
*GATEWAY:* 192.168.0.1
*SUBNET MASK:* 255.255.0.255
*UDP OPEN PORTS:* 8080.80
*TCP OPEN PORTS:* 443
*ROUTER VENDEDOR:* ERICCSON
*DEVICE VENDEDOR:* WIN32-X
*CONNECTION TYPE:* TORNADO SLK PRODUCTION
*ICMPHOPS:* 192.168.0.1 192.168.1.1 100.73.43.4
host-132.12.32.167.ucom.com
host-132.12.111.ucom.com
36.134.67.189 216.239.78.11
Sof02s32inf14.1e100.net
*HTTP:* 192.168.3.1:433-->92.28.211.234:80
*Http:* 192.168.625-->92.28.211.455:80
*Http:* 192.168.817-->92.28.211.8:971
*Upd:* 192.168452-->92.28.211:7265288
*Tcp:* 192.168.682-->92.28.211:62227.7
*Tcp:* 192.168.725-->92.28.211:67wu2
*Tcp:* 192.168.629-->92.28.211.167:8615
*EXTERNAL MAC:* 6U:77:89:ER:O4
*MODEM JUMPS:* 58`;
conn.sendMessage(m.chat, {text: doxeo, mentions: conn.parseMention(doxeo), edit: key});
};


if (command == 'top' || command == 'tops') {
if (!text) return conn.sendMessage(m.chat, { text: '✎ _Ingrese el comando y escriba un texto de un top._\n\n• *Por ejemplo:*\n_#top otakus_' }, { quoted : m });
let top = `Los/as 10 ${text} encontrados en este grupo.

⟡ ${user(a)}
⟡ ${user(b)}
⟡ ${user(c)}
⟡ ${user(d)}
⟡ ${user(e)}
⟡ ${user(f)}
⟡ ${user(g)}
⟡ ${user(h)}
⟡ ${user(i)}
⟡ ${user(j)}`;
m.reply(top, null, { mentions: conn.parseMention(top) });
};

if (command == 'kiss') {
let pp = 'https://qu.ax/PWXTn.gif';
let pp2 = 'https://qu.ax/roDP.gif';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `🝐 ✦ ${name} esta besando con ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

if (command == 'cita') {
let pp = 'https://qu.ax/qhmFO.jpg';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: `🝐 ✦ ${name} esta teniendo una cita con ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

if (command == 'feed') {
let pp = '';
let pp2 = '';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `🝐 ✦ ${name} esta dandole de comer a ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

if (command == 'hug') {
let pp = '';
let pp2 = '';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `🝐 ✦ ${name} esta abrazando a ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

if (command == 'caress') {
let pp = '';
let pp2 = '';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `🝐 ✦ ${name} esta acariciando a ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

if (command == 'slap') {
let pp = '';
let pp2 = '';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `🝐 ✦ ${name} a pegado a ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

if (command == 'kill') {
let pp = '';
let pp2 = '';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `🝐 ✦ ${name} a matado a ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

if (command == 'wrap') {
let pp = '';
let pp2 = '';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `🝐 ✦ ${name} esta abrigando a ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

if (command == 'carry') {
let pp = '';
let pp2 = '';
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return conn.sendMessage(m.chat, { text: '✯ _Ingrese el comando y mensione a alguien.' }, { quoted: m });
let name2 = conn.getName(who);
let name = conn.getName(m.sender);
await conn.sendMessage(m.chat, { video: { url: [pp, pp2].getRandom() }, gifPlayback: true, caption: `🝐 ✦ ${name} esta cargando a ${name2} ⋆ 𝆹𝅥 ⊹ ✭` }, { quoted: m });
};

} catch (e) {
await conn.sendMessage(m.chat, {text: `✎ _El comando:_ *#${command}*\n• _Ha fallado, si el error continua, es mejor reportarlo al grupo de soporte._\n\n🝐 *Grupo de soporte:*\n• ${global.grupo_soporte}\n\n⫿  _Recuerda reportar comandos erroneos._`}, { quoted: m });
console.log(e)};
};

handler.command = ['ship', 'personalidad', 'person', 'fun', 'doxeo', 'doxear', 'top', 'tops', 'kiss', 'slap', 'carry', 'hug', 'wrap', 'caress', 'kill', 'feed', 'cita', '];
handler.group = true;
export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"
};