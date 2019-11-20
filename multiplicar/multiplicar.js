// requires
const fs = require('fs');
const colors = require('colors')

let listarTabla = async(base, limite = 10) => {

    if (!Number(base)) {
        throw new Error(`La base introducida ${base} no es un número`)
    }

    if (!Number(limite)) {
        throw new Error(`El limite introducido ${limite} no es un número`)
    }

    console.log('=================='.green)
    console.log(`==Table de ${ base }==`.green)
    console.log('=================='.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${ base } no es un número`)
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            // throw err;
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}