import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner } ) {
global.key = ''

//•┈┄━⏣ MBMD
//•┄❒ Random imagens
global.mbmdGrupos = [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6].getRandom()
global.mbmdRedes = [ig, paypal, creador, asistencia, md, telegram, cafe].getRandom()
global.mbmdAll = [ig, paypal, cafe, md].getRandom()
global.mbmdImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18].getRandom()
global.mbmdImagens = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10].getRandom()
global.Imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18].getRandom()
global.Imagens = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10].getRandom()


//•┈┄━⏣ MBMD
//•┄❒ Eventos
global.eventos = fs.readFileSync('../files/events/event.jpg')
global.eventos2 = fs.readFileSync('../files/events/event_2.jpg')
global.eventos3 = fs.readFileSync('../files/events/event_3.jpg')
global.eventombmd = fs.readFileSync('../files/events/event_mbmd.jpg')
global.eventosky = fs.readFileSync('../files/events/event_sky.jpg')


//•┈┄━⏣ MBMD
//•┄❒ Creador y mas
global.creador = 'https://wa.me/5493873655135'
global.asistencia = 'https://wa.me/523142183828'
global.ofcbot = `${conn.user.jid.split('@')[0]}`


//•┈┄━⏣ MBMD
//•┄❒ Tiempo real
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})


//•┈┄━⏣ MBMD
//•┄❒ Mensajes en espera
global.wait = '▰▱▱▱▱▱▱▱▱▱▱'
global.waitt = "▰▰▰▱▱▱▱▱▱▱▱"
global.waittt = "▰▰▰▰▰▱▱▱▱▱▱"
global.waitttt = "▰▰▰▰▰▰▰▰▱▱▱"
global.waittttt = "▰▰▰▰▰▰▰▰▰▰▰"


//•┈┄━⏣ MBMD
//•┄❒ Enlaces / Redes
let correo = 'mbmdoficial@gmail.com'
var telegram = 'https://t.me/MBMD_principal'
var instagram = 'https://www.instagram.com/mbmd_principal'
var cafe = 'https://ko-fi.com/mdmd_oficial'
var md = 'https://github.com/MBMD-OFC'
var md2 = 'https://github.com/MBMD-OFC/bots-home'
var md3 = 'https://github.com/MBMD-OFC/servers-home'
var md4 = 'https://github.com/MBMD-OFC/coins-home'
var paypal = 'https://www.paypal.me/mbmdoficial'
var twitter = 'https://x.com/MBMD_Principal?t=xoUKZxrb3qXexANVw3xbtQ&s=09'
var atombio = 'https://atom.bio/oficialmbmd'
var canal = 'https://whatsapp.com/channel/0029Vako2qm3WHTP1YZrLt1D'
var canaltel = 'https://t.me/MBMD_channel'
var fb = 'https://www.facebook.com/share/rCuLPP77ghXpDVsk/?mibextid=qi2Omg'
var grupo1 = 'https://chat.whatsapp.com/DHEbIozmsHVGBI5oOb0XDB'
var grupo2 = 'https://chat.whatsapp.com/F6rni408Brf6Cu9W4qNUs7'
var grupo3 = 'https://chat.whatsapp.com/EqntacWlpP28ZbPcIIUEqN'
var grupo4 = 'https://chat.whatsapp.com/EfbOgYFcA9QA2GDY31hWMf'
var grupo5 = 'https://chat.whatsapp.com/LqoRS2ntmCfK6OwCou4L1c'
var grupo6 = 'https://chat.whatsapp.com/HG7PFAGLxhF2Z29eGpKiqh'
var grupo_reporte = 'https://chat.whatsapp.com/EfbOgYFcA9QA2GDY31hWMf'
var dolarapp = '> *Tag:* $ofcmbmd\n> *Alias:* mbmd.ofc.dolarapp'

//•┈┄━⏣ MBMD
//•┄❒ Imagenes
global.imagen1 = 'https://qu.ax/ANGqx.jpg'
global.imagen2 = 'https://qu.ax/BkTuK.jpg'
global.imagen3 = 'https://qu.ax/mKeNf.jpg'
global.imagen4 = 'https://qu.ax/apbBK.jpg'
global.imagen5 = 'https://qu.ax/JSgP.jpg'
global.imagen6 = 'https://qu.ax/HuYcy.jpg'
global.imagen7 = 'https://qu.ax/OEtGj.jpg'
global.imagen8 = 'https://qu.ax/OlWwp.jpg'
global.imagen9 = 'https://qu.ax/UVKVN.jpg'
global.imagen10 = 'https://qu.ax/LWUBh.jpg'


global.img1 = 'https://qu.ax/TFHRe.jpg'
global.img2 = 'https://qu.ax/tUsev.jpg'
global.img3 = 'https://qu.ax/sysvQ.jpg'
global.img4 = 'https://qu.ax/xMMgn.jpg'
global.img5 = 'https://qu.ax/mwfrK.jpg'
global.img6 = 'https://qu.ax/ftLmD.jpg'
global.img7 = 'https://qu.ax/dzeaM.jpg'
global.img8 = 'https://qu.ax/OMgEG.jpg'
global.img9 = 'https://qu.ax/gJaCC.jpg'
global.img10 = 'https://qu.ax/KSvb.jpg'
global.img11 = 'https://qu.ax/gHKkN.jpg'
global.img12 = 'https://qu.ax/alQOT.jpg'
global.img13 = 'https://qu.ax/ddazD.jpg'
global.img14 = 'https://qu.ax/VMcft.jpg'
global.img15 = 'https://qu.ax/sBhRq.jpg'
global.img16 = 'https://qu.ax/PGiCf.jpg'
global.img17 = 'https://qu.ax/rYqvb.jpg'
global.img18 = 'https://qu.ax/fraRK.jpg'
global.logogit = 'https://qu.ax/RzKF.jpg'


//•┈┄━⏣ MBMD
//•┄❒ Estilos segun su apartado.
global.eventstick = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5493873655168-5493873655135@g.us" } : {})},message: {"videoMessage": { "title": `MBMD : PRINCIPAL`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `𔓕 ¡Jugadores en evento!`, 'jpegThumbnail': Imgs }}}
global.menutick = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5493873655168-5493873655135@g.us" } : {})},message: {"videoMessage": { "title": `MBMD : PRINCIPAL`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `𔓕 ¡Menu completo!`, 'jpegThumbnail': Imgs }}}
global.liststick = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5493873655168-5493873655135@g.us" } : {})},message: {"videoMessage": { "title": `MBMD : PRINCIPAL`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `𔓕 ¡Lista de comandos!`, 'jpegThumbnail': Imgs }}}
global.mbmdtick = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5493873655168-5493873655135@g.us" } : {})},message: {"videoMessage": { "title": `MBMD : PRINCIPAL`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `︎𔓕 MBMD : PRINCIPAL`, 'jpegThumbnail': Imgs }}}
global.paydestacado = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5493873655168-5493873655135@g.us" } : {})},message: {"videoMessage": { "title": `MBMD : PRINCIPAL`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'false', 'caption': `︎✅ COMPRADOR DESTACADO.`, 'jpegThumbnail': Imgs }}}


//•┈┄━⏣ MBMD
//•┄❒ Saludo o mensione
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)


//•┈┄━⏣ MBMD
//•┄❒ Apartado para fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
global.fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': [img1,img2,img3,img4,img5].getRandom(), thumbnail: [img1,img2,img3,img4,img5].getRandom() ,sendEphemeral: true}}};
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: mbmdImagens, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}} 
let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}}
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': packname, 'jpegThumbnail': img2}}}
let enlace = { contextInfo: { externalAdReply: {title: wm, body: packname , sourceUrl: mbmdAll, thumbnail: await(await fetch(mbmdImagens)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: mbmdAll, mediaType: 'VIDEO', description: '', title: wm, body: packname, thumbnailUrl: mbmdImagens, sourceUrl: mbmdAll }}}
let dos = [enlace, enlace2]  

}
export default handler

global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }