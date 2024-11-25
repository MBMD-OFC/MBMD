import os from 'os'
import util from 'util'
import ws from 'ws';
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = mbmdImagens
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let old = performance.now()
let neww = performance.now()
let mbmdSubs = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])]
let speed = neww - old
let info = `
*INFORMACION DEL BOT*
· · ──────────────── · ·
⪧ *Sub-Bots:* ${mbmdSubs.length}

❒ *Nombre:* ${wm}
❒ *Version:* ${vs}
❒ *Actividad:* ${uptime}
❒ *Prefijo:* Multiple
❒ *Velocidad:* ${speed}

⧐ *Chats privados:* ${chats.length - groups.length}
⧐ *Chats Grupales:* ${groups.length} 
⧐ *Chats en total:* ${chats.length}
⧐ *Registrados:* ${totalreg} 
`
await conn.reply(m.chat, info, m)
//await conn.sendButton(m.chat, info, wm, pp, [
//[esmsMT.bnGrupos(), '/gruposofc'],
//[esmsMT.bnCuentas(), '.cuentasofc']], null, [
//[esmsMT.bnMBMD(), `${md}`]], fkontak)
}
handler.command = /^(infobot|informacion|infombmd)$/i
export default handler
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
