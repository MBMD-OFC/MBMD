const fs = require('fs')
const path = require('path')
let MBaData
try {
const MBaJsonPath = path.join(__dirname, '../MBMD/data/mbimgs.json')
MBaData = JSON.parse(fs.readFileSync(MBaJsonPath, 'utf8'))
} catch (error) {
console.log('Ocurrio un error al leer el archivo .json:', error)
MBaData = null
}
function getRandomMBimgs() {
if (!MBaData) {
console.log('No se ha podido leer el archivo .json.')
return null
}
try {
const randomIndex = Math.floor(Math.random() * MBaData.length)
return MBaData[randomIndex]
} catch (error) {
console.log('Ocurrio un error al seleccionar una imagen.')
return null
}}
export = getRandomMBimgs

/*
const fs = require('fs')
const path = require('path')
let mbmdUrl = 'https://github.com/OFC-MBMD/MBMD'
let fileError = `No se ha encontrado la ruta de imagenes, busque en ${mbmdUrl} para buscar la ruta.`
let fullError = `Ocurrio un error inesperado al seleccionar la imagen. Comuniquese al propietario de\n\n- ${mbmdUrl}`
let MBaData

function getRandomMBimgs() {
try {
MBaData = path.join(__dirname, '..', 'MBMD', 'mbimgs')
if (!fs.existsSync(MBaData)) {
return fileError
}
const fileContent = require(MBaData)
const mbItem = fileContent[Math.floor(Math.random() * fileContent.length)]
return mbItem
} catch (error) {
return fullError
}}

export = getRandomMBimgs
*/
