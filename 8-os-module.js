const os =require('os');


const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentos);