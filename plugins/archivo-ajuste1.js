import axios from 'axios';
var handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.sendMessage(m.chat, {text: '✎ _Ingrese el comando y escriba el nombre del usuario en GitHub._\n\n- *Por ejemeplo:*\n*#usergit* Lol-human'}, {quoted: m});
try {
await conn.sendMessage(m.chat, {text: `Buscando, espere un momento...`}, { quoted: m });
let request = await githubstalk(text);
let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request;
let thumb = await (profile_pic);
let encontrado = `
*Usuario:* ${username}
*Biografía:* ⪩ ${bio}
*Compañía:* ⪩ ${company}
*Correo electrónico:* ⪩ ${email}
*R. publicos:* ⪩ ${public_repo}
*Seguidor:* ⪩ ${followers}
*Siguidores:* ⪩ ${following}
*Blog:* ⪩ ${blog}
*Ubicación:* ⪩ ${location}`;
await conn.sendFile(m.chat, logogit, 'githubstalk.jpg', encontrado, {quoted: m});
} catch (e) {
await conn.sendMessage(m.chat, {text: `『 *ERROR* 』\n✎ _No fue posible acceder, reporta el error usando *#reporte._`, edit: key});
console.log(`『 *ERROR* 』\n✎ _No se han encontrado resultados, intentalo de nuevo por favor._`);
console.log(e)}};
handler.command = /^(usergit)$/i;
export default handler;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function githubstalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let hasil = {
                username: data.login,
                nickname: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                ceated_at: data.created_at,
                updated_at: data.updated_at
            }
            resolve(hasil)
        })
    })
};
            
