const argv = require('./config/yargs').argv;

const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar.js');


console.log(argv);
let base = argv.base;
let limite = argv.limite;
let accion = argv._[0];


switch (accion) {
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`La tabla en base ${base} se ha creado correctamente en tablas/${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarArchivo(base, limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;

    default:
        console.log('No se encuentra una accion para el comando');
        break;
}