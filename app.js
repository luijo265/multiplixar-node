// const multiplicar = require('./multiplicar/multiplicar')
// requires
const argv = require('./config/yargs').argv
const colors = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(console.log)
        break;

    case 'crear':
        console.log(argv)
        let theme = colors.red;
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${theme(archivo)}`))
            .catch(console.log)
        break;

    default:
        console.log('Comando no reconocido')
        break;
}
// Argumentos enviados en consola
// console.log(process.argv)
// let { argv: argv2 } = process

// console.log(argv)
// console.log(argv.b)
// console.log(argv.limite)

// let parametros = argv[2]
// let base = parametros.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(console.log)