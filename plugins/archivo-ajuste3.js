import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) return conn.reply(m.chat, ``, { quoted: m })
if (command == 'chatgpt' || command == 'ia') {
try {
await conn.sendPresenceUpdate('composing', m.chat);
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true
});
return response.data.result;
} catch (error) {
console.error('Error al obtener:', error);
}};
let query = m.text;
let username = `${m.pushName}`;
let syms1 = `Tu seras MBMD, actuaras como MBMD, responderas los mensajes amablemente, ofreceras ayuda cuando te hablen, te llamaras MBMD.`;
let result = await luminsesi(query, username, syms1);
 await conn.reply(m.chat, result, { quoted: m });
} catch {
try {
let gpt = await fetch(`${apis}/ia/gptweb?text=${text}`);
let res = await gpt.json();
await conn.reply(m.chat, res.gpt, { quoted: m });
} catch {
}}};
if (command == 'chatgpt2' || command == 'ia2') {
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`${apis}/ia/gptweb?text=${text}`);
let res = await gpt.json();
await conn.reply(m.chat, res.gpt, { quoted: m });
}};
handler.command = /^(chatgpt|ia|chatgpt2|ia2)$/i;
export default handler;

