import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import fs from "fs";
import { load } from 'cheerio';
import fetch from "node-fetch";
import axios from "axios";
import moment from "moment-timezone";
global.owner = [["5493873655135", 'MBMD | OFC', true], ["5493873655168", 'MBMD | BOT', true]];
global.mods = [];
global.prems = [];
global.isBaileysFail = false;
global.obtenerQrWeb = 0; 
global.keepAliveRender = 0; 
global.botNumberCode = "5493873655168";
global.confirmCode = "";
global.Key360 = ["Gata_Dios"];
global.openai_key = 'sk-0';
global.openai_org_id = 'org-3';
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = "GataDiosV3";
global.itsrose = ["4b146102c4d500809da9d1ff"];
global.baileys = "@whiskeysockets/baileys";
global.apis = 'https://deliriussapi-oficial.vercel.app';

global.APIs = { 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api.fgmods.xyz', 
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site'
},
   
global.APIKeys = { 
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren'
};

global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;

global.img = 'https://qu.ax/vJFix.jpg';
global.img2 = 'https://qu.ax/QUBpO.jpg';
global.img3 = 'https://qu.ax/ihRnx.jpg';
global.imagen = 'https://qu.ax/KRbEB.jpg';
global.imagen2 = 'https://qu.ax/cBreZ.jpg';
global.imagen3 = 'https://qu.ax/tCbAz.jpg';
global.menuicon = 'https://qu.ax/Qhyzw.jpg';
global.menuicon2 = 'https://qu.ax/wrGgE.jpg';

global.imgc = 'https://qu.ax/mocYR.jpg';
global.imgc2 = 'https://qu.ax/GbfQk.jpg';
global.imgc3 = 'https://qu.ax/LAWdK.jpg';


global.grupo1 = 'https://chat.whatsapp.com/HF9jfgQro6LKQy0WqPHRzF';
global.grupo2 = 'https://chat.whatsapp.com/KQ6kQ9eQgHlEdvkYxgte19';
global.grupo_soporte = 'https://chat.whatsapp.com/EfbOgYFcA9QA2GDY31hWMf';

global.ceotg = 'https://t.me/MBMD_principal';
global.tgcanal = 'https://t.me/MBMD_channel';
global.facebook = 'https://www.facebook.com/profile.php?id=61566002226661&mibextid=ZbWKwL';
global.ceoig = 'https://www.instagram.com/mbmd_principal.';
global.ceotw = 'https://t.me/MBMD_principal';
global.ceoatom = 'https://atom.bio/oficialmbmd';
global.ceokofi = 'https://ko-fi.com/mbmd_oficial';
global.paypal = 'https://www.paypal.me/mbmdoficial';
global.canalwa = 'https://whatsapp.com/channel/0029Vako2qm3WHTP1YZrLt1D';
global.canalwa2 = 'https://whatsapp.com/channel/0029VarxxPbI1rcZMcwKBl2z';
global.official = [["5493873655135", 'MBMD | OFC', 1], ["5493873655168", 'MBMD | BOT', 1]];

global.mail = '';
global.desc = '';
global.desc2 = '';
global.country = '';
global.packname = `MBMD`;
global.author = `MBMD`;
global.vs = "7.9.5";
global.mbmd = "• ChatBot •";
global.wm = "MBMD | AI";
global.igfg = "MBMD | WHATSAPP";
global.nomorown = "5493873655135";
global.botdate = `Fecha:  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`;
global.bottime = `Hora: ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;
global.multiplier = 85;
global.miscanales = {
micanal: '120363368769201105@newsletter',
micanal2: '120363318353263389@newsletter',
};
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
});
