import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { smsg } from './lib/simple.js';
import { format } from 'util';
import { fileURLToPath } from 'url';
import path, { join } from 'path';
import { unwatchFile, watchFile } from 'fs';
import fs from 'fs';
import chalk from 'chalk';
import fetch from 'node-fetch';

/**
 * @type {import('@adiwajshing/baileys')}
 */
const { proto } = (await import('@whiskeysockets/baileys')).default;
const isNumber = x => typeof x === 'number' && !isNaN(x);
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
clearTimeout(this);
resolve();
}, ms));

/**
* Handle messages upsert
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate
*/

export async function handler(chatUpdate) {
this.msgqueque = this.msgqueque || [];
this.uptime = this.uptime || Date.now();
if (!chatUpdate) {
return;
}
if (!chatUpdate || !chatUpdate.messages) {
return;
} else {
this.pushMessage(chatUpdate.messages).catch(console.error);
}
let m = chatUpdate.messages[chatUpdate.messages.length - 1];
if (!m) {
return;
}
if (global.db.data == null) await global.loadDatabase();

if (global.chatgpt.data === null) await global.loadChatgptDB();

try {
m = smsg(this, m) || m;
if (!m);
return;
m.exp = 0;
m.limit = false;
m.money = false;
try {
let user = global.db.data.users[m.sender];

let chatgptUser = global.chatgpt.data.users[m.sender];
if (typeof chatgptUser !== "object");
global.chatgpt.data.users[m.sender] = [];

if (typeof user !== 'object');
global.db.data.users[m.sender] = {};
if (user) {
if (!isNumber(user.boletos)) user.boletos = 0;
if (!isNumber(user.exp)) user.exp = 0;
if (!('premium' in user)) user.premium = false
if (!isNumber(user.money_ars)) user.money_ars = 0;
if (!isNumber(user.money_cop)) user.money_cop = 0;
if (!isNumber(user.money_clp)) user.money_clp = 0;
if (!isNumber(user.money_mxn)) user.money_mxn = 0;
if (!isNumber(user.money_soles)) user.momey_soles = 0;
if (!isNumber(user.money_usd)) user.money_usd = 0;
if (!isNumber(user.paycoins)) user.paycoins = 0;
if (!isNumber(user.piesas)) user.piesas = 0;
if (!isNumber(user.llaves)) user.llaves = 0;
if (!isNumber(user.velas)) user.velas = 0;
if (!('muto' in user)) user.muto = false
if (!isNumber(user.mbcoins)) user.mbcoins = 0;
if (!isNumber(user.money)) user.money = 0;
if (!isNumber(user.diamantes)) user.diamantes = 0;
if (!('registered' in user)) user.registered = false;
if (!('registroR' in user)) user.registroR = false;
if (!('registroC' in user)) user.registroC = false;
if (!isNumber(user.IDregister)) user.IDregister = 0;
	
if (!user.registered) {
if (!('name' in user)) user.name = m.name;
if (!('age' in user)) user.age = 0;
if (!('descripcion' in user)) user.descripcion = 0;
if (!('genero' in user)) user.genero = 0;
if (!('identidad' in user)) user.identidad = 0;
if (!('pasatiempo' in user)) user.pasatiempo = 0;
if (!('tiempo' in user)) user.tiempo = 0;
if (!('miestado' in user)) user.miestado = 0;
if (!('midLanguage' in user)) user.midLanguage = 0;
if (!isNumber(user.premLimit)) user.premLimit = 0;
if (!isNumber(user.premiumDate)) user.premiumDate = -1;
if (!isNumber(user.regTime)) user.regTime = -1;
}

if (!isNumber(user.afk)) user.afk = -1;
if (!isNumber(user.reporte)) user.reporte = 0;
if (!('role' in user)) user.role = '';
if (!isNumber(user.juegos)) user.juegos = 0;
if (!isNumber(user.antispam)) user.antispam = 0;
if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0;
if (!isNumber(user.bank_ars)) user.bank_ars = 0;
if (!isNumber(user.bank_cop)) user.bank_cop = 0;
if (!isNumber(user.bank_clp)) user.bank_clp = 0;
if (!isNumber(user.bank_mxn)) user.bank_mxn = 0;
if (!isNumber(user.bank_soles)) user.bank_soles = 0;
if (!isNumber(user.bank_usd)) user.bank_usd = 0;
if (!isNumber(user.fantasy)) user.fantasy = 0;
if (!isNumber(user.exp)) user.exp = 0;
if (!isNumber(user.fantasy)) user.fantasy = [];
if (!isNumber(user.fantasy_character)) user.fantasy_character = 0;
if (!isNumber(user.fantasy_character2)) user.fantasy_character2 = 0;
if (!isNumber(user.fantasy_character3)) user.fantasy_character3 = 0;
if (!isNumber(user.fantasy_character4)) user.fantasy_character4 = 0;
if (!isNumber(user.fantasy_character5)) user.fantasy_character5 = 0;
if (!isNumber(user.gamemines)) user.gamemines = false;
if (!isNumber(user.haus)) user.haus = 100;
if (!isNumber(user.healt)) user.healt = 100;
if (!isNumber(user.health)) user.health = 100;
if (!isNumber(user.crime)) user.crime = 0;
if (!isNumber(user.level)) user.level = 0;
if (!isNumber(user.diamantes)) user.diamantes = 0;
if (!isNumber(user.timeCofre)) user.timeCofre = 0;
if (!isNumber(user.timeMinar)) user.timeMinar = 0;
if (!isNumber(user.timeWork)) user.timeWork = 0;
if (!isNumber(user.timeRuleta)) user.timeRuleta = 0;
if (!isNumber(user.timeApostar)) user.timeApostar = 0;
if (!isNumber(user.timeRegalo)) user.timeRegalo = 0;
if (!isNumber(user.timeHora)) user.timeHora = 0;
if (!isNumber(user.timeDia)) user.timeDia = 0;
if (!isNumber(user.timeSemana)) user.timeSemana = 0;
if (!isNumber(user.timeJuegos)) user.timeJuegos = 0;
if (!isNumber(user.spam)) user.spam = 0;
if (!isNumber(user.money)) user.money = 150;
if (!isNumber(user.robo)) user.robo = 0;
if (!isNumber(user.robo)) user.reporte = 0;
if (!isNumber(user.shield)) user.shield = false;
if (!isNumber(user.warn)) user.warn = 0;
if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]';
if (!user.job) user.job = 'Desempleo';
if (!user.premium) user.premium = false;
if (!user.premium) user.premiumTime = 0;
if (!user.rtrofi) user.rtrofi = 'Bronce';
} else;
global.db.data.users[m.sender] = {
money_ars: 0,
money_cop: 0,
money_clp: 0,
money_mxn: 0,
money_soles: 0,
money_usd: 0,
paycoins: 0,
mbcoins: 0,
velas: 0,
piesas: 0,
llaves: 0,
afk: -1,
afkReason: '',
reporte: 0,
name: m.name,
age: 0,
genero: 0,
identidad: 0,
pasatiempo: 0,
tiempo: 0,
miestado: 0,	
descripcion: 0,
premLimit: 0,
juegos: 0,
messageSpam: 0,
antispam: 0,
antispamlastclaim: 0,
bank_ars: 0,
bank_cop: 0,
bank_clp: 0,
bank_mxn: 0,
bank_soles: 0,
bank_usd: 0,
banned: false,
BannedReason: '',
Banneduser: false,
exp: 0,
expired: 0,
fantasy: [],
fantasy_character: 0,
fantasy_character2: 0,
fantasy_character3: 0,
fantasy_character4: 0,
fantasy_character5: 0,
gamemines: false,
haus: 100,
healt: 100,
health: 100,
healtmonster: 100,
job: 'Pengangguran',
lbars: '[▒▒▒▒▒▒▒▒▒]',
level: 0,
diamantes: 0,
timeCofre: 0,
timeMinar: 0,
timeWork: 0,
timeRuleta: 0,
timeApostar: 0,
timeRegalo: 0,
timeHora: 0,
timeDia: 0,
timeSemana: 0,
timeJuegos: 0,
reporte: 0,
money: 0,
potion: 0,
muto: false,
premium: false,
premiumTime: 0,
registered: false,
registroR: false,
registroC: false,
reglast: 0,
regTime: -1,
role: 'Novato',
rtrofi: 'bronce',
sewa: false,
warn: 0,
};
let akinator = global.db.data.users[m.sender].akinator;
if (typeof akinator !== 'object');
global.db.data.users[m.sender].akinator = {};
if (akinator) {
if (!('sesi' in akinator)) akinator.sesi = false;
if (!('server' in akinator)) akinator.server = null;
if (!('frontaddr' in akinator)) akinator.frontaddr = null;
if (!('session' in akinator)) akinator.session = null;
if (!('signature' in akinator)) akinator.signature = null;
if (!('question' in akinator)) akinator.question = null;
if (!('progression' in akinator)) akinator.progression = null;
if (!('step' in akinator)) akinator.step = null;
if (!('soal' in akinator)) akinator.soal = null;
} else;
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
};
let chat = global.db.data.chats[m.chat];
if (typeof chat !== 'object');
global.db.data.chats[m.chat] = {};

if (chat) {
if (!('isBanned' in chat)) chat.isBanned = false;
if (!('welcome' in chat)) chat.welcome = true;
if (!('modoDetect' in chat)) chat.modoDetect = false;
if (!('sWelcome' in chat)) chat.sWelcome = '';
if (!('sBye' in chat)) chat.sBye = '';
if (!('sPromote' in chat)) chat.sPromote = '';
if (!('sDemote' in chat)) chat.sDemote = '';
if (!('sCondition' in chat)) chat.sCondition = JSON.stringify([{ grupo: { usuario: [], condicion: [], admin: '' }, prefijos: []}])
if (!('delete' in chat)) chat.delete = false;
if (!('modoHot' in chat)) chat.modoHot = true       
if (!('modoSticks' in chat)) chat.modoSticks = false            
if (!('autoSticks' in chat)) chat.autoSticks = false      
if (!('audios' in chat)) chat.audios = true          
if (!('noSubBots' in chat)) chat.noSubBots = true      
if (!('noSubBots2' in chat)) chat.noSubBots2 = true      
if (!('antiOcultos' in chat)) chat.antiVer = false 
if (!('noXXX' in chat)) chat.noXXX = true     
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
if (!('modoReact' in chat)) chat.modoReact = true    
if (!('verunavez' in chat)) chat.verunavez = false       
if (!('soloAdmins' in chat)) chat.soloAdmins = false    
if (!('noToxicos' in chat)) chat.noToxicos = true
if (!('juegos' in chat)) chat.juegos = true
if (!('noMenus' in chat)) chat.noMenus = true    
if (!('juegos2' in chat)) chat.juegos2 = true
if (!('simiBot' in chat)) chat.simiBot = false
if (!('noRgp' in chat)) chat.noRpg = false
if (!('noMenu' in chat)) chat.noMenu = false
if (!('noBuscador' in chat)) chat.noBuscador = false
if (!('noAjustes' in chat)) chat.noAjustes = false
if (!('noPermitido' in chat)) chat.noPermitido = false
if (!('noDescargas' in chat)) chat.noDescargas = false
if (!('noLag' in chat)) chat.noLag = false
if (!('autoNivel' in chat))  chat.autoNivel = false
if (!isNumber(chat.expired)) chat.expired = 0
if (!('horarioNsfw' in chat)) { 
chat.horarioNsfw = {
inicio: "00:00", 
fin: "23:59"
};
}
} else
global.db.data.chats[m.chat] = {
isBanned: false,
welcome: true,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '', 
sCondition: JSON.stringify([{ grupo: { usuario: [], condicion: [], admin: '' }, prefijos: []}]), 
sAutorespond: '', 
delete: false,
modohorny: true,
stickers: false,
autosticker: false,
audios: false,
antiver: true,
antiPorn: true,
antiLink: false,
antiLink2: false,
antiTiktok: false,
antiYoutube: false,
antiTelegram: false,
antiFacebook: false,
antiInstagram: false,
antiTwitter: false,
antiDiscord: false,
antiThreads: false,
antiTwitch: false,
antifake: false,
reaction: true,
viewonce: false,
modoadmin: false,
autorespond: true,
antitoxic: true,
game: true, 
game2: true, 
simi: false,
antiTraba: true,
autolevelup: true,
expired: 0,
horarioNsfw: {
inicio: "00:00", 
fin: "23:59"
}
}
let settings = global.db.data.settings[this.user.jid]
if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('self' in settings)) settings.self = false
if (!('autoread' in settings)) settings.autoread = false
if (!('autoread2' in settings)) settings.autoread2 = false
if (!('restrict' in settings)) settings.restrict = false
if (!('temporal' in settings)) settings.temporal = false
if (!('anticommand' in settings)) settings.anticommand = false
if (!('antiPrivate' in settings)) settings.antiPrivate = false
if (!('antiCall' in settings)) settings.antiCall = true
if (!('antiSpam' in settings)) settings.antiSpam = true 
if (!('modoia' in settings)) settings.modoia = false
if (!('jadibotmd' in settings)) settings.jadibotmd = true 
} else global.db.data.settings[this.user.jid] = {
self: false,
autoread: false,
autoread2: false,
restrict: false,
temporal: false,
antiPrivate: false,
antiCall: true,
antiSpam: true,
modoia: false, 
anticommand: false, 
jadibotmd: true,
}} catch (e) {
console.error(e)
}

const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = isROwner || m.fromMe
const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
//const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
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
if (!isROwner && opts['self']) return 
if (opts['pconly'] && m.chat.endsWith('g.us')) return
if (opts['gconly'] && !m.chat.endsWith('g.us')) return
if (opts['swonly'] && m.chat !== 'status@broadcast') return
if (typeof m.text !== 'string')
m.text = ''

//if (m.isBaileys) return 
if (m.isBaileys || isBaileysFail && m?.sender === this?.this?.user?.jid) {
return
}
	
m.exp += Math.ceil(Math.random() * 10)
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
const participants = (m.isGroup ? groupMetadata.participants : []) || []
const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {}
const isRAdmin = user?.admin == 'superadmin' || false
const isAdmin = isRAdmin || user?.admin == 'admin' || false //user admins? 
const isBotAdmin = bot?.admin || false //Detecta sin el bot es admin

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
// if (typeof e === 'string') continue
console.error(e)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(`🝐 _Ocurrio un error inesperado en el plugin:_ *${name}*\n• _Parece que el formato_ *${m.text}* _no esta definido._\n_El tipo de error ocurrente esta en el siguiente codigo erroneo:_\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
}}}
if (!opts['restrict'])
if (plugin.tags && plugin.tags.includes('admin')) {
// global.dfail('restrict', m, this)
continue
}
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
let match = (_prefix instanceof RegExp ? // RegExp Mode?
[[_prefix.exec(m.text), _prefix]] :
Array.isArray(_prefix) ? // Array?
_prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof _prefix === 'string' ? // String?
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
let fail = plugin.fail || global.dfail // When failed
let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
plugin.command.test(command) :
Array.isArray(plugin.command) ? // Array?
plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
cmd.test(command) :
cmd === command
) :
typeof plugin.command === 'string' ? // String?
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
this.sendMessage(m.chat, {text: `🝐 _Hola participante, usted esta haciendo muchos mensajes instantaneos._\n• _Estas bloqueado del bot por el momento._\n\n» *MOTIVO:*\n${user.messageSpam === 0 ? 'Sin resultados.' : user.messageSpam}`}, { quoted: m });
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
let gata = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && gata) return   
if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { //número bot owner
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) { //Owner
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) { //Propietario/Owner
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) { // Moderator
fail('mods', m, this)
continue
}
if (plugin.premium && !isPrems) { // Premium
fail('premium', m, this)
continue
}
if (plugin.group && !m.isGroup) { //Solo el grupo
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) { //Detecta si el bot es admins
fail('botAdmin', m, this)
continue
} else if (plugin.admin && !isAdmin) { //admins
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) { //Solo chat privado
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) { 
fail('unreg', m, this)
continue
}

m.isCommand = true
let xp = 'exp' in plugin ? parseInt(plugin.exp) : 10 
if (xp > 2000)
m.reply('Exp limit')
else               
if (!isPrems && plugin.money && global.db.data.users[m.sender].money < plugin.money * 1) {
this.sendMessage(m.chat, {text: `🝐 _No tienes *Monedas* para usar este comando._`}, { quoted: m });
continue
}
			
m.exp += xp
if (!isPrems && plugin.mbcoins && global.db.data.users[m.sender].mbcoins < plugin.mbcoins * 1) {
this.sendMessage(m.chat, {text: `🝐 _No tienes *MBcoins* para usar este comando._`}, { quoted: m });
continue 
}
if (plugin.level > _user.level) {
this.sendMessage(m.chat, {text: `🝐 _Para usar este comando, debes llegar al nivel_ ${plugin.level}\n_y tu nivel actual es:_ ${_user.level}\n\n• _Puedes subir de nivel usando:_ *#level*`}, { quoted: m });
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
// Error occured
m.error = e
console.error(e)
if (e) {
let text = format(e)
for (let key of Object.values(global.APIKeys))
text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
if (e.name)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
conn.sendMessage(m.chat, {text: `🝐 _Ocurrio un error inesperado en el plugin:_ *${name}*\n• _Parece que el formato_ *${m.text}* _no esta definido._\n_El tipo de error ocurrente esta en el siguiente codigo erroneo:_\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
}
conn.sendMessage(m.chat, {text: text}, { quoted: m });
}} finally {
// m.reply(util.format(_user))
if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}}
if (m.diamantes)
conn.sendMessage(m.chat, {text: `🝐 _Has gastado_ ${+diamantes} _monedas._`}, { quoted: m });
}
if (m.money)
conn.sendMessage(m.chat, {text: `🝐 _Has gastado_ ${+money} _monedas._`}, { quoted: m });
break
}}} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1)
this.msgqueque.splice(quequeIndex, 1)
}
//console.log(global.db.data.users[m.sender])
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
if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
} catch (e) {
console.log(m, m.quoted, e)}
let settingsREAD = global.db.data.settings[this.user.jid] || {}  
if (opts['autoread']) await this.readMessages([m.key])
if (settingsREAD.autoread2) await this.readMessages([m.key])  
//if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key])    
	    
if (db.data.chats[m.chat].modoReact && m.text.match(/(i|o|j|a|g|n|u|w|m|t|x|p|h|c)/gi)) {
let emot = pickRandom(["👤", "🏆", "🥏", "🤖", "👑", "🚀"])
if (!m.fromMe) return this.sendMessage(m.chat, { react: { text: emot, key: m.key }})
}
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
if (opts['self'])
return
// if (id in conn.chats) return // First login will spam
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
let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata;
for (let user of participants) {
let pp = global.imgc;
try {
pp = await this.profilePictureUrl(user, 'image');
} catch (e) {
} finally {
let apii = await this.getFile(pp);
const botTt2 = groupMetadata.participants.find(u => this.decodeJid(u.id) == this.user.jid) || {};
const isBotAdminNn = botTt2?.admin === "admin" || false;
text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'Sin descripcion.') :
(chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0]);
if (chat.antifake && isBotAdminNn && action === 'add') {
const prefijosPredeterminados = [1, 2, 4, 6, 7, 8, 9];
const rutaArchivo = './prefijos.json';
let prefijos = [];
const existeArchivo = fs.existsSync(rutaArchivo);
if (existeArchivo) {
try {
const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
prefijos = JSON.parse(contenido);
} catch (error) {
console.log('Error "prefijos.json": ', error);
return;
}} else {
prefijos = prefijosPredeterminados;
}
const comienzaConPrefijo = prefijos.some(prefijo => user.startsWith(prefijo.toString()));
if (comienzaConPrefijo) {
let texto = `✎ _El usuario que ha ingresado no es bienvenido, sera eliminado de inmediato._`.trim();
await conn.sendMessage(id, { text: texto, mentions: [user] });
let responseb = await conn.groupParticipantsUpdate(id, [user], 'remove');
if (responseb[0].status === "404") return;
}};

let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" };
this.sendMessage(id, {
text: text,
contextInfo: { 
mentionedJid: [user],
forwardingScore: 99999999, 
externalAdReply: {
title: 'MBMD',
body: 'WhatsApp bot multi funciones.',
thumbnail: apii.data,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: id});
apii.data = '';
//this.sendFile(id, apii.data, 'pp.jpg', text, null, false, { mentions: [user] }, { quoted: fkontak2 })
}}};

break;
case 'promote':
case 'daradmin':
case 'darpoder':
text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```');
case 'demote':
case 'quitarpoder':
case 'quitaradmin':
if (!text);
text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```');
text = text.replace('@user', '@' + participants[0].split('@')[0]);
if (chat.modoDetect);
//this.sendMessage(id, { text, mentions: this.parseMention(text) })
break;
}};

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
if (opts['self'] && !isOwner && !isROwner);
return;
for (const groupUpdate of groupsUpdate) {
const id = groupUpdate.id;
if (!id) continue;
let chats = global.db.data?.chats?.[id], text = '';
if (!chats?.modoDetect) continue;
// if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
//if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
//if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke);
if (!text) continue;
await this.sendMessage(id, { text, mentions: this.parseMention(text) });
}};

export async function callUpdate(callUpdate) {
let isAnticall = global.db.data.settings[this.user.jid].antiCall;
if (!isAnticall) return;
for (let nk of callUpdate) { 
if (nk.isGroup == false) {
if (nk.status == "offer") {
let callmsg = await this.reply(nk.from, `✎ _Hola usuario_ @${nk.from.split('@')[0]}.\n• _Las ${nk.isVideo ? 'llamadas' : 'video llamadas'} no se aceptan en este chat, seras bloqueado._`, false, { mentions: [nk.from] });
//let data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
await this.updateBlockStatus(nk.from, 'block');
}}}};

export async function deleteUpdate(message) {
try {
const { fromMe, id, participant } = message;
if (fromMe) return;
let msg = this.serializeM(this.loadMessage(id));
let chat = global.db.data.chats[msg?.chat] || {};
if (!chat?.delete) return;
if (!msg) return;
if (!msg?.isGroup) return;
const antideleteMessage = `
✎ _El participante_ @${participant.split`@`[0]} _ha eliminado un mensaje._
• _Iniciando reenvio del mensaje eliminado..._
`.trim();
await this.sendMessage(msg.chat, {text: antideleteMessage, mentions: [participant]}, {quoted: msg});
this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg));
} catch (e) {
console.error(e);
}}

global.dfail = (type, m, conn) => {
let msg = {
rowner: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Este comando solo puede ser utilizado por el mismo creador de este proyecto._\n\n• _Puede ver la lista de comandos usando:_ *#menu*`,
owner: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Este comando solo puede ser utilizado por los administradores y asistentes de este proyecto._\n\n• _Puede ver la lista de comandos usando:_ *#menu*`,
mods: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Este comando solo puede ser utilizado unicamente por los moderadores de este proyecto._\n\n• _Puede ver la lista de comandos usando:_ *#menu*`,
premium: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Este comando solo puede ser utilizado unicamente por los usuarios premium de este proyecto._\n\n• _Puede ver la lista de comandos usando:_ *#menu*`,
group: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Este comando solo puede ser utilizado en chats grupales._\n\n• _Puedes usar este comando en el grupo general de este proyecto o un grupo en donde este alojado el bot._`,
private: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Este comando solo puede ser utilizado en chats privados._\n\n• _Puedes entrar al chat privado del bot para usar este comando._`,
admin: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Este comando solo puede ser utilizado por administradores grupales._\n\n• _Solo los administradores pueden usar esta funcion._`,
botAdmin: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Este comando solo puede ser utilizado si soy administrador en este grupo._\n\n• _No puedo ejecutar esta funcion que necesita ser usada por un administrador._`,
unreg: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Para utilizar este comando, tienes que ser registrado en este proyecto._\n\n• _Puede hacerlo usando el comando:_ *#reg* o *#registrar*\n_de esta manera, guardaremos sus datos en un lugar muy seguro._`,
restrict: `✎ _Hola_ @${m.sender.split`@`[0]}.\n• _Estoy obligado a no cumplir esta funcion, por las restricciones establecidas._\n\n• _Puede contactar con el mismo creador de este proyecto, para permitir esta funcion._`,
}[type];

let tg = { quoted: m, userJid: conn.user.jid };
if (msg) return conn.relayMessage(m.chat, msg.message, { messageId: prep.key.id });
};

const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.redBright('Update \'handler.js\''));
//if (global.reloadHandler) console.log(await global.reloadHandler());
});
