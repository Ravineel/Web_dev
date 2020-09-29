var todos=[
    "clean room",
    "brush teeth",
    "exercise",
    "study",
    "eat healthy"


];


for(var i=0;i<todos.length;i++){

    todos[i] = todos[i]+"!"
    console.log(todos[i]);
    todos.pop();

}