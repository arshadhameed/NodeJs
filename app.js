// const os =require('os');


// const currentos={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentos);


// const path=require('path');

// const filePath=path.join('/content','subfolder','text.txt');
// console.log(filePath);

// const base=path.basename(filePath);
// console.log(base);

// const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
// console.log(absolute);

// const {readFile,writeFile}=require('fs')

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return

//     }
//     console.log(result);
// })

// readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })

    const http=require('http')
    const server=http.createServer((req,res)=>{
        console.log(res);
        res.write('welcome to our home page')
        res.end();

    })

    server.listen(5000)