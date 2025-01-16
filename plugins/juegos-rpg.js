import db from '../lib/database.js';
let handler = async (m, { args }) => {

//DEPOSITO DE FONDOS.
/*
if (command == 'dep_ars') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de *Pesos argentinos* para guardarlo en tu tarjeta._\n\n• *Por ejemplo:*\n_#dep_ars_ 3000'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '🝐 _Debe de ingresar la cantidad validad para guardarlo en tu tarjeta._\n_#dep_ars_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.money_ars);
user.money_ars -= count * 1;
user.box_ars += count * 1;
await conn.sendMessage(m.chat, (text: {`🝐 _Has depositado todo de tu *CoinBox* a tu *Tarjeta*._\n\n• *COMPROBANTE:*\n*Depositado:* ${count} pesos argentinos.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#dep_ars_ 3000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.money_ars) return conn.sendMessage(m.chat, {text: '🝐 _No tienes *Pesos argentinos* en tu *CoinBox*, has una transferencia o gana vendiendo tus proyectos o productos._'}, { quoted: m });
if (user.money_ars < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para depositar._\n\n• *\`SALDO COINBOX\`*\n» ${user.money_ars} Pesos argentinos.`}, { quoted: m });
user.money_ars -= count * 1;
user.box_ars += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has depositado_ ${count} _pesos argentinos en tu *Tarjeta*._`}, { quoted: m });
};

if (command == 'dep_soles') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de *Soles peruanos* para guardarlo en tu tarjeta._\n\n• *Por ejemplo:*\n_#dep_soles_ 3000'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '🝐 _Debe de ingresar la cantidad validad para guardarlo en tu tarjeta._\n_#dep_soles_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.money_pen);
user.meney_pen -= count * 1;
user.box_pen += count * 1;
await conn.sendMessage(m.chat, (text: {`🝐 _Has depositado todo de tu *CoinBox* a tu *Tarjeta*._\n\n• *COMPROBANTE:*\n*Depositado:* ${count} Soles peruanos.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#dep_soles_ 3000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.money_pen) return conn.sendMessage(m.chat, {text: '🝐 _No tienes *Soles peruanos* en tu *CoinBox*, has una transferencia o gana vendiendo tus proyectos o productos._'}, { quoted: m });
if (user.money_pen < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para depositar._\n\n• *\`SALDO COINBOX\`*\n» ${user.money_pen} Soles peruanos.`}, { quoted: m });
user.money_pen -= count * 1;
user.box_pen += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has depositado_ ${count} _soles peruanos en tu *BotBank*._`}, { quoted: m });
};

if (command == 'dep_mxn') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de *Pesos mexicanos* para guardarlo en tu tarjeta._\n\n• *Por ejemplo:*\n_#dep_mxn_ 200'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '🝐 _Debe de ingresar la cantidad validad para guardarlo en tu tarjeta._\n_#dep_mxn_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.money_mxn);
user.money_mxn -= count * 1;
user.box_mxn += count * 1;
await conn.sendMessage(m.chat, (text: {`🝐 _Has depositado todo de tu *CoinBox* a tu *Tarjeta*._\n\n• *COMPROBANTE:*\n*Depositado:* ${count} Pesos mexicanos.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#dep_mxn_ 200'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.money_mxn) return conn.sendMessage(m.chat, {text: '🝐 _No tienes *Pesos mexicanos* en tu *CoinBox*, has una transferencia o gana vendiendo tus proyectos o productos._'}, { quoted: m });
if (user.money_mxn < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para depositar._\n\n• *\`SALDO COINBOX\`*\n» ${user.money_mxn} Pesos mexicanos.`}, { quoted: m });
user.money_mxn -= count * 1;
user.box_mxn += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has depositado_ ${count} _pesos mexicanos en tu *BotBank*._`}, { quoted: m });
};

if (command == 'dep_usd') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de *Dolares* para guardarlo en tu tarjeta._\n\n• *Por ejemplo:*\n_#dep_usd_ 50'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '🝐 _Debe de ingresar la cantidad validad para guardarlo en tu tarjeta._\n_#dep_usd_ 50'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.money_usd);
user.money_usd -= count * 1;
user.box_usd += count * 1;
await conn.sendMessage(m.chat, (text: {`🝐 _Has depositado todo de tu *CoinBox* a tu *Tarjeta*._\n\n• *COMPROBANTE:*\n*Depositado:* ${count} Dolares.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#dep_usd_ 50'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.money_usd) return conn.sendMessage(m.chat, {text: '🝐 _No tienes *Dolares* en tu *CoinBox*, has una transferencia o gana vendiendo tus proyectos o productos._'}, { quoted: m });
if (user.money_usd < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para depositar._\n\n• *\`SALDO COINBOX\`*\n» ${user.money_usd} Dolares.`}, { quoted: m });
user.money_usd -= count * 1;
user.box_usd += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has depositado_ ${count} _dolares en tu *BotBank*._`}, { quoted: m });
};

if (command == 'dep_clp') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de *Pesos chilenos* para guardarlo en tu tarjeta._\n\n• *Por ejemplo:*\n_#dep_clp_ 75000'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '🝐 _Debe de ingresar la cantidad validad para guardarlo en tu tarjeta._\n_#dep_clp_ 75000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.money_clp);
user.money_clp -= count * 1;
user.box_clp += count * 1;
await conn.sendMessage(m.chat, (text: {`🝐 _Has depositado todo de tu *CoinBox* a tu *Tarjeta*._\n\n• *COMPROBANTE:*\n*Depositado:* ${count} Pesos chilenos.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#dep_clp_ 75000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.money_clp) return conn.sendMessage(m.chat, {text: '🝐 _No tienes *Pesos chilenos* en tu *CoinBox*, has una transferencia o gana vendiendo tus proyectos o productos._'}, { quoted: m });
if (user.money_clp < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para depositar._\n\n• *\`SALDO COINBOX\`*\n» ${user.money_clp} Pesos chilenos.`}, { quoted: m });
user.money_clp -= count * 1;
user.box_clp += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has depositado_ ${count} _pesos chilenos en tu *BotBank*._`}, { quoted: m });
};

if (command == 'dep_cop') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de *Pesos colombianos* para guardarlo en tu tarjeta._\n\n• *Por ejemplo:*\n_#dep_cop_ 50000'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '🝐 _Debe de ingresar la cantidad validad para guardarlo en tu tarjeta._\n_#dep_cop_ 50000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.money_cop);
user.money_cop -= count * 1;
user.box_cop += count * 1;
await conn.sendMessage(m.chat, (text: {`🝐 _Has depositado todo de tu *CoinBox* a tu *Tarjeta*._\n\n• *COMPROBANTE:*\n*Depositado:* ${count} Pesos colombianos.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#dep_cop_ 50000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.money_cop) return conn.sendMessage(m.chat, {text: '🝐 _No tienes *Pesos colombianos* en tu *CoinBox*, has una transferencia o gana vendiendo tus proyectos o productos._'}, { quoted: m });
if (user.money_cop < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para depositar._\n\n• *\`SALDO COINBOX\`*\n» ${user.money_cop} Pesos colombianos.`}, { quoted: m });
user.money_cop -= count * 1;
user.box_cop += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has depositado_ ${count} _pesos colombianos en tu *BotBank*._`}, { quoted: m });
};

//-------------------------------
//RETIRO DE FONDOS.

if (command == 'wd_ars') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de ** que quieras retirar en el *BotBank*_\n\n• *Por ejemplo:*\n_#wd_ars_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank);
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, { text: `🝐 _Has retirado todo tu saldo en *BotBank*_\n\n• *\`COMPROBANTE:\`*\n*Retirado:* ${count}` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#wd__ 3000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank) return conn.sendMessage(m.chat, {text: '🝐 _No tienes ** en *BotBank*, realiza una actividad en tu *CoinBox* vendiendo proyectos o productos para despues transferir tu saldo en *BotBank* para guardar._'}, { quoted: m });
if (user.bank < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para retirarlo en *BotBank*._\n\n• *\`CAJERO BOTBANK\`*\n» ${user.}`}, { quoted: m });
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has retirado_ ${count} _** en *BotBank*, ahora estaran en tu cartera *CoinBox*._`}, { quoted: m });
};

if (command == 'wd_clp') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de ** que quieras retirar en el *BotBank*_\n\n• *Por ejemplo:*\n_#wd_ars_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank);
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, { text: `🝐 _Has retirado todo tu saldo en *BotBank*_\n\n• *\`COMPROBANTE:\`*\n*Retirado:* ${count}` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#wd__ 3000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank) return conn.sendMessage(m.chat, {text: '🝐 _No tienes ** en *BotBank*, realiza una actividad en tu *CoinBox* vendiendo proyectos o productos para despues transferir tu saldo en *BotBank* para guardar._'}, { quoted: m });
if (user.bank < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para retirarlo en *BotBank*._\n\n• *\`CAJERO BOTBANK\`*\n» ${user.}`}, { quoted: m });
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has retirado_ ${count} _** en *BotBank*, ahora estaran en tu cartera *CoinBox*._`}, { quoted: m });
};

if (command == 'wd_soles') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de ** que quieras retirar en el *BotBank*_\n\n• *Por ejemplo:*\n_#wd_ars_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank);
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, { text: `🝐 _Has retirado todo tu saldo en *BotBank*_\n\n• *\`COMPROBANTE:\`*\n*Retirado:* ${count}` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#wd__ 3000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank) return conn.sendMessage(m.chat, {text: '🝐 _No tienes ** en *BotBank*, realiza una actividad en tu *CoinBox* vendiendo proyectos o productos para despues transferir tu saldo en *BotBank* para guardar._'}, { quoted: m });
if (user.bank < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para retirarlo en *BotBank*._\n\n• *\`CAJERO BOTBANK\`*\n» ${user.}`}, { quoted: m });
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has retirado_ ${count} _** en *BotBank*, ahora estaran en tu cartera *CoinBox*._`}, { quoted: m });
};

if (command == 'wd_cop') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de ** que quieras retirar en el *BotBank*_\n\n• *Por ejemplo:*\n_#wd_ars_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank);
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, { text: `🝐 _Has retirado todo tu saldo en *BotBank*_\n\n• *\`COMPROBANTE:\`*\n*Retirado:* ${count}` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#wd__ 3000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank) return conn.sendMessage(m.chat, {text: '🝐 _No tienes ** en *BotBank*, realiza una actividad en tu *CoinBox* vendiendo proyectos o productos para despues transferir tu saldo en *BotBank* para guardar._'}, { quoted: m });
if (user.bank < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para retirarlo en *BotBank*._\n\n• *\`CAJERO BOTBANK\`*\n» ${user.}`}, { quoted: m });
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has retirado_ ${count} _** en *BotBank*, ahora estaran en tu cartera *CoinBox*._`}, { quoted: m });
};

if (command == 'wd_mxn') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de ** que quieras retirar en el *BotBank*_\n\n• *Por ejemplo:*\n_#wd_ars_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank);
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, { text: `🝐 _Has retirado todo tu saldo en *BotBank*_\n\n• *\`COMPROBANTE:\`*\n*Retirado:* ${count}` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#wd__ 3000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank) return conn.sendMessage(m.chat, {text: '🝐 _No tienes ** en *BotBank*, realiza una actividad en tu *CoinBox* vendiendo proyectos o productos para despues transferir tu saldo en *BotBank* para guardar._'}, { quoted: m });
if (user.bank < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para retirarlo en *BotBank*._\n\n• *\`CAJERO BOTBANK\`*\n» ${user.}`}, { quoted: m });
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has retirado_ ${count} _** en *BotBank*, ahora estaran en tu cartera *CoinBox*._`}, { quoted: m });
};

if (command == 'wd_usd') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '🝐 _Ingrese la cantidad de ** que quieras retirar en el *BotBank*_\n\n• *Por ejemplo:*\n_#wd_ars_ 3000'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank);
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, { text: `🝐 _Has retirado todo tu saldo en *BotBank*_\n\n• *\`COMPROBANTE:\`*\n*Retirado:* ${count}` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '🝐 _No se aceptan simbolos, puntos o letras, solo se aceptan numeros._\n\n• *Por ejemplo:*\n_#wd__ 3000'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank) return conn.sendMessage(m.chat, {text: '🝐 _No tienes ** en *BotBank*, realiza una actividad en tu *CoinBox* vendiendo proyectos o productos para despues transferir tu saldo en *BotBank* para guardar._'}, { quoted: m });
if (user.bank < count) return conn.sendMessage(m.chat, {text: `🝐 _No tienes esa cantidad para retirarlo en *BotBank*._\n\n• *\`CAJERO BOTBANK\`*\n» ${user.}`}, { quoted: m });
user.bank -= count * 1;
user.cookies += count * 1;
await conn.sendMessage(m.chat, {text: `🝐 _Has retirado_ ${count} _** en *BotBank*, ahora estaran en tu cartera *CoinBox*._`}, { quoted: m });
};

*/

//--------------------------
//DEPOSITO RPG

if (command == 'd_boletos') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '⪩ _Ingrese la cantidad de *Boletos* para guardarlo en el banco._\n\n• *Por ejemplo:*\n_#d_boletos_ 30'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '⪩ _Debe de ingresar la cantidad validad para guardarlo en tu banco._\n\n• *Por ejemplo:*\n_#d_boletos_ 30'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.boletos);
user.boletos -= count * 1;
user.bank_boletos += count * 1;
await conn.sendMessage(m.chat, (text: {`✦ Has depositado todos tus *Boletos* en el banco.\n\n> ❒ *Boletos depositados:*\n» ${count} Boletos.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '⪩ _Solo se aceptan numeros, nada de letras ni simbolos._\n\n• *Por ejemplo:*\n_#d_boletos_ 30'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.boletos) return conn.sendMessage(m.chat, {text: '✘ No tienes *Boletos* en tu cartera para realizar este deposito.'}, { quoted: m });
if (user.boletos < count) return conn.sendMessage(m.chat, {text: `⪩ _No tienes esa cantidad de *Boletos* para depositar._\n\n> ❒ *Cartera:*\n» ${user.boletos} Boletos.`}, { quoted: m });
user.boletos -= count * 1;
user.bank_boletos += count * 1;
await conn.sendMessage(m.chat, {text: `✦ Has depositado tus *boletos* en el banco.\n\n> ❒ *Boletos depositados:*\n» ${count} Boletos.`}, { quoted: m });
};

if (command == 'd_money') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '⪩ _Ingrese la cantidad de *monedas* para guardarlo en el banco._\n\n• *Por ejemplo:*\n_#d_money_ 30'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '⪩ _Debe de ingresar la cantidad validad para guardarlo en tu banco._\n\n• *Por ejemplo:*\n_#d_money_ 30'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.money);
user.money -= count * 1;
user.bank_money += count * 1;
await conn.sendMessage(m.chat, (text: {`✦ Has depositado todos tus *Monedas* en el banco.\n\n> ❒ *Monedas depositados:*\n» ${count} Monedas.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '⪩ _Solo se aceptan numeros, nada de letras ni simbolos._\n\n• *Por ejemplo:*\n_#d_money_ 30'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.money) return conn.sendMessage(m.chat, {text: '✘ No tienes *Monedas* en tu cartera para realizar este deposito.'}, { quoted: m });
if (user.money < count) return conn.sendMessage(m.chat, {text: `⪩ _No tienes esa cantidad de *Monedas* para depositar._\n\n> ❒ *Cartera:*\n» ${user.money} Monedas.`}, { quoted: m });
user.money -= count * 1;
user.bank_money += count * 1;
await conn.sendMessage(m.chat, {text: `✦ Has depositado tus *monedas* en el banco.\n\n> ❒ *Monedas depositados:*\n» ${count} Monedas.`}, { quoted: m });
};

if (command == 'd_bcoin') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '⪩ _Ingrese la cantidad de *MBcoins* para guardarlo en el banco._\n\n• *Por ejemplo:*\n_#d_bcoin_ 30'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '⪩ _Debe de ingresar la cantidad validad para guardarlo en tu banco._\n\n• *Por ejemplo:*\n_#d_bcoin_ 30'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.mbcoins);
user.mbcoins -= count * 1;
user.bank_mbcoins += count * 1;
await conn.sendMessage(m.chat, (text: {`✦ Has depositado todos tus *MBcoins* en el banco.\n\n> ❒ *MBcoins depositados:*\n» ${count} MBcoins.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '⪩ _Solo se aceptan numeros, nada de letras ni simbolos._\n\n• *Por ejemplo:*\n_#d_bcoin_ 30'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.mbcoins) return conn.sendMessage(m.chat, {text: '✘ No tienes *MBcoins* en tu cartera para realizar este deposito.'}, { quoted: m });
if (user.mbcoins < count) return conn.sendMessage(m.chat, {text: `⪩ _No tienes esa cantidad de *MBcoins* para depositar._\n\n> ❒ *Cartera:*\n» ${user.boletos} MBcoins.`}, { quoted: m });
user.mbcoins -= count * 1;
user.bank_mbcoins += count * 1;
await conn.sendMessage(m.chat, {text: `✦ Has depositado tus *MBcoins* en el banco.\n\n> ❒ *MBcoins depositados:*\n» ${count} MBcoins.`}, { quoted: m });
};

if (command == 'd_dmt') {
let user = global.db.data.users[m.sender];
if (!args[0]) return conn.sendMessage(m.chat, {text: '⪩ _Ingrese la cantidad de *Diamantes* para guardarlo en el banco._\n\n• *Por ejemplo:*\n_#d_dmt_ 30'}, { quoted: m });
if ((args[0]) < 1) return conn.sendMessage(m.chat, {text: '⪩ _Debe de ingresar la cantidad validad para guardarlo en tu banco._\n\n• *Por ejemplo:*\n_#d_dmt_ 30'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.diamantes);
user.diamantes -= count * 1;
user.bank_limit += count * 1;
await conn.sendMessage(m.chat, (text: {`✦ Has depositado todos tus *Diamantes* en el banco.\n\n> ❒ *Diamantes depositados:*\n» ${count} Diamantes.`}, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '⪩ _Solo se aceptan numeros, nada de letras ni simbolos._\n\n• *Por ejemplo:*\n_#d_dmt_ 30'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.diamantes) return conn.sendMessage(m.chat, {text: '✘ No tienes *Diamantes* en tu cartera para realizar este deposito.'}, { quoted: m });
if (user.diamantes < count) return conn.sendMessage(m.chat, {text: `⪩ _No tienes esa cantidad de *Diamantes* para depositar._\n\n> ❒ *Cartera:*\n» ${user.boletos} Diamantes.`}, { quoted: m });
user.diamantes -= count * 1;
user.bank_limit += count * 1;
await conn.sendMessage(m.chat, {text: `✦ Has depositado tus *Diamantes* en el banco.\n\n> ❒ *Diamantes depositados:*\n» ${count} Diamantes.`}, { quoted: m });
};

//------------------
//Retirar recursos.

if (command == 'r_boletos') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '⪩ _Ingrese la cantidad de *Boletos* que quieras retirar en el *Banco.*_\n\n• *Por ejemplo:*\n_#r_boletos_ 30'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank_boletos);
user.bank_boletos -= count * 1;
user.boletos += count * 1;
await conn.sendMessage(m.chat, { text: `✦ Has retirado todos tus *Boletos* en el banco.\n\n> ❒ *Boletos retirados:*\n» ${count} Boletos.` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '⪩ _Solo se aceptan numeros, nada de letras ni simbolos._\n\n• *Por ejemplo:*\n_#r_boletos_ 30'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank_boletos) return conn.sendMessage(m.chat, {text: '✘ No tienes *Boletos* en el banco, deposita tus *Boletos* en el banco para retirarlos despues.'}, { quoted: m });
if (user.bank_boletos < count) return conn.sendMessage(m.chat, {text: `⪩ No tienes esa cantidad de *Boletos* para retirar en el banco.\n\n> ❒ *Banco de boletos:*\n» ${user.bank_boletos}`}, { quoted: m });
user.bank_boletos -= count * 1;
user.boletos += count * 1;
await conn.sendMessage(m.chat, {text: `✦ Has retirado tus *Boletos* en el banco.\n\n> ❒ *Boletos retirados:*\n» ${count} Boletos.`}, { quoted: m });
};

if (command == 'r_money') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '⪩ _Ingrese la cantidad de *Monedas* que quieras retirar en el *Banco.*_\n\n• *Por ejemplo:*\n_#r_money_ 30'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank_money);
user.bank_money -= count * 1;
user.money += count * 1;
await conn.sendMessage(m.chat, { text: `✦ Has retirado todos tus *Monedas* en el banco.\n\n> ❒ *Monedas retirados:*\n» ${count} Monedas.` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '⪩ _Solo se aceptan numeros, nada de letras ni simbolos._\n\n• *Por ejemplo:*\n_#r_money_ 30'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank_money) return conn.sendMessage(m.chat, {text: '✘ No tienes *Monedas* en el banco, deposita tus *Monedas* en el banco para retirarlos despues.'}, { quoted: m });
if (user.bank_money < count) return conn.sendMessage(m.chat, {text: `⪩ No tienes esa cantidad de *Monedas* para retirar en el banco.\n\n> ❒ *Banco de monedas:*\n» ${user.bank_money}`}, { quoted: m });
user.bank_money -= count * 1;
user.money += count * 1;
await conn.sendMessage(m.chat, {text: `✦ Has retirado tus *Monedas* en el banco.\n\n> ❒ *Monedas retirados:*\n» ${count} Monedas.`}, { quoted: m });
};

if (command == 'r_bcoin') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '⪩ _Ingrese la cantidad de *MBcoins* que quieras retirar en el *Banco.*_\n\n• *Por ejemplo:*\n_#r_bcoin_ 30'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank_mbcoins);
user.bank_mbcoins -= count * 1;
user.mbcoins += count * 1;
await conn.sendMessage(m.chat, { text: `✦ Has retirado todos tus *MBcoins* en el banco.\n\n> ❒ *MBcoins retirados:*\n» ${count} MBcoins.` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '⪩ _Solo se aceptan numeros, nada de letras ni simbolos._\n\n• *Por ejemplo:*\n_#r_bcoin_ 30'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank_mbcoins) return conn.sendMessage(m.chat, {text: '✘ No tienes *MBcoins* en el banco, deposita tus *MBcoins* en el banco para retirarlos despues.'}, { quoted: m });
if (user.bank_mbcoins < count) return conn.sendMessage(m.chat, {text: `⪩ No tienes esa cantidad de *MBcoins* para retirar en el banco.\n\n> ❒ *Banco de mbcoins:*\n» ${user.bank_mbcoins}`}, { quoted: m });
user.bank_mbcoins -= count * 1;
user.mbcoins += count * 1;
await conn.sendMessage(m.chat, {text: `✦ Has retirado tus *MBcoins* en el banco.\n\n> ❒ *MBcoins retirados:*\n» ${count} MBcoins.`}, { quoted: m });
};

if (command == 'r_dmt') {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: '⪩ _Ingrese la cantidad de *Diamantes* que quieras retirar en el *Banco.*_\n\n• *Por ejemplo:*\n_#r_dmt_ 30'}, { quoted: m });
if (args[0] == 'all') {
let count = parseInt(user.bank_limit);
user.bank_limit -= count * 1;
user.diamantes += count * 1;
await conn.sendMessage(m.chat, { text: `✦ Has retirado todos tus *Diamantes* en el banco.\n\n> ❒ *Diamantes retirados:*\n» ${count} Diamantes.` }, { quoted: m });
return !0;
};
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: '⪩ _Solo se aceptan numeros, nada de letras ni simbolos._\n\n• *Por ejemplo:*\n_#r_dmt_ 30'}, { quoted: m });
let count = parseInt(args[0]);
if (!user.bank_limit) return conn.sendMessage(m.chat, {text: '✘ No tienes *Diamantes* en el banco, deposita tus *Diamantes* en el banco para retirarlos despues.'}, { quoted: m });
if (user.bank_limit < count) return conn.sendMessage(m.chat, {text: `⪩ No tienes esa cantidad de *Diamantes* para retirar en el banco.\n\n> ❒ *Banco de diamantes:*\n» ${user.bank_limit}`}, { quoted: m });
user.bank_limit -= count * 1;
user.diamantes += count * 1;
await conn.sendMessage(m.chat, {text: `✦ Has retirado tus *Diamantes* en el banco.\n\n> ❒ *Diamantes retirados:*\n» ${count} Diamantes.`}, { quoted: m });
};

if (command == 'cartera') {
let recursos = global.db.data.users[m.sender];
let cartera = `🜲 *R E C U R S O S* 🜲


⟡ *TU CARTERA:*
╭─────────────۰
│⊹ ${recursos.boletos} *Boletos.*
│⊹ ${recursos.money} *Monedas.*
│⊹ ${recursos.mbcoins} *MBcoins.*
│⊹ ${recursos.diamantes} *Diamantes.*
╰─────────────۰

⟡ *TU BANCO:*
╭─────────────۰
│⊹ ${recursos.bank_boletos} *Boletos.*
│⊹ ${recursos.bank_money} *Monedas.*
│⊹ ${recursos.bank_mbcoins} *MBcoins.*
│⊹ ${recursos.bank_limit} *Diamantes.*
╰─────────────۰
`.trim();
await conn.sendMessage(m.chat, { text: cartera }, { quoted: m });
};

};
handler.command = [
"d_boletos",
"d_money",
"d_dmt",
"d_bcoin",
"r_boletos",
"r_money",
"r_bcoin",
"r_dmt",
"cartera"
];
export default handler;