const path = require('path');

module.exports = {
    entry: [
        './js/app.js',
        './js/form-validation.js',
    ]
}


// Los loaders son una especia de plugin para que webpack pueda entender otro tipo de archivos
// Test -> Archivos a leer y formato a leer 
// Use -> Dependencias que se instalan para que puedan leer y traducir 
// Style loager y css loader para entender el css 