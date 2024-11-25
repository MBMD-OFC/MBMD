let handler = async (m, { conn, command, usedPrefix }) => {
let pp = mbmdImagens
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
✎ *BOT:* MBMD
✎ *VERSION:* ${vs}
✎ *FABRICA:* MTS

✦ *CREADOR:* MBMD
✦ *ASISTENCIA:* Ramon ${asistencia}

⩽⩾ *INTERACCION:* ${global.opts['self'] ? 'Chat Privado' : 'Chat Grupal'}
⩽⩾ *ACTIVIDAD:* ${uptime}
⩽⩾ *USUARIOS:* ${Object.keys(global.db.data.users).length} 
⩽⩾ *CHATS BANEADOS:* ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
⩽⩾ *USUARIOS BANEADOS:* ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}`
await conn.reply(m.chat, estado, m)
//await conn.sendButton(m.chat, estado, wm, pp, [[esmsMT.bnGrupos(), '#gruposofc'], [esmsMT.bnCuentas(), '#cuentasofc']], null, null, m)
}
handler.command = /^(estado|status|estate|state|heygata|stado|stats|botstat(us)?)$/i
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
