var database =[ {
    username:"hi",
    password:"sdsd"
}];

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


function signin(user,pass){

    if (user === database[0].username && pass === database[0].password)
        {
                console.log(newsfeed);
        }
    else{
        alert("sorry, wrong username or password")
    }

}

signin(userNamePrompt,passwordPrompt);