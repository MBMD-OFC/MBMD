import fetch from 'node-fetch';
import fs from 'fs';
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
//try{
let chat = global.db.data.chats[m.chat];
let user = global.db.data.users[m.sender];
let bot = global.db.data.settings[conn.user.jid] || {};
let textoss = `❪ ✎ › _Lista de opciones para editar el chat._
- _Sirven para activar o desactivar ajustes personalizados._

> *#on* > _activar_
> *#off* > _desactivar_
${readMore}
╭─────────· ۰ ۰ ⋆ 
│۰⊸ _${usedPrefix + command}_ *welcome*
│۰⊸ _${usedPrefix + command}_ *detector*
│۰⊸ _${usedPrefix + command}_ *delete*
│۰⊸ _${usedPrefix + command}_ *publico*
│۰⊸ _${usedPrefix + command}_ *enlaces*
│۰⊸ _${usedPrefix + command}_ *enlaces2*
│۰⊸ _${usedPrefix + command}_ *tiktok*
│۰⊸ _${usedPrefix + command}_ *youtube*
│۰⊸ _${usedPrefix + command}_ *instagram*
│۰⊸ _${usedPrefix + command}_ *telegram*
│۰⊸ _${usedPrefix + command}_ *github*
│۰⊸ _${usedPrefix + command}_ *discord*
│۰⊸ _${usedPrefix + command}_ *telegram*
│۰⊸ _${usedPrefix + command}_ *atombio*
│۰⊸ _${usedPrefix + command}_ *grupo*
│۰⊸ _${usedPrefix + command}_ *canal*
│۰⊸ _${usedPrefix + command}_ *tds*
│۰⊸ _${usedPrefix + command}_ *tch*
│۰⊸ _${usedPrefix + command}_ *hot*
│۰⊸ _${usedPrefix + command}_ *stickers*
│۰⊸ _${usedPrefix + command}_ *autosticker*
│۰⊸ _${usedPrefix + command}_ *juegos*
│۰⊸ _${usedPrefix + command}_ *juegos2*
│۰⊸ _${usedPrefix + command}_ *temporal*
│۰⊸ _${usedPrefix + command}_ *niveles*
│۰⊸ _${usedPrefix + command}_ *emojis*
│۰⊸ _${usedPrefix + command}_ *malaletra*
│۰⊸ _${usedPrefix + command}_ *audios*
│۰⊸ _${usedPrefix + command}_ *antiver*
│۰⊸ _${usedPrefix + command}_ *numeros*
│۰⊸ _${usedPrefix + command}_ *serbot*
│۰⊸ _${usedPrefix + command}_ *subbot*
│۰⊸ _${usedPrefix + command}_ *subbot2*
│۰⊸ _${usedPrefix + command}_ *restrict*
│۰⊸ _${usedPrefix + command}_ *modoprivado*
│۰⊸ _${usedPrefix + command}_ *modogrupal*
│۰⊸ _${usedPrefix + command}_ *autovisto*
│۰⊸ _${usedPrefix + command}_ *antixxx*
│۰⊸ _${usedPrefix + command}_ *llamadas*
│۰⊸ _${usedPrefix + command}_ *antispam*
│۰⊸ _${usedPrefix + command}_ *antispam2*
│۰⊸ _${usedPrefix + command}_ *chatbot*
│۰⊸ _${usedPrefix + command}_ *mbmd*
│۰⊸ _${usedPrefix + command}_ *antilag*
│۰⊸ _${usedPrefix + command}_ *admins*
│۰⊸ _${usedPrefix + command}_ *menu*
│۰⊸ _${usedPrefix + command}_ *aprobar*
│۰⊸ _${usedPrefix + command}_ *buscadores*
│۰⊸ _${usedPrefix + command}_ *descargas*
│۰⊸ _${usedPrefix + command}_ *rpg*
│۰⊸ _${usedPrefix + command}_ *ajustes*
│۰⊸ _${usedPrefix + command}_ *comandos*
╰─────────· ۰ ۰ ⋆ `.trim();
let mensioname = `${m.sender.split("@")[0]}`;
let aa = mensioname + '@s.whatsapp.net';
let name = await conn.getName(m.sender);
let isEnable = /true|enable|(turn)?on|1/i.test(command);
let type = (args[0] || '').toLowerCase();
let isAll = false, isUser = false;
switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
}
chat.welcome = isEnable;
break;

case 'detector':
case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
}
chat.modoDetect = isEnable;
break;

case 'antidelete': 
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.delete = isEnable;
break;

case 'publico': case 'paratodos':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['modoPublico'] = !isEnable;
break;

case 'enlaces': case 'links':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.nopEnlace = isEnable;
break;

case 'enlaces2': case 'todolink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.todoEnlace = isEnable;
break;

case 'tiktok':
case 'tk':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.notiktok = isEnable;
break;

case 'youtube': 
case 'yt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noyoutube = isEnable;
break;

case 'telegram': 
case 'tg':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.notelegram = isEnable?
break;

case 'facebook': 
case 'fb':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.nofacebook = isEnable;
break;

case 'canal': 
case 'channel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.deleteChannel = isEnable;
break;

case 'grupo': 
case 'grupos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.deleteGrupo = isEnable;
break;

case 'atombio': 
case 'at':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.deleteAT = isEnable;
break;

case 'instagram': 
case 'ig':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noinstagram = isEnable;
break;

case 'twitter': 
case 'tw':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.notwitter = isEnable;
break;

case 'discord':
case 'dd':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.nodiscord = isEnable;
break;

case 'threads':
case 'tds':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.nothreads = isEnable;
break;

case 'github':
case 'git':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.nogithub = isEnable;
break;

case 'twitch':
case 'tch':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.notwitch = isEnable;
break;
    
case 'horny':
case 'hot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.modoHot = isEnable;
break;

case 'menu':
case 'allmenu':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
chat.noMenu = isEnable;
break;

case 'aprobacion': case 'aprobar':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
};
chat.siAceptar = isEnable;
break;

case 'rpg':
case 'economia':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noRpg = isEnable;
break;

case 'herramientas':
case 'ajustes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noAjustes = isEnable;
break;

case 'descargas':
case 'downloads':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noDescargas = isEnable;
break;

case 'buscadores':
case 'search':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noBuscador = isEnable;
break;

case 'permitido':
case 'comandos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noPermitido = isEnable;
break;

case 'modostickers':
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.modoSticks = isEnable;
break;
    
case 'game': 
case 'juegos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.juegos = isEnable;
break;

case 'game2': 
case 'juegos2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.juegos2 = isEnable;
break;

case 'temporal':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.temporal = isEnable;
break;

case 'niveles':
case 'autonivel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.autoNivel = isEnable;
break;

case 'autosticker':
case 'autosticks':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.autoSticks = isEnable;
break;

case 'reaccion':
case 'emojis'
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.modoReact = isEnable;
break;

case 'toxic':
case 'toxicos'
case 'malaletra':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noToxicos = isEnable;
break;
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.audios = isEnable;
break;

case 'antiver':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.antiOcultos = isEnable;
break;

case 'mundial':
case 'numeros':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noMundial = isEnable;
break;

case 'serbot':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
bot.subbots = isEnable;
break;

case 'restrict':
case 'restringir':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.restrict = isEnable;
break;

case 'antixxx':
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.noXXX = isEnable;
break;

case 'nyimak':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['nyimak'] = isEnable;
break;

case 'autoread': case 'autovisto':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
bot.autoread2 = isEnable;
global.opts['autoread'] = isEnable;
break;

case 'llamadas': case 'antillamar':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
bot.antiCall = isEnable;
break;

case 'antispam':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.antiSpam = isEnable;
break;

case 'antispam2':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.antiSpam2 = isEnable;
break;

case 'admins':
case 'soloadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.soloAdmins = isEnable;
break;
   
case 'soloprivados':
case 'modoprivado':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['soloPrivados'] = isEnable;
break;
    
case 'sologrupos':
case 'modogrupal':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['soloGrupos'] = isEnable;
break;

case 'noprivado':
case 'noprivados':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
bot.noPrivados = isEnable
break

case 'antitrabas':
case 'antilag':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.antiTraba = isEnable;
break;

case 'simi': case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.simiBot = isEnable;
break;

case 'mbmd': 
case 'chatgpt':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.modoMbmd = isEnable;
break;

case 'swonly': case 'statusonly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['swonly'] = isEnable;
break;
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, textoss, { quoted: m });
throw false;
};
await conn.sendMessage(m.chat, {text: `❪ ✎ › _Para ${isEnable ? 'desactivar' : 'activar'} esta opcion, use el comando:_ ${isEnable ? `*#off ${type}*` : `*#on ${type}*`}`,
contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, 
description: null, 
title: `✎ FUNCION: ${type} ${isEnable ? 'activado.' : 'apagado.'}`, 
body: `🝐 Funcion activa ${isAll ? 'para el bot.' : isUser ? '' : 'para este chat.'} 〻`, 
previewType: 0, 
thumbnail: imgc,
sourceUrl: '' }}}, { quoted: m })};
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;
export default handler;
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
