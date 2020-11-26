// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const uname=[]
const newUsername = array.forEach((value)=>{

    uname.push(value.username+'!');

});
console.log(uname);

//Create an array using map that has all the usernames with a "? to each of the usernames

const newMap = array.map(user=>{
    let {username} =user;
    return username+'?';
});
console.log(newMap);

//Filter the array to only include users who are on team: red


// const newFilter = array.filter((user)=>{

//   let {team} = user;
//   return team ===`red`;

// }); 

const newFilter = array.filter( (user)=> user.team==="red" );

console.log(newFilter);

//Find out the total score of all users using reduce

const newScore = array.reduce((sum,user)=>{

  return sum+user.score;

},0);
console.log(newScore);

// (1), what is the value of i? //index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

const newArray1 = array.map((num,i)=>{
  return num*2
});


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


const newList = array.map((user)=>{
  let {username, team, score, items} = user
  items =  items.map(it=>it+'!');
  return {username,team,score,items};
}); 
console.log(newList)