//Base de datos
import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import axios from "axios";
import moment from "moment-timezone";
global.isBaileysFail = false;
global.mods = ['5493873655135'];
global.prems = ['5493873655135'];
global.obtenerQrWeb = 0; 
global.keepAliveRender = 0; 
global.botNumberCode = "";
global.confirmCode = "";
global.version_language = '1.0';
global.official = [["5493873655135", 'ᴍʙᴍᴅ • ᵇᵒᵗ', 1], ["5493873655168", 'ᴍʙᴍᴅ • ᵖʳⁱⁿᶜⁱᵖᵃˡ', 1]];
global.owner = [["5493873655135", '🗿 ᴏᴡɴᴇʀ', true], ["5493873655168"]];
global.gmailbot = 'mbmdoficial@gmail.com';
global.packname = `𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`;
global.author = `𝙈𝘽𝙈𝘿`;
global.version = "3.5.0";
global.mb_desc = "• 🅼🄱︎🅼🄳 •︎";
global.seguircanal = { channelMb: '120363368769201105@newsletter', channelMb2: '120363318353263389@newsletter' };
global.wm = "𝘔𝘉𝘔𝘋";
global.igfg = "𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝑴𝑩𝑴𝑫.";
global.nomorown = "5493873655135";
global.multiplier = 85;
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
});
  
