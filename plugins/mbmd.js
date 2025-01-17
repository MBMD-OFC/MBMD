import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))
import '../config.js'
//import '../src/apis.js'

let handler = m => m
handler.all = async function (m) {
global.key = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let imgbot = await this.profilePictureUrl(who, 'image').catch(_ => global.imagen)

global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
global.canalfalso = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: canalwa, serverMessageId: 100, newsletterName: 'MBMD' }, externalAdReply: { title: 'MBMD', body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: imgs, thumbnail: imgc2, sourceUrl: allmbmd }}}, { quoted: m }
global.falsedad = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: canalwa2, serverMessageId: '', newsletterName: 'NOTIFY' }, externalAdReply: { title: 'MBMD', body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: icons, sourceUrl: allmbmd }}}

const mb_style = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873655135-5493873655168@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'MBMD | AI', orderTitle: 'Bang', thumbnail: imgs, sellerJid: '0@s.whatsapp.net' }}}
const audio_style = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873655135-5493873655168@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}

let falso_trol = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
//let falso_gif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': imgs)}}}

let link_bot = { contextInfo: { externalAdReply: {title: 'Siguenos.', body: 'Canal de WhatsApp.' , sourceUrl: allmbmd, thumbnail: await(await fetch(imgs)).buffer() }}}
let link_bot2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: paypal, mediaType: 'VIDEO', description: '', title: wm, body: 'AI', thumbnailUrl: imagens, sourceUrl: allmbmd }}}
let linkbot = [link_bot, link_bot2]  

global.wait = "Cargando..."
global.waitt = "Cargando.."
global.waittt = "Cargando."
global.waitttt = "Cargando"
global.waittttt = "Cargando..."

}
export default handler

global.canalmd = [canalwa, canalwa2][Math.floor(Math.random() * 2)]
global.allmbmd = [ceotg, tgcanal, facebook, ceoig, ceotw, ceoatom, ceokofi, paypal][Math.floor(Math.random() * 8)]
global.ceogrupos = [grupo1, grupo2, grupo_soporte][Math.floor(Math.random() * 3)]

global.img = 'https://qu.ax/vJFix.jpg'
global.img2 = 'https://qu.ax/QUBpO.jpg'
global.img3 = 'https://qu.ax/ihRnx.jpg'

global.imagen = 'https://qu.ax/KRbEB.jpg'
global.imagen2 = 'https://qu.ax/cBreZ.jpg'
global.imagen3 = 'https://qu.ax/tCbAz.jpg'
global.menuicon = 'https://qu.ax/Qhyzw.jpg'
global.menuicon2 = 'https://qu.ax/wrGgE.jpg'

global.imgc = 'https://qu.ax/mocYR.jpg'
global.imgc2 = 'https://qu.ax/GbfQk.jpg'
global.imgc3 = 'https://qu.ax/LAWdK.jpg'

global.imagens = [img, img2, img3][Math.floor(Math.random() * 3)]
global.imgs = [imagen, imagen2, imagen3][Math.floor(Math.random() * 3)]
global.icons = [imgc, imgc2, imgc3][Math.floor(Math.random() * 3)]


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
