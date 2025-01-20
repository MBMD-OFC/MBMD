import '../plugins/mbmd.js'
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 
if (chat.isBanned) return
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) {
return true; 
}

//⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿

if (/^mbcupon$/i.test(m.text)) {
await conn.sendMessage(m.chat, { text: 'Cupon: KF3LW9UH93NP38V9BMD7MBMD' }, { quoted: m })
}

//⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿⧿

if (/^(naaa)$/i.test(m.text)) {
await conn.sendButton(m.chat, 'Nosabrazamos?', '', [['Si', 'Si'], ['No', 'No']], null, null, m)
}
return !0 
}
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
