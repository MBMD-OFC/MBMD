import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import { smsg } from './MBMD/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'   
import fetch from 'node-fetch'
import './plugins/_xyz-mbmd.js'
const { proto } = (await import('@whiskeysockets/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
clearTimeout(this)
resolve()
}, ms))
export async function handler(chatUpdate) {
this.msgqueque = this.msgqueque || [];
this.uptime = this.uptime || Date.now();
if (!chatUpdate) {
return
}
if (!chatUpdate || !chatUpdate.messages) {
return
} else {
this.pushMessage(chatUpdate.messages).catch(console.error)
}
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m) {
return;
}
if (global.db.data == null) await global.loadDatabase()    
if (global.chatgpt.data === null) await global.loadChatgptDB()	
try {
m = smsg(this, m) || m
if (!m)
return
m.exp = 0
m.limit = false
m.money = false
try {
let user = global.db.data.users[m.sender]           
let chatgptUser = global.chatgpt.data.users[m.sender];
if (typeof chatgptUser !== "object")
global.chatgpt.data.users[m.sender] = [];		
if (typeof user !== 'object')
global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.exp)) user.exp = 0
if (!('premium' in user)) user.premium = false
if (!('muto' in user)) user.muto = false
if (!isNumber(user.joincount)) user.joincount = 1
if (!isNumber(user.warn)) user.warn = 0
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.level)) user.level = 0
if (!isNumber(user.velas)) user.velas = 0
if (!isNumber(user.corazones)) user.corazones = 0
if (!isNumber(user.limit)) user.limit = 0	       
if (!isNumber(user.paycoins)) user.paycoins = 0	       
if (!isNumber(user.arscoins)) user.arscoins = 0
if (!isNumber(user.mxncoins)) user.mxncoins = 0
if (!isNumber(user.pencoins)) user.pencoins = 0
if (!isNumber(user.copcoins)) user.copcoins = 0
if (!isNumber(user.pygcoins)) user.pygcoins = 0
if (!isNumber(user.bobcoins)) user.bobcoins = 0
if (!isNumber(user.vescoins)) user.vescoins = 0
if (!isNumber(user.premiumcoins)) user.premiumcoins = 0 	
if (!isNumber(user.dolares)) user.dolares = 0
if (!isNumber(user.mbcoins)) user.mbcoins = 0
if (!isNumber(user.yenes)) user.yenes = 0 	
if (!isNumber(user.euros)) user.euros = 0 	
if (!isNumber(user.boletos)) user.boletos = 0 	
if (!isNumber(user.llaves)) user.llaves = 0 	
if (!isNumber(user.piesas)) user.piesas = 0 	
if (!isNumber(user.espadas)) user.espadas = 0
if (!isNumber(user.doespadas)) user.doespadas = 0 	
if (!isNumber(user.cuchillos)) user.cuchillos = 0 	
if (!isNumber(user.achas)) user.achas = 0 	
if (!isNumber(user.picos)) user.picos = 0 	
if (!isNumber(user.armas)) user.armas = 0 	
if (!isNumber(user.bombas)) user.bombas = 0 	
if (!isNumber(user.granadas)) user.granadas = 0 	
if (!isNumber(user.imanes)) user.imanes = 0 	
if (!isNumber(user.escudos)) user.escudos = 0 	
if (!isNumber(user.arcos)) user.arcos = 0 	
if (!isNumber(user.cajaherra)) user.cajaherra = 0 	
if (!isNumber(user.martillos)) user.martillos = 0 	
if (!isNumber(user.tornillos)) user.tornillos = 0 	
if (!isNumber(user.cierras)) user.cierras = 0 	
if (!isNumber(user.hierros)) user.hierros = 0 	
if (!isNumber(user.destornillar)) user.destornillar = 0 	
if (!isNumber(user.ladrillos)) user.ladrillos = 0 	
if (!isNumber(user.llaveinglesa)) user.llaveinglesa = 0 	
if (!isNumber(user.pastillas)) user.pastillas = 0 	
if (!isNumber(user.sangres)) user.sangres = 0 	
if (!isNumber(user.antidotos)) user.antidotos = 0 	
if (!isNumber(user.pociones)) user.pociones = 0 	
if (!isNumber(user.curitas)) user.curitas = 0 	
if (!isNumber(user.micasa)) user.micasa = 0 	
if (!isNumber(user.servidores)) user.servidores = 0 	
if (!isNumber(user.servercoins)) user.servercoins = 0 	
if (!isNumber(user.haus)) user.haus = 0
if (!isNumber(user.healt)) user.healt = 0
if (!isNumber(user.health)) user.health = 0
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
//Eventos
if (!isNumber(user.nieve)) user.nieve = 0
if (!isNumber(user.agua)) user.agua = 0
if (!isNumber(user.luz)) user.luz = 0
if (!isNumber(user.maceta)) user.maceta = 0
if (!isNumber(user.polen)) user.polen = 0
if (!isNumber(user.flores)) user.flores = 0
if (!isNumber(user.trebol)) user.trebol = 0
if (!isNumber(user.hojas)) user.hojas = 0
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
if (!('registered' in user)) user.registered = false
if (!('registroR' in user)) user.registroR = false
if (!('registroC' in user)) user.registroC = false  
if (!isNumber(user.IDregister)) user.IDregister = 0 	
if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!('tiempo' in user)) user.tiempo = 0 
if (!('miestado' in user)) user.miestado = 0
if (!isNumber(user.premiumDate)) user.premiumDate = -1
if (!isNumber(user.regTime)) user.regTime = -1
}
if (!user.registered2) {
if (!('age' in user)) user.age = 0
}
if (!user.registered3) {
if (!('genero' in user)) user.descripcion = 0
}	              		    
if (!isNumber(user.afk)) user.afk = -1
//if (!('autolevelup' in user))  user.autolevelup = true
if (!isNumber(user.reporte)) user.reporte = 0
if (!('role' in user)) user.role = '0'
if (!('MTLanguage' in user)) user.MTLanguage = m.MTLanguage
if (!('MBlanguage' in user)) user.MBlanguage = 'es'
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈• TIEMPOS EN JUEGOS....
if (!isNumber(user.timesuerte)) user.timesuerte = 0
if (!isNumber(user.timecofre)) user.timecofre = 0
if (!isNumber(user.timejuego)) user.timejuego = 0
if (!isNumber(user.timeslot)) user.timeslot = 0
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈• BANCOS
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.micofre)) user.micofre = 0
if (!isNumber(user.bankmoney)) user.bankmoney = 0
if (!isNumber(user.banklimit)) user.banklimit = 0
if (!isNumber(user.bankdolares)) user.bankdolares = 0
if (!isNumber(user.bankmbcoins)) user.bankmbcoins = 0
if (!isNumber(user.bankboletos)) user.bankboletos = 0
if (!isNumber(user.bankexp)) user.bankexp = 0
if (!isNumber(user.bankyenes)) user.bankyenes = 0
if (!isNumber(user.bankeuros)) user.bankeuros = 0
if (!isNumber(user.bankpremium)) user.bankpremium = 0
//Aleatorio
if (!isNumber(user.formarpana)) user.formarpana = 0
if (!isNumber(user.serpana)) user.serpana = 0
if (!isNumber(user.formarpareja)) user.formarpareja = 0
if (!isNumber(user.serpareja)) user.serpareja = 0
//  • • • • • • • • • • • • • • • • • • • • •
if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
if (!user.job) user.job = 'Desempleo'
if (!user.premium) user.premium = false
if (!user.premium) user.premiumTime = 0
} else
global.db.data.users[m.sender] = {
MTLanguage: 0, MBlanguage: 'es',
afk: -1, afkReason: '',
reporte: 0, name: m.name,
warn: 0, age: 0,
banned: false, BannedReason: '', Banneduser: false,
//Beta no disponible: Proximamente - codigo GataNina-Li
tiempo: 0, miestado: 0, descripcion: 0,
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈• TIEMPOS EN JUEGOS....
timesuerte: 0, timecofre: 0,
timejuego: 0, timeslot: 0,
//------------------------
//Verificacion completa.

//------------------------
premLimit: 0,
rolwc: [], wc_rol: 0, wc_rol2: 0,
wc_rol3: 0, wc_rol4: 0, wc_rol5: 0,
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈• RECURSOS
limit: 0, exp: 0, velas: 0, corazones 0, money: 0, level: '', role: '',
premiumcoins: 0, paycoins: 0, arscoins: 0, mxncoins: 0, pencoins: 0
copcoins: 0, pygcoins: 0, bobcoins: 0, vescoins: 0
dolares: 0, mbcoins: 0, yenes: 0, euros: 0,
boletos: 0, llaves: 0, piesas: 0, espadas: 0, doespadas: 0,
cuchillos: 0, achas: 0, picos: 0, armas: 0, bombas: 0,
granadas: 0, imanes: 0, escudos: 0, arcos: 0, cajaherra: 0,
martillos: 0, tornillos: 0, cierras: 0, hierros: 0, destornillar: 0,
ladrillos: 0, llaveinglesa, 0, pastillas: 0, sangres: 0, antidotos: 0,
pociones: 0, curitas: 0, micasa: 0, servidores: 0, servercoins: 0,
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
//Eventos
nieve: 0, agua: 0, luz: 0, 
maceta: 0, polen: 0, flores: 0, 
trebol: 0, hojas: 0,
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
//Aleatorio
formarpana: '', serpana: '',
formarpareja: '', serpareja: '',
//•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
muto: false, premium: false,
premiumTime: 0, registered: false, registered2: false,
registered3: false, registroR: false,
registroC: false, reglast: 0, regTime: -1,
}
let akinator = global.db.data.users[m.sender].akinator
if (typeof akinator !== 'object')
global.db.data.users[m.sender].akinator = {}
if (akinator) {
if (!('sesi' in akinator)) akinator.sesi = false
if (!('server' in akinator)) akinator.server = null
if (!('frontaddr' in akinator)) akinator.frontaddr = null
if (!('session' in akinator)) akinator.session = null
if (!('signature' in akinator)) akinator.signature = null
if (!('question' in akinator)) akinator.question = null
if (!('progression' in akinator)) akinator.progression = null
if (!('step' in akinator)) akinator.step = null
if (!('soal' in akinator)) akinator.soal = null
} else
global.db.data.users[m.sender].akinator = {
sesi: false,
server: null,
frontaddr: null,
session: null,
signature: null,
question: null,
progression: null,
step: null, 
soal: null
}  
let chat = global.db.data.chats[m.chat]
if (typeof chat !== 'object')
global.db.data.chats[m.chat] = {}
		
if (chat) {
if (!('isBanned' in chat)) chat.isBanned = false         
if (!('welcome' in chat)) chat.welcome = true           
if (!('modoDetect' in chat)) chat.modoDetect = false               
if (!('sWelcome' in chat)) chat.sWelcome = ''          
if (!('sBye' in chat)) chat.sBye = ''                    
if (!('sPromote' in chat)) chat.sPromote = ''             
if (!('sDemote' in chat)) chat.sDemote = '' 
if (!('sCondition' in chat)) chat.sCondition = JSON.stringify([{ grupo: { usuario: [], condicion: [], admin: '' }, prefijos: []}])
if (!('delete' in chat)) chat.delete = false                   
if (!('modoHot' in chat)) chat.modoHot = false       
if (!('modoSticks' in chat)) chat.modoSticks = false            
if (!('autoSticks' in chat)) chat.autoSticks = false      
if (!('audios' in chat)) chat.audios = false          
if (!('noSubBots' in chat)) chat.noSubBots = false      
if (!('noSubBots2' in chat)) chat.noSubBots2 = false      
if (!('antiOcultos' in chat)) chat.antiVer = false 
if (!('noXXX' in chat)) chat.noXXX = false     
if (!('siAceptar' in chat)) chat.siAceptar = false    
if (!('nopEnlace' in chat)) chat.nopEnlace = false     
if (!('todoEnlace' in chat)) chat.todoEnlace = false
if (!('notiktok' in chat)) chat.notiktok = false
if (!('noyoutube' in chat)) chat.noyoutube = false
if (!('notelegram' in chat)) chat.notelegram = false
if (!('nofacebook' in chat)) chat.nofacebook = false
if (!('noinstagram' in chat)) chat.noinstagram = false
if (!('notwitter' in chat)) chat.notwitter = false
if (!('nodiscord' in chat)) chat.nodiscord = false
if (!('nothreads' in chat)) chat.nothreads = false
if (!('nogithub' in chat)) chat.nogithub = false
if (!('notwitch' in chat)) chat.notwitch = false
if (!('deleteAT' in chat)) chat.deleteAT = false
if (!('deleteGmail' in chat)) chat.deleteGmail = false
if (!('deleteGrupo' in chat)) chat.deleteGrupo = false
if (!('deleteChannel' in chat)) chat.deleteChannel = false
if (!('noMundial' in chat)) chat.noMundial = false
if (!('modoReact' in chat)) chat.modoReact = false    
if (!('verunavez' in chat)) chat.verunavez = false       
if (!('soloAdmins' in chat)) chat.soloAdmins = false    
if (!('noToxicos' in chat)) chat.noToxicos = false
if (!('juegos' in chat)) chat.juegos = false  
if (!('juegos2' in chat)) chat.juegos2 = false
if (!('simiBot' in chat)) chat.simiBot = false
if (!('noRgp' in chat)) chat.noRpg = false
if (!('noMenu' in chat)) chat.noMenu = true
if (!('noBuscador' in chat)) chat.noBuscador = false
if (!('noAjustes' in chat)) chat.noAjustes = false
if (!('noPermitido' in chat)) chat.noPermitido = false
if (!('noDescargas' in chat)) chat.noDescargas = false
if (!('noLag' in chat)) chat.noLag = false
if (!('autoNivel' in chat))  chat.autoNivel = false
if (!isNumber(chat.expired)) chat.expired = 0
} else
global.db.data.chats[m.chat] = {
isBanned: false,
welcome: true,
modoDetect: false,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '', 
sCondition: JSON.stringify([{ grupo: { usuario: [], condicion: [], admin: '' }, prefijos: []}]), 
delete: false,                   
modoHot: false,       
modoSticks: false,            
autoSticks: false,      
audios: false,          
noSubBots: false,      
noSubBots2: false,      
antiVer: false, 
noXXX: false,     
siAceptar: false,    
nopEnlace: false,     
todoEnlace: false,
notiktok: false,
noyoutube: false,
notelegram: false,
nofacebook: false,
noinstagram: false,
notwitter: false,
nodiscord: false,
nothreads: false,
nogithub: false,
notwitch: false,
deleteAT: false,
deleteGmail: false,
deleteGrupo: false,
deleteChannel: false,
noMundial: false,
modoReact: false,    
verunavez: false,       
soloAdmins: false,    
noToxicos: false,
juegos: false,  
juegos2: false,
simiBot: false,
noRpg: false,
noMenu: true,
noBuscador: false,
inoAjustes: false,
noPermitido: false,
noDescargas: false,
noLag: false,
ichat.autoNivel: false,
expired: 0,
}
let settings = global.db.data.settings[this.user.jid]
if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('modoPublico' in settings)) settings.modoPublico = false
if (!('autoread' in settings)) settings.autoread = false
if (!('autoread2' in settings)) settings.autoread2 = false
if (!('restrict' in settings)) settings.restrict = false
if (!('temporal' in settings)) settings.temporal = false
if (!('noPrivados' in settings)) settings.noPrivados = false
if (!('antiCall' in settings)) settings.antiCall = true
if (!('antiSpam' in settings)) settings.antiSpam = false 
if (!('modoMbmd' in settings)) settings.modoMbmd = false
if (!('subbots' in settings)) settings.subbots = true 
} else global.db.data.settings[this.user.jid] = {
modoPublico: false,
autoread: false,
autoread2: false,
restrict: false,
temporal: false,
noPrivados: false,
antiCall: true,
antiSpam: false,
modoMbmd: false, 
subbots: true,
}} catch (e) {
console.error(e)
}

const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = isROwner || m.fromMe
const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPrems = isROwner || global.db.data.users[m.sender].premiumTime > 0
if (opts['queque'] && m.text && !(isMods || isPrems)) {
let queque = this.msgqueque, time = 1000 * 5
const previousID = queque[queque.length - 1]
queque.push(m.id || m.key.id)
setInterval(async function () {
if (queque.indexOf(previousID) === -1) clearInterval(this)
await delay(time)
}, time)
}

if (opts['nyimak']) return
if (!isROwner && opts['modoPublico']) return 
if (opts['soloPrivados'] && m.chat.endsWith('g.us')) return
if (opts['soloGrupos'] && !m.chat.endsWith('g.us')) return
if (opts['swonly'] && m.chat !== 'status@broadcast') return
if (typeof m.text !== 'string')
m.text = ''
if (m.isBaileys || isBaileysFail && m?.sender === m.this?.this?.user?.jid) {
return;
}  
m.exp += Math.ceil(Math.random() * 10)
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
const participants = (m.isGroup ? groupMetadata.participants : []) || []
const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} 
const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {}
const isRAdmin = user?.admin == 'superadmin' || false
const isAdmin = isRAdmin || user?.admin == 'admin' || false  
const isBotAdmin = bot?.admin || false

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin)
continue
if (plugin.disabled)
continue
const __filename = join(___dirname, name)
if (typeof plugin.all === 'function') {
try {
await plugin.all.call(this, m, {
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
console.error(e)
}}
if (!opts['restrict'])
if (plugin.tags && plugin.tags.includes('admin')) {
continue
}
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
let match = (_prefix instanceof RegExp ? 
[[_prefix.exec(m.text), _prefix]] :
Array.isArray(_prefix) ?
_prefix.map(p => {
let re = p instanceof RegExp ? 
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof _prefix === 'string' ? 
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (typeof plugin.before === 'function') {
if (await plugin.before.call(this, m, {
match,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
}))
continue
}
if (typeof plugin !== 'function')
continue
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
args = args || []
let _args = noPrefix.trim().split` `.slice(1)
let text = _args.join` `
command = (command || '').toLowerCase()
let fail = plugin.fail || global.dfail 
let isAccept = plugin.command instanceof RegExp ? 
plugin.command.test(command) :
Array.isArray(plugin.command) ? 
plugin.command.some(cmd => cmd instanceof RegExp ? 
cmd.test(command) :
cmd === command
) :
typeof plugin.command === 'string' ? 
plugin.command === command :
false

if (!isAccept)
continue
m.plugin = name
if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (!['owner-unbanchat.js'].includes(name) && chat && chat.isBanned && !isROwner) return // Except this
if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned && !isROwner) return 
if (m.text && user.banned && !isROwner) {
if (user.antispam > 2) return
m.reply(`${esmsMT['hSpamUser'](user)}`)
user.antispam++	
return
}
	
if (user.antispam2 && isROwner) return
let time = global.db.data.users[m.sender].spam + 3000
if (new Date - global.db.data.users[m.sender].spam < 3000) return console.log(`[ SPAM ]`) 
global.db.data.users[m.sender].spam = new Date * 1
}
		
let hl = _prefix 
let adminMode = global.db.data.chats[m.chat].modoadmin
let alan = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && alan) return   
if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { 
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) {
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) { 
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) { 
fail('mods', m, this)
continue
}
if (plugin.premium && !isPrems) { 
fail('premium', m, this)
continue
}
if (plugin.group && !m.isGroup) { 
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) { 
fail('botAdmin', m, this)
continue
} else if (plugin.admin && !isAdmin) { 
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) { 
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) { 
fail('unreg', m, this)
continue
}
if (plugin.register2 == true && _user.registered2 == false) { 
fail('unreg', m, this)
continue
}
if (plugin.register3 == true && _user.registered3 == false) { 
fail('unreg', m, this)
continue
}
if (plugin.verificacionz == true && _user.verificacionz == false) { 
fail('unreg', m, this)
continue
}
m.isCommand = true
let xp = 'exp' in plugin ? parseInt(plugin.exp) : 10 
if (xp > 2000)
m.reply('Exp limit') 
else               
if (!isPrems && plugin.mbcoins && global.db.data.users[m.sender].mbcoins < plugin.mbcoins * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *MBcoins* para realizar esta opcion, consigue mas usando otros comandos que ganen este recurso._`, { quoted: m })         
continue     
}
if (!isPrems && plugin.paycoins && global.db.data.users[m.sender].paycoins < plugin.paycoins * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *PayCoins* para realizar esta opcion._\n- _Realiza una transferencia por USD, ARS, COP, PEN, MXN o otro tipo._`, { quoted: m })         
continue     
}
if (!isPrems && plugin.arscoins && global.db.data.users[m.sender].arscoins < plugin.arscoins * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *Pesos argentinos* para realizar esta opcion._\n- _Realiza una transferencia por USD, ARS, COP, PEN, MXN o otro tipo._`, { quoted: m })         
continue     
}
if (!isPrems && plugin.copcoins && global.db.data.users[m.sender].copcoins < plugin.copcoins * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *Pesos colombianos* para realizar esta opcion._\n- _Realiza una transferencia por USD, ARS, COP, PEN, MXN o otro tipo._`, { quoted: m })         
continue     
}
if (!isPrems && plugin.pencoins && global.db.data.users[m.sender].paycoins < plugin.paycoins * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *Soles peruanos* para realizar esta opcion._\n- _Realiza una transferencia por USD, ARS, COP, PEN, MXN o otro tipo._`, { quoted: m })         
continue     
}
if (!isPrems && plugin.mxncoins && global.db.data.users[m.sender].mxncoins < plugin.mxncoins * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *Pesos mexicanos* para realizar esta opcion._\n- _Realiza una transferencia por USD, ARS, COP, PEN, MXN o otro tipo._`, { quoted: m })         
continue     
}
if (!isPrems && plugin.boletos && global.db.data.users[m.sender].boletos < plugin.boletos * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *Boletos* para realizar esta opcion._\n- _Consigue mas jugando juegos que ganen estos recursos._`, { quoted: m })         
continue     
}
if (!isPrems && plugin.llaves && global.db.data.users[m.sender].llaves < plugin.llaves * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *Llaves* para abrir este cofre._\n- _Consigue una llave jugando al juego *#slot* para ganar este recurso._`, { quoted: m })         
continue     
}
if (!isPrems && plugin.piesas && global.db.data.users[m.sender].piesas < plugin.piesas * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *Piesas* para formar una imagen._\n- _Consigue mas piesas jugando al juego *#slot*, *#ruleta* o juegos que ganen este recurso._`, { quoted: m })         
continue     
}
			
m.exp += xp
if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
this.reply(m.chat, `❪ ✎ › _No tienes suficientes *Diamantes* para realizar esta opcion._`, { quoted: m })         
continue 
}
if (plugin.level > _user.level) {
this.reply(m.chat, `❪ ✎ › Se requiere el nivel *${plugin.level}* para usar este comando.\n\n- _Tu nivel actual es:_ *${_user.level}*\n\n> Sube de nivel usando el comando *#levelup*`, { quoted: m })         

continue 
}
let extra = {
match,
usedPrefix,
noPrefix,
_args,
args,
command,
text,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
}
try {
await plugin.call(this, m, extra)
if (!isPrems)
m.limit = m.limit || plugin.limit || false
m.money = m.money || plugin.money || false
} catch (e) {
m.error = e
console.error(e)
if (e) {
let text = format(e)
for (let key of Object.values(global.APIKeys))
text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
if (e.name)
m.reply(text)
}} finally {
if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}}
if (m.limit)
m.reply(`❪ ✓ › _Has gastado_ ${+m.limit} _diamantes._`)
}
if (m.money)
m.reply(`❪ ✓ › _Has gastado_ ${+m.money} _monedas._`)  
break
}}} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1)
this.msgqueque.splice(quequeIndex, 1)
}
let user, stats = global.db.data.stats
if (m) { let utente = global.db.data.users[m.sender]
if (utente.muto == true) {
let bang = m.key.id
let cancellazzione = m.key.participant
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: cancellazzione }})
}
if (m.sender && (user = global.db.data.users[m.sender])) {
user.exp += m.exp
user.limit -= m.limit * 1
user.money -= m.money * 1
}

let stat
if (m.plugin) {
let now = +new Date
if (m.plugin in stats) {
stat = stats[m.plugin]
if (!isNumber(stat.total))
stat.total = 1
if (!isNumber(stat.success))
stat.success = m.error != null ? 0 : 1
if (!isNumber(stat.last))
stat.last = now
if (!isNumber(stat.lastSuccess))
stat.lastSuccess = m.error != null ? 0 : now
} else
stat = stats[m.plugin] = {
total: 1,
success: m.error != null ? 0 : 1,
last: now,
lastSuccess: m.error != null ? 0 : now
}
stat.total += 1
stat.last = now
if (m.error == null) {
stat.success += 1
stat.lastSuccess = now
}}}

try {
if (!opts['noprint']) await (await import(`./MBMD/print.js`)).default(m, this)
} catch (e) {
console.log(m, m.quoted, e)}
let settingsREAD = global.db.data.settings[this.user.jid] || {}  
if (opts['autoread']) await this.readMessages([m.key])
if (settingsREAD.autoread2) await this.readMessages([m.key])  	    
if (db.data.chats[m.chat].modoReact && m.text.match(/(a|e|i|o|u|p|d|f|l|t|s|j|n)/gi)) {
let emot = pickRandom(["🪵", "🪨", "⛰️", "☄️", "🌌", "🍥", "🍤", "🍣", "🍝", "🍰", "🍺", "🍾", "🍷", "🥃", "🍹", "🚀", "🏙️", "🌃", "🌇"])
if (!m.fromMe) return this.sendMessage(m.chat, { react: { text: emot, key: m.key }})
}
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}
export async function participantsUpdate({ id, participants, action }) {
if (opts['modoPublico'])
return
if (this.isInit)
return
if (global.db.data == null)
await loadDatabase()
let chat = global.db.data.chats[id] || {}
let text = ''
switch (action) {
case 'add':
case 'remove':
if (chat.welcome) {
let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
for (let user of participants) {
let pp = global.mbmdImagens
try {
pp = await this.profilePictureUrl(user, 'image')
} catch (e) {
} finally {
let apii = await this.getFile(pp)                                      
const botTt2 = groupMetadata.participants.find(u => this.decodeJid(u.id) == this.user.jid) || {} 
const isBotAdminNn = botTt2?.admin === "admin" || false
text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || esmsMT.hSinDesc()) :
(chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
			    
if (chat.antifake && isBotAdminNn && action === 'add') {
const prefijosPredeterminados = [20, 2, 4, 6, 7, 8, 9] 
const rutaArchivo = './prefijos.json'
let prefijos = []
const existeArchivo = fs.existsSync(rutaArchivo)
if (existeArchivo) {
try {
const contenido = fs.readFileSync(rutaArchivo, 'utf-8')
prefijos = JSON.parse(contenido)
} catch (error) {
console.log('Error "prefijos.json": ', error)
return
}} else {
prefijos = prefijosPredeterminados
}
const comienzaConPrefijo = prefijos.some(prefijo => user.startsWith(prefijo.toString()))
if (comienzaConPrefijo) {
let texto = esmsMT.noFakes()
await conn.sendMessage(id, { text: texto, mentions: [user] })
let responseb = await conn.groupParticipantsUpdate(id, [user], 'remove')
if (responseb[0].status === "404") return      
}}
	
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }      
apii.data = ''
this.sendMessage(id, { text: text, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[user],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"thumbnail": apii.data, 
"title": 'MBMD • GROUP',
"containsAutoReply": true,
"mediaType": 1, 
sourceUrl: 'https://ko-fi.com/mdmd_oficial' }}}, { quoted: fkontak2 })
}}}
			    
break
case 'promote':
case 'daradmin':
case 'darpoder':
text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
case 'demote':
case 'quitarpoder':
case 'quitaradmin':
if (!text)
text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
text = text.replace('@user', '@' + participants[0].split('@')[0])
if (chat.modoDetect)
break
}}
export async function groupsUpdate(groupsUpdate) {
if (opts['modoPublico'] && !isOwner && !isROwner)
return
for (const groupUpdate of groupsUpdate) {
const id = groupUpdate.id
if (!id) continue
let chats = global.db.data?.chats?.[id], text = ''
if (!chats?.modoDetect) continue
if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
if (!text) continue
await this.sendMessage(id, { text, mentions: this.parseMention(text) })
}}
export async function callUpdate(callUpdate) {
let isAnticall = global.db.data.settings[this.user.jid].antiCall  
if (!isAnticall) return
for (let nk of callUpdate) { 
if (nk.isGroup == false) {
if (nk.status == "offer") {
let callmsg = await this.reply(nk.from, `❪ ✎ › _Hola usuario_ *@${nk.from.split('@')[0]}*, no esta permitido hacer ${nk.isVideo ? 'una video llamada' : 'una llamada'} en este chat, seras bloqueado.`, nk)
await this.updateBlockStatus(nk.from, 'block')
}}}}
export async function deleteUpdate(message) {
try {
const { fromMe, id, participant } = message
if (fromMe) return 
let msg = this.serializeM(this.loadMessage(id))
let chat = global.db.data.chats[msg?.chat] || {}
if (!chat?.delete) return 
if (!msg) return 
if (!msg?.isGroup) return 
const antideleteMessage = `❪ ✎ › _Un participante ha eliminado un mensaje._\n\n- ❥︎ _Reenviando mensaje eliminado._`.trim();
await this.sendMessage(msg.chat, {text: antideleteMessage, mentions: [participant]}, {quoted: msg})
this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
} catch (e) {
console.error(e)
}}

global.dfail = (type, m, conn) => {
let msg = {
rowner: `✎ _Hola_ ${taguser}\n- ✿ _Este comando solo puede ser utilizado por el creador._\n\n> ✦ _Puede usar el comando *#menu* para ver otros comandos._`,
owner: `✎ _Hola_ ${taguser}\n- ✿ _Este comando solo puede ser utilizado por asistentes del proyecto._\n\n> ✦ _Puede usar el comando *#menu* para ver otros comandos._`,
mods: `✎ _Hola_ ${taguser}\n- ✿ _Este comando solo puede ser utilizado por moderadores, personas destacadas en el proyecto y administradores del proyecto._\n\n> ✦ _Puede usar el comando *#menu* para ver otros comandos._`,
premium: `✎ _Hola_ ${taguser}\n- ✿ _Este comando solo puede ser utilizado por los usuarios premiums._\n\n> ✦ _Puede usar el comando *#menu* para ver otros comandos._`,
group: `✎ _Hola_ ${taguser}\n- ✿ _Este comando solo puede ser ejecutado en chats grupales._\n\n❍ \`Entre a un chat grupal en donde este el bot para utilizarlo.\``,
private: `✎ _Hola_ ${taguser}\n- ✿_Este comando solo pueder ser ejecutado en chats privados._\n\n❍ \`Entre al chat privado del bot para utilizarlo.\``,
admin: `✎ _Hola_ ${taguser}\n- ✿ _Este comando solo puede ser utilizado por los administradores del grupo._\n\n> ✦ _Ingrese el comando *#menu grupal* para ver los comandos grupales o *#menu* para ver todos los comandos._`,
botAdmin: `✎ _Hola_ ${taguser}\n- ✿ _Este comando no se podra ejecutar por que el bot no es admin para realizar estas acciones._\n\n> ✦ _Para usar estas acciones, es necesario que el bot sea admin._`,
unreg: `✎ _Hola_ ${taguser}\n- ✿ _Es necesario que te registres para usar este comando._\n\n> ✦ _Ingrese el comando *#verify* para ver las opciones disponibles para verificarte._`,
restrict: `✎ _Las restricciones no estan activas, no puedo realizar estas acciones si las restricciones estan inactivas._`,
}[type]	
let tg = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: msg, contextInfo: { externalAdReply: { title: '*MBMD │ INFO*', body: '✎ @instagram ~ @facebook ~ @whatsapp ♡︎', thumbnail: 'https://qu.ax/pROnw.jpg', sourceUrl: cafe }}}}, tg)
if (msg) return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
}
const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.redBright('Update \'handler.js\''));
if (global.conns && global.conns.length > 0 ) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
for (const userr of users) {
userr.subreloadHandler(false)
}}});
