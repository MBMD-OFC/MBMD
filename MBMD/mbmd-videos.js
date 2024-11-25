const fs = require('fs')
const path = require('path')
let MBvData
try {
const MBvJsonPath = path.join(__dirname, '../MBMD/data/mbvideos.json')
MBvData = JSON.parse(fs.readFileSync(MBvJsonPath, 'utf8'))
} catch (error) {
console.log('Ocurrio un error al leer el archivo .json:', error)
MBvData = null
}
function getRandomMBvideos() {
if (!MBvData) {
console.log('No se pudo leer el archivo .json')
return null
}
try {
const randomIndex = Math.floor(Math.random() * MBvData.length)
return MBvData[randomIndex]
} catch (error) {
console.log('Ocurrio un error al seleccionar el archivo .json.')
return null
}}
export = getRandomMBvideos

/*
//Generar videos aleatorios usando el JSON con las imagenes a base de URL/LINK
const fs = require('fs')
const path = require('path')
let mbmdUrl = 'https://github.com/OFC-MBMD/MBMD'
let fileError = `No se ha encontrado la ruta de imagenes, busque en ${mbmdUrl} para buscar la ruta.`
let fullError = `Ocurrio un error inesperado al seleccionar la imagen. Comuniquese al propietario de\n\n- ${mbmdUrl}`
let MBvData

function getRandomMBvideos() {
try {
MBvData = path.join(__dirname, '..', 'MBMD', 'mbvideos')
if (!fs.existsSync(MBvData)) {
return fileError
}
const fileContent = require(MBvData)
const mbItem = fileContent[Math.floor(Math.random() * fileContent.length)]
return mbItem
} catch (error) {
return fullError
}}

export = getRandomMBvideos
*/
