let req = prompt("Enter your request");
let todo = [];
while(true){
    if(req == "quit"){
        console.log("thanks for visiting!");
        break;
    }
    else if(req=="add"){
        let task = prompt("Enter your task here");
        todo.push(task);
        console.log("task added")
    }
    else if(req=="list"){
        for(let i=0 ; i<todo.length ; i++){
            console.log(i,todo[i]);
        }
    }
    else if(req=="delete"){
        let idx = parseInt(prompt("Enter the index of the task you want to delete"));
        todo.splice(idx,1);
    }
    else{
        prompt("sahi req daal!!");
    }
    req=prompt("please enter request");
}