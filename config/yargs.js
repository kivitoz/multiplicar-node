const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea en disco la tabla de multiplicar', opts)
    .help().argv


module.exports = {
    argv
}