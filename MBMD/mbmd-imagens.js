const fs = require('fs')
const path = require('path')
let MBsData
try {
const MBsJsonPath = path.join(__dirname, '../MBMD/data/mbimagens.json')
MBsData = JSON.parse(fs.readFileSync(MBsJsonPath, 'utf8'))
} catch (error) {
console.log('Ocurrio un error al leer el archivo .json:', error)
MBsData = null
}
function getRandomMBimagens() {
if (!MBsData) {
console.log('No se ha podido leer el archivo .json.')
return null
}
try {
const randomIndex = Math.floor(Math.random() * MBsData.length)
return MBsData[randomIndex]
} catch (error) {
console.log('Ocurrio un error al seleccionar una imagen.')
return null
}}
export = getRandomMBimagens

/*
//Generar imagenes aleatorias.
const fs = require('fs')
const path = require('path')
let mbmdUrl = 'https://github.com/OFC-MBMD/MBMD'
let fileError = `No se ha encontrado la ruta de imagenes, busque en ${mbmdUrl} para buscar la ruta.`
let fullError = `Ocurrio un error inesperado al seleccionar la imagen. Comuniquese al propietario de\n\n- ${mbmdUrl}`
let MBsData

function getRandomMBimagens() {
try {
MBsData = path.join(__dirname, '..', 'MBMD', 'mbimagens')
if (!fs.existsSync(MBsData)) {
return fileError
}
const fileContent = require(MBsData)
const mbItem = fileContent[Math.floor(Math.random() * fileContent.length)]
return mbItem
} catch (error) {
return fullError
}}

export = getRandomMBimagens
*/

