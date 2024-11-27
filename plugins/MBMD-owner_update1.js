import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'MBMD-OFC';
const repo = 'MBMD';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `❪ ✓ › El repositorio se ha actualizado correctamente.` }, { quoted: m })
   } 
  } catch (error) {
    await m.reply(`❪ ✘ › Ocurrio un error inesperado al verificar el repositorio.`, error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(update2)/i
handler.rowner = true
export default handler
