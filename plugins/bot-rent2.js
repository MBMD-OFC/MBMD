let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let pp = imgc;
let name = await conn.getName(m.sender);
let _uptime = process.uptime() * 1000;
let _muptime;
if (process.send) { process.send('uptime');
_muptime = await new Promise(resolve => { process.once('message', resolve);
setTimeout(resolve, 1000) }) * 1000};
let uptime = clockString(_uptime);
let comprado = `
- *_Mercado Pago:_*
> *Alias:* mbmd2007
> *CVU:* 0000003100025569208333

- *_PayPal:_*
> https://www.paypal.me/mbmdoficial

- *DolarApp:* 
> *Tag:* $ofcmbmd
> *Alias:* mbmd.ofc.dolarapp


*NOTA:* Al realizar el pago, favor de enviar el comprobante de pago al propietario.
• ${ceotg}
• wa.me/5493873655135
`.trim();

if (command == 'newbot') {
let nuevobot = `
✎ _Hola_ ${name}.
_¿Quieres ser un bot sub principal de MBMD?_

- *¡¡ELIGE TU PRIMER SERVIDOR!!*
_Selecciona el servidor que mas te interese._
_Mira su precio conforme lo que dice el comando._
_Ejecutalo usando el comando mensionado en el servidor._

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
│⫹⫺ *Servidor* _MB_server_
│⫶☰ *Precio:* _#server1_
│⎋ *Nivel:* _1_
│≽ *Comando:* _#new_server1_
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
│⫹⫺ *Servidor* _MB_nodejs_
│⫶☰ *Precio:* _#server2_
│⎋ *Nivel:* _2_
│≽ *Comando:* _#new_server2_
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
│⫹⫺ *Servidor* _MB_terminal_
│⫶☰ *Precio:* _#server3_
│⎋ *Nivel:* _3_
│≽ *Comando:* _#new_server3_
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
│⫹⫺ *Servidor* _MBssv_
│⫶☰ *Precio:* _#server4_
│⎋ *Nivel:* _4_
│≽ *Comando:* _#new_server4_
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
│⫹⫺ *Servidor* _MB_
│⫶☰ *Precio:* _#server4_
│⎋ *Nivel:* _5_
│≽ *Comando:* _#new_server5_
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
`.trim();

await conn.sendMessage(m.chat, {
text: nuevobot,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: `NUEVO BOT • MBMD`,
body: `¡¡Haste un bot sub principal ahora!!`,
thumbnail: [imgc, imgc2, imgc3][Math.floor(Math.random() * 3)],
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m});
};

if (command == 'server1') {
let servidor = `✎ _Aqui tienes los precios de este servidor._

╭·─────────────
│🝔 $5 *USD*
│🝔 $5.000 *ARG*
│۰┄۰ ۰┄۰ ┄۰
│⧖ *Duracion:* 8 Dias.
│🜲 *Asistencia:* Disponible.
│⎌ *Limit Group:* 2
╰·─────────────

• _Para comprar use:_ *#new_server1*`.trim();
conn.sendMessage(m.chat, {text: servidor}, { quoted: m });
};

if (command == 'server2') {
let servidor = `✎ _Aqui tienes los precios de este servidor._

╭·─────────────
│🝔 $10 *USD*
│🝔 $10.000 *ARG*
│۰┄۰ ۰┄۰ ┄۰
│⧖ *Duracion:* 30 Dias.
│🜲 *Asistencia:* Disponible.
│⎌ *Limit Group:* 3
╰·─────────────

• _Para comprar use:_ *#new_server2*`.trim();
conn.sendMessage(m.chat, {text: servidor}, { quoted: m });
};

if (command == 'server3') {
let servidor = `✎ _Aqui tienes los precios de este servidor._

╭·─────────────
│🝔 $15 *USD*
│🝔 $15.000 *ARG*
│۰┄۰ ۰┄۰ ┄۰
│⧖ *Duracion: 60 Dias.
│🜲 *Asistencia:* Disponible.
│⎌ *Limit Group:* 4
╰·─────────────

• _Para comprar use:_ *#new_server3*`.trim();
conn.sendMessage(m.chat, {text: servidor}, { quoted: m });
};

if (command == 'server4') {
let servidor = `✎ _Aqui tienes los precios de este servidor._

╭·─────────────
│🝔 $20 *USD*
│🝔 $20.000 *ARG*
│۰┄۰ ۰┄۰ ┄۰
│⧖ *Duracion:* 90 Dias.
│🜲 *Asistencia:* Disponible.
│⎙ *Update:* 24/7.
│⎌ *Limit Group:* 20.
│⫹⫺ *IAs mitjourney:* Activo.
│⨞ *User prem:* ilimitado.
╰·─────────────

• _Para comprar use:_ *#new_server4*`.trim();
conn.sendMessage(m.chat, {text: servidor}, { quoted: m });
};

if (command == 'server5') {
let servidor = `✎ _Aqui tienes los precios de este servidor._

╭·─────────────
│🝔 $30 *USD*
│🝔 $30.000 *ARG*
│۰┄۰ ۰┄۰ ┄۰
│⧖ *Duracion:* 120 Dias.
│🜲 *Asistencia:* 24/7.
│⎙ *Update:* 24/7.
│⎌ *Limit Group:* 30.
│⫹⫺ *IAs mitjourney:* Activo.
│⨞ *User prem:* ilimitado.
│ᗣ *Admin User:* ilimitado.
│⧉ *Pemisos:* asignados.
╰·─────────────

• _Para comprar use:_ *#new_server5*`.trim();
conn.sendMessage(m.chat, {text: servidor}, { quoted: m });
};

if (command == 'new_server1') {
conn.sendMessage(m.chat, {text: comprado}, { quoted: m });
};

if (command == 'new_server2') {
conn.sendMessage(m.chat, {text: comprado}, { quoted: m });
};

if (command == 'new_server3') {
conn.sendMessage(m.chat, {text: comprado}, { quoted: m });
};

if (command == 'new_server4') {
conn.sendMessage(m.chat, {text: comprado}, { quoted: m });
};

if (command == 'new_server5') {
conn.sendMessage(m.chat, {text: comprado}, { quoted: m });
};

};
handler.command = [
'newbot', 
'server1', 
'server2', 
'server3', 
'server4', 
'server5', 
'new_server1', 
'new_server2', 
'new_server3', 
'new_server4', 
'new_server5'
];
export default handler;

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
};
