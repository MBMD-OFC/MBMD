let media = mbmdImagens
let handler = async (m, { conn, command }) => {
let cuentas = `
> *CUENTAS PRINCIPALES*
- _Si tienes dudas, puedes contactarme en una de estas cuentas._
- _Tambien sigueme para mas novedades._


*# REDES SOCIALES #*
✎ *FACEBOOK:*
𔓕 ${fb}

✎ *INSTAGRAM:*
𔓕 ${instagram}

✎ *TWITTER:*
𔓕 ${twitter}


*# CONTACTOS #*
✎ *CORREO:*
𔓕 ${correo}

✎ *CREADOR:*
𔓕 ${creador}

✎ *ASISTENCIA:*
𔓕 ${asistencia}


*# BASICOS #*
✎ *PAYPAL:*
𔓕 ${paypal}

✎ *KO - FI:*
𔓕 ${cafe}

✎ *ATOMBIO:*
𔓕 ${atombio}`
conn.sendFile(m.chat, mbmdImagens, 'mbmd.jpg', cuentas, fkontak, m)}
handler.command = /^cuentas|cuentasofc|cuentasmb|cuentasmd|cuentasmbmd$/i
export default handler
