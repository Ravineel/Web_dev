const fs  = require('fs');

fs.readFile('./hello.txt',(err,data)=>{

    if(err){
        console.log('errrrorrr');
    }
    console.log(data.toString());

})