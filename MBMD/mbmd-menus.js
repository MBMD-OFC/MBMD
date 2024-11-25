const fs = require('fs')
const path = require('path')
let MBoData
try {
const MBoJsonPath = path.join(__dirname, '../MBMD/data/mbmenus.json')
MBoData = JSON.parse(fs.readFileSync(MBoJsonPath, 'utf8'))
} catch (error) {
console.log('Ocurrio un error al leer el archivo .json:', error)
MBoData = null
}
function getRandomMBmenus() {
if (!MBoData) {
console.log('No se pudo leer el archivo .json.')
return null
}
try {
const randomIndex = Math.floor(Math.random() * MBoData.length)
return MBoData[randomIndex]
} catch (error) {
console.log('Ocurrio un error al seleccionar una imagen en el .json.')
return null
}}
export = getRandomMBmenus

/*
const fs = require('fs')
const path = require('path')
let mbmdUrl = 'https://github.com/OFC-MBMD/MBMD'
let fileError = `No se ha encontrado la ruta de imagenes, busque en ${mbmdUrl} para buscar la ruta.`
let fullError = `Ocurrio un error inesperado al seleccionar la imagen. Comuniquese al propietario de\n\n- ${mbmdUrl}`
let MBoData

function getRandomMBmenus() {
try {
MBoData = path.join(__dirname, '..', 'MBMD', 'mbmenus')
if (!fs.existsSync(MBoData)) {
return fileError
}
const fileContent = require(MBoData)
const mbItem = fileContent[Math.floor(Math.random() * fileContent.length)]
return mbItem
} catch (error) {
return fullError
}}

export = getRandomMBmenus
*/
