import fs from 'fs';
import fetch from 'node-fetch';
import PhoneNumber from 'awesome-phonenumber';
import { promises } from 'fs';
import { join } from 'path';
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {

if (command == 'ceo_mbmd') {
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]}, si quieres hablar con el ceo_mbmd, puedes ir a este contacto.\nO tambien ir a telegram para buscarlo al agendarlo en WhatsApp.`, { mentions: [m.sender] });
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;CEO.MBMD;;\nFN:CEO.MBMD⁩\nORG:CEO.MBMD⁩\nTITLE:\nitem1.TEL;waid=5493873655135:5493873655135\nitem1.X-ABLabel:CEO.MBMD\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:CEO.MBMD⁩\nEND:VCARD`;
await conn.sendMessage(m.chat, { contacts: { displayName: 'CEO.MBMD⁩', contacts: [{ vcard }] }}, {quoted: m});
}

if (command == 'mc' || command == 'allmenu') {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {};
let name = await conn.getName(m.sender);
let d = new Date(new Date + 3600000);
let locale = 'es';
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
let week = d.toLocaleDateString(locale, { weekday: 'long' });
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
});
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d);
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
});
let _uptime = process.uptime() * 1000;
let _muptime;
if (process.send) {
process.send('uptime');
_muptime = await new Promise(resolve => {
process.once('message', resolve);
setTimeout(resolve, 1000);
}) * 1000;
};
let user = global.db.data.users[m.sender];
let muptime = clockString(_muptime);
let uptime = clockString(_uptime);
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
readmore: readMore
};
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]);
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
let mentionedJid = [who];
let username = conn.getName(who);
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
const totalServidores = users.length;
let recursoss = global.db.data.users[m.sender]
let menu = `
¡Hola ${editMbmd.icons ? `${taguser}` : 'usuario'}, soy @${conn.user.jid.split`@`[0]}!

⚇ *Bot:* ${(conn.user.jid == global.conn.user.jid ? '' : `socket.`) || 'principal.'}
⟡ *Usuario:* ${isROwner ? 'creador.' : (isOwner ? 'administrador.' : 'participante.') || 'participante.'}
🜲 *Premium:* ${user.premiumTime > 0 ? 'prem-bot (temporal)' : (isPrems ? 'prem-bot (sin limites)' : 'false') || 'false'}
ᗢ *Moderador:* ${isMods ? 'moderator' : 'false'}
≼≽ *Dudas:* ${ceotg} ${editMbmd.recurso ? `\n\n╭─────────────────·⋆\n│❒ ${recursoss.boletos} » Boletos.\n│❒ ${recursoss.money} » Monedas.\n│❒ ${recursoss.mbcoins} » MBcoins.\n│❒ ${recursoss.diamantes} » Diamantes.\n╰─────────────────·⋆` : ''}
${editMbmd.cortar ? `${readMore}` : ''}
${editMbmd.ocultar ? `\`\`\`╭─────────────────
│ ✩⩢ INFORMACIÓN ⩢✩
├─────────────────
│#reporte  │#actividad
│#cuentas  │#donar
│#comunidad│#info_reg
│#infobot  │#status
│#wabots   │#usos
│#creador  │#menulist
│#sockets  │ info_host
│#test     │#colaboracion
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar2 ? `\`\`\`╭─────────────────
│  ✩⩢ ALEATORIO ⩢✩
├─────────────────
│#comando  │#p
│#normas   │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar3 ? `\`\`\`╭─────────────────
│     ✩⩢ TOLS ⩢✩
├─────────────────
│#s        │#animef
│#simg     │#ts_audio
│#ts_nota  │#ts_vide
│#turl     │#turl2
│#textvoz  │#testvoz2
│#ts_emoji │#qr
│#viewqr   │#style
│#react    │#simface
│#tols_yt  │#remini
│#ts_pdf   │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar4 ? `\`\`\`╭─────────────────
│   ✩⩢ AJUSTES ⩢✩
├─────────────────
│#usergit  │#tinyurl
│#calc     │#dell
│#usuarios │#encriptar
│#botmb    │#traducir
│#on       │#off
│#hours    │#wcap
│#poll     │#fsms
│#bininfo  │#readmore
│#dstatus  │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar5 ? `\`\`\`╭─────────────────
│   ✩⩢ JUEGOS ⩢✩
├─────────────────
│#ship     │#person
│#fun      │#tops
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar6 ? `\`\`\`╭─────────────────
│   ✩⩢ SOCKETS ⩢✩
├─────────────────
│#newbot   │#infosock
│#sockets  │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar7 ? `\`\`\`╭─────────────────
│   ✩⩢ MENTIONS ⩢✩
├─────────────────
│#kiss     │#cita
│#feed     │#hug
│#caress   │#slap
│#kill     │#wrap
│#carry    │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar8 ? `\`\`\`╭─────────────────
│  ✩⩢ DESCARGAS ⩢✩
├─────────────────
│#mp3      │#musica
│#mp4      │#video
│#mp3_rf   │#mp4_rf
│#imagen   │#pinterest
│#mediafire│#mediafire2
│#github   │#github2
│#apk      │#apk2
│#instagram│#instagram2
│#facebook │#facebook2
│#twitter  │#twitter2
│#tiktok   │#tiktok2
│#mega     │#spotify
│#igh      │#capcut
│#deezer   │#genius
│#threads  │#yahoo
│#drive    │#igver
│#appmusic │#tiktokfoto
│#usertok  │#imgtiktok
│#tiktoknew│
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar9 ? `\`\`\`╭─────────────────
│    ✩⩢ GRUPOS ⩢✩
├─────────────────
│#add      │#admins
│#warn     │#nowarn
│#group    │#tage
│#tags     │#infgp
│#linkg    │#descartar
│#asignar  │#mute
│#unmute   │#inum
│#dnum     │#dp
│#dbanchat │#banchat
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar10 ? `\`\`\`╭─────────────────
│    ✩⩢ MAKER ⩢✩
├─────────────────
│#pixel    │#mtext
│#ytc      │#blur
│#horny    │#stupid
│#pololi   │#book
│#friends  │#gay
│#fluximg  │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar11 ? `\`\`\`╭─────────────────
│      ✩⩢ IA ⩢✩
├─────────────────
│#chatgpt  │#iadel
│#chatgptv │#chatgpt4
│#photoleap│#gemini
│#gemini2  │#dalle
│#imgemini │#profe
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar12 ? `\`\`\`╭─────────────────
│   ✩⩢ BUSCADOR ⩢✩
├─────────────────
│#userblox │#infogen
│#infolgd  │#wmusic
│#mrlibre  │#npm
│#steamlist│#sfilemobi
│#playstore│#animeinfo
│#drivefl  │#google
│#ip       │#lyrics
│#lyrics2  │#cinema
│#spotify2 │#wikipedia
│#yts      │#animes
│#pinlist  │#pixabay
│#reddit   │#spotifylist
│#twpost   │#tiktoks
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar13 ? `\`\`\`╭─────────────────
│   ✩⩢ STICKERS ⩢✩
├─────────────────
│#stt      │#scircle
│#emojix   │#sdados
│#sc       │#stickm
│#sfiltro  │#sfiltro2
│#txtstick │#sbg
│#stg      │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar14 ? `\`\`\`╭─────────────────
│  ✩⩢ EDIT BOT ⩢✩
├─────────────────
│#set_mbmd │#set_name
│#setprefix│#set_foto
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar15 ? `\`\`\`╭─────────────────
│  ✩⩢ EDIT GROUP ⩢✩
├─────────────────
│#cbye     │#cwelcom
│#cdesc    │#clink
│#cfoto    │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar16 ? `\`\`\`╭─────────────────
│  ✩⩢ EDIT MENU ⩢✩
├─────────────────
│#m_imgs   │#m_video
│#m_iv     │#m_recuso
│#m_cortar │#m_add
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar17 ? `\`\`\`╭─────────────────
│  ✩⩢ ROL : RPG ⩢✩
├─────────────────
│#d_boletos│#d_money
│#d_bcoin  │#d_dmt
│#r_boletos│#r_money
│#r_bcoin  │#r_dmt
│#buy      │#sell
│#mine     │#w
│#cofre    │#usertops
│#cartera  │
╰─────────────────\`\`\`` : ''}

${editMbmd.ocultar18 ? `Menu random no disponible aun.` : ''}

${editMbmd.ocultar19 ? `Menu anime no disponible aun.` : ''}

${editMbmd.ocultar20 ? `Menu horny no disponible aun.` : ''}

${editMbmd.ocultar21 ? `Este menu de owners permanece oculto aun.` : ''}

${editMbmd.ocultar22 ? `Comandos premiums no agregados todavia.` : ''}

${editMbmd.ocultar23 ? `Comandos mods no agregados todavia.` : ''}


`.trim();
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: `𝐍𝐞𝐰 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 ⟡ 𝐌𝐁𝐌𝐃`,
body: `𐍄𐌴𐌀𐍕   𝗠𝖡  &  𝖬𝗗  ⌕ mbmd.com`,
thumbnail: [imgc, imgc2, imgc3][Math.floor(Math.random() * 3)],
sourceUrl: ceotg,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m});
} catch (e) {
await conn.sendMessage(m.chat, {text: `✎ _El comando:_ *#${command}*\n• _Ha fallado, si el error continua, es mejor reportarlo al grupo de soporte._\n\n🝐 *Grupo de soporte:*\n• ${global.grupo_soporte}\n\n⫿  _Recuerda reportar comandos erroneos._`}, { quoted: m });
console.log(e);
}};

};
handler.command = ["allmenu", "mc"];
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
