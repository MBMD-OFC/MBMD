import { execSync } from 'child_process';
const handler = async (m, { conn, text }) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString();
if (messager.includes('Already up to date.')) messager = `✎ _Ya esta actualizado en su version mas reciente._`;
if (messager.includes('Updating')) messager = `✎ _Ocurrio un error al actualizar el bot, favor de revisar los archivos en *(npm-code_json)*_\n• _Si el error persiste, actualice la libreria *(mb_javascript)*`;
conn.reply(m.chat, messager, {quoted: m});
} catch {
try {
const status = execSync('git status --porcelain');
if (status.length > 0) {
const conflictedFiles = status
.toString()
.split('\n')
.filter(line => line.trim() !== '')
.map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('ChatBotSesion/') || line.includes('npm-debug.log')) {
return null;
}
return '*• ' + line.slice(3) + '*'});
.filter(Boolean);
if (conflictedFiles.length > 0) {
const errorMessage = `✎ _Se ha detectado mensajes mal escritos para conectar con la carpeta *(json_plugin)* al archivo *(start_plugins.html)*_`
await conn.reply(m.chat, errorMessage, {quoted: m});
}};
} catch (error) {
console.error(error);
if (error.message) {
const errorMessage2 = `\nERROR:` + error.message;
}
await conn.sendMessage(m.chat, {text: `✎ _El comando:_ *#${command}*\n• _Ha fallado, si el error continua, es mejor reportarlo al grupo de soporte._\n\n🝐 *Grupo de soporte:*\n• ${global.grupo_soporte}\n\n⫿  _Recuerda reportar comandos erroneos._`}, {quoted: m});
}}};
handler.command = /^(update|actualizar|gitpull)$/i;
handler.rowner = true;
export default handler;
