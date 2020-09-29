var database =[ 
    {
        username:"hi",
        password:"sdsd"
    },
    {
        username:"fdf",
        password:"sdss"
    },
    {
        username:"HHHHHE",
        password:"fdfd"
    }


];

var newsfeed=[
    {
        username:"boby",
        timeline:"so tired"

    },
    {
        username:"sally",
        timeline:"so tired"
    }   

];


var userNamePrompt = prompt("Whats your username? ");
var passwordPrompt = prompt("Whats your password? ");

function isUserValid(user,pass){
    for(var i=0;i<database.length;i++ ){

        if(database[i].username === user && database[i].password === pass){
           return true;
        }
    }
    return false;

}
function signin(user,pass){

    if(isUserValid(user,pass)){

        console.log(newsfeed);
    }
else{
        alert("sorry, wrong username or password")
    }

}

signin(userNamePrompt,passwordPrompt);