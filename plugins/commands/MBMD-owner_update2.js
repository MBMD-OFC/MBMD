import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = `❪ ✓ › El bot ya esta actualizado a su version actual.`
if (messager.includes('Updating')) messager = `❪ ✘ › Ocurrio un error inesperado al actualizar\n\n- *ERROR:*` + stdout.toString()
conn.reply(m.chat, messager, m);
} catch {      
try {    
const status = execSync('git status --porcelain');
if (status.length > 0) {
const conflictedFiles = status
.toString()
.split('\n')
.filter(line => line.trim() !== '')
.map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('SesionConectado/') || line.includes('npm-debug.log')) {
return null;
}
return '*→ ' + line.slice(3) + '*'})
.filter(Boolean);
if (conflictedFiles.length > 0) {
const errorMessage = `❪ ✓ › El bot se tendra que actualizar manualmente, debido a que su nueva version tiene un conflicto con algunos archivos nuevos.`
await conn.reply(m.chat, errorMessage, m);  
}}
} catch (error) {
console.error(error);
if (error.message) {
const errorMessage2 = `\n❪ ✘ › Error de actualizacion:\n` + error.message;
}
await m.reply(esmsMT.bError2(usedPrefix, command)) 
}}};
handler.command = /^(update|actualizar|gitpull)$/i;
handler.rowner = true;
export default handler;
