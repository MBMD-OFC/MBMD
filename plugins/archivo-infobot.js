let handler = async (m, { usedPrefix, command, text, args,  }) => {
let user = global.db.data.users[m.sender];

if (command == 'actividad') {
let uptime = await process.uptime();
let mbmd = `
*\`TIEMPO ACTIVO:\`*
- ${rTime(uptime)}
`;
conn.sendMessage(m.chat, {text: mbmd}, {quoted: m});
 };

if (command == 'adquirir') {
let mbmd = `
❪ ✎ › *¿Como adquirir el bot?*
- _Lo puedes hacer de manera facil._

1. _Contacta al creador o asistente._
2. _Preguntar sobre como adquirir el bot._
3. _Se te dara informacion acerca del asunto._

- _Puedes hacer tus consultas aqui tambien._
• ${ceotg}`;
conn.sendMessage(m.chat, {text: mbmd}, {quoted: m});
 };

if (command == 'creador') {
let creador = `
✎ _Red de comunicacion._

≽ *Telegram:*
- ${global.ceotg}

*NOTA:*
> _Solo se aceptan temas serios, cualquier otra tema que no incluya la referencia del proyecto o venta sera ignorada._`;
conn.sendFile(m.chat, imagens, 'mbmd.jpg', creador, m, { quoted: m });
};

if (command == 'cuentas') {
let cuentas = `
✎ _Cuentas principales de MBMD._

≽ *Telegram:*
- ${global.ceotg}

≽ *Canal telegram:*
- ${global.tgcanal}

≽ *Instagram:*
- ${global.ceoig}

≽ *Canal WA:*
- ${global.canalwa}
`;
await conn.sendMessage(m.chat, { text: cuentas }, { quoted: m });
};

if (command == 'donar' || command == 'pagar') {
let donar = `
✎ _Estas son las transferencias disponibles para la donacion o pago._
- _Si posees otro tipo de metodo, puedes usar el comando *#otro* para contactar a un asistente._


> *PayPal:*
- https://www.paypal.me/mbmdoficial


> *Mercado Pago:*
- *Alias:* mbmd.principal
- *CVU:* 0000003100025569208333


> *DolarApp:*
- *Alias:* mbmd.ofc.dolarapp
- *CVU:* 0000069704303965000655
`;
await conn.sendMessage(m.chat, { text: donar }, { quoted: m });
};

if (command == 'grupos' || command == 'comunidad') {
let grupos = `
✎ _Grupo, Comunidad y Canal principal de MBMD._

*MBMD | COMMUNITY:*
- ${global.grupo1}


*MBMD | GENERAL:*
- ${global.grupo2}


*MBMD | CANAL:*
- ${global.canalwa}
`;
await conn.sendMessage(m.chat, { text: grupos }, { quoted: m });
};

if (command == 'info_reg' || command == 'info_registro') {
let info = `
*\`INFORMACION DE REGISTRO\`*

- _Los usuarios que se registren, pueden tener acceso a las demas funciones ocultas del proyecto._

- _Esto para hacer que el bot sea seguro y confiable, al tener personas registradas en el._

- _Ademas, esto servira para revisar las acciones de cada usuario, de acuerdo con las políticas de seguridad en el proyecto, sea toxicidad, etc._
• _Tambien es necesario que se registren por que de alguna o otra manera, pueden no ser guardados automaticamente o no ser conocidos y perderan sus recursos en el proyecto por falta de registro._
_Esto para impedir perdidas de recursos, ganancias, o otras cosas._

> ¿Quieres registrarte?
_Usa el comando:_ *#reg* o *#registrar*`;
await conn.sendMessage(m.chat, { text: info }, { quoted: m });
}};

handler.command = ['actividad', 'adquirir', 'creador', 'cuentas', 'donar', 'pagar', 'grupos', 'comunidad', 'info_reg', 'info_registro'];
export default handler

const dd = new Date(new Date + 3600000);
const time = dd.toLocaleString('en-US', { 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true 
    });
function rTime(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dias, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};



