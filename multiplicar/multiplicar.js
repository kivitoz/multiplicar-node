const fs = require('fs');
let colors = require('colors');

let listarArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base enviada para listar la tabla no es un número entero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        resolve(data.yellow);
    });

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base enviada para crear la tabla no es un número entero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }


        fs.mkdir('tablas', { recursive: true }, (err) => {
            if (err) {
                resolve(err);
                return;
            }
        });

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
                return;
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });

}


module.exports = {
    crearArchivo,
    listarArchivo
}