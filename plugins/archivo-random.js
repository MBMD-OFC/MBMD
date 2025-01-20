import axios from 'axios';
import cheerio from 'cheerio';
let handler = async (m, { conn, args, command, text, usedPrefix }) => {
let nameHumano = conn.getName(m.sender);

if (!args[0]) {
let smsBot = `✎ _Para usar estos comandos, uselo de la siguiente manera._

• *Por ejemplo:*
#random messi
#rm messi
`.trim()
conn.sendMessage(m.chat, { text: smsBot }, { quoted: m })
}
if (args[0] == 'messi') {
let resultado = `🎊⚽ MESSI ⚽🎉`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/aleatory/messi.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}
} else if (args[0] == 'cr7') {
let resultado = `🎊⚽ Cristiano Ronaldo ⚽❤️`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/aleatory/cr7.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}
} else if (args[0] == 'bts') {
let resultado = `🍥🪐 BTS 🎧🎵`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/aleatory/bts.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}
} else if (args[0] == 'navidad') { 
let resultado = `🎄✨ NAVIDAD ✨🎄`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/aleatory/navidad.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}
} else if (args[0] == 'halloween') { 
let resultado = `🎃🍬 HALLOWEEN 🍬🎃`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/aleatory/halloween.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}
} else if (args[0] == 'itzy') { 
let resultado = `🎀 ITZY 🎈`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/aleatory/itzy.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}
} else if (args[0] == 'universo') { 
let resultado = `🪐 UNIVERSO 🪐`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/aleatory/universo.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}
} else if (args[0] == 'wallp') { 
let resultado = `FONDO DE PANTALLA ✨`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/wallpaper/wallp.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}
} else if (args[0] == 'wallpboy') {
let resultado = `FONDO DE PANTALLA 👑`.trim()//`
const res = (await axios.get(`https://raw.githubusercontent.com/MBMD-OFC/settings/master/random/wallpaper/wallboy.json`)).data;
const url = await res[Math.floor(res.length * Math.random())];
if (m.isWABusiness) {
await conn.sendFile(m.chat, url, 'mbmd.jpg', resultado, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: perfil }, caption: `MBMD`, footer: resultado,
buttons: [ 
{ buttonId: `.rm ${text}`, buttonText: { displayText: "SIGUIENTE ➜", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m });
}}

}
handler.command = ["rm", "random"]
export default handler
