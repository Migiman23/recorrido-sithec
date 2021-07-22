let datos = []
let end = false
let num2 = 0

process.stdout.write('Número de strings a ingresar: ')

process.stdin.on('data', (data) => {
    datos.push(data.toString().trim())

    if (!end) {
        if (Number(datos[0]) >= 0) {
            if (Number(datos[0]) === num2) {
                process.stdout.write('Máximo de movimientos: ')
                end = true
            } else {
                process.stdout.write('Ingresa los strings: ')
                num2++
            }
        } else {
            process.stdout.write('Es valor ingresado no es un número mayor o igual a cero')
            process.exit()
        }
    } else {
        recorrido()
    }
})

const recorrido = () => {
    let pos= []

   for(let i = 0; i < Number(datos[0]); i++) { //Recorremos el array el numero de strings ingresados
        let renglon = datos[i+1].substr(0,Number(datos[0])).split("")
        //console.log(renglon,renglon.length);

        for(let j = 0; j < renglon.length; j++) { // Recorremos a la derecha
            if(renglon[j] === '.') {
                pos.push([i,j])
            }else if(renglon[j] === '#') {
                chocaDerecha = true
            }
        }
        //console.log('pibote',pos);
    }

    //Verificamos recorrido
    let movimientos = 1
    let pibote = pos[0]
    let a

    for(let i = 1; i < pos.length; i++) {
        a = pibote
        let b = pos[i]
        if(a[0] === b[0] && b[1] === a[1]+1){
            pibote=pos[i]
            //console.log(pos[i]);
            movimientos++
        }else if(b[0] === a[0]+1 && b[1] === a[1]){
            pibote=pos[i]
           // console.log(pos[i]);
            movimientos++
        }else{
            let ant = pos[i-2]
            if(b[0] === ant[0]+1 && b[1] === ant[1]) {
                pibote=pos[i]
            }
        }
    }
    //console.log('movs: ',movimientos);
    if(movimientos === Number(datos[datos.length-1])) {
        process.stdout.write('YES')
    } else {
        process.stdout.write('NO')
    }
    process.exit()
} 