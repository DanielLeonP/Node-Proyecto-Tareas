const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('=========================='.red);
        console.log('Menu'.blue);
        console.log('==========================\n'.red);


        console.log(`${'1.'.green} Crear una tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar una tarea`);
        console.log(`${'7.'.green} Salir\n`);

        const readLIne = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLIne.question('Seleccione una opción: ', (opt) => {
            // console.log({ opt });
            readLIne.close();
            resolve(opt);
        });
    });





}

const pausa = () => {
    return new Promise(resolve => {
        const readLIne = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLIne.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt) => {
            // console.log({ opt });
            readLIne.close();
            resolve();
        });
    })

}
module.exports = {
    mostrarMenu,
    pausa
}