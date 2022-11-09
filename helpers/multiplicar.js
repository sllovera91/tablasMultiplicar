const fs = require('fs')

const crearArchivoTabla = async( base = 5, listar = false, hasta = 10 ) => {


    let  salida = '';

    try {

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('====================')
            console.log(  'Tabla del', base   )
            console.log('====================')
            console.log(salida.rainbow)
        }
            fs.writeFileSync( `./salida/tabla del ${base}`, salida );
            return `Tabla de ${base}.txt creada`
        
    } catch (error) {
        throw Err
        console.log(error)
    }
    

  
}

module.exports = {crearArchivoTabla}