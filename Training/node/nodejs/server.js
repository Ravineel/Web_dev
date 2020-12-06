// const http = require('http');

// const server = http.createServer((request,response)=>{
    
//     console.log('method ', request.method)
//     console.log('url ', request.url)

//     const user = {
//         name:'John',
//         hobby:'Skatting'
//     }

//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));

// })

// server.listen(2000);


const express = require('express');

const app = express()


app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/:id',(req,res)=>{

    // console.log(req.query);
    // req.body
    // req.headers
    console.log(req.params)
    res.status(404).send("not found ");

});



app.listen(8080);