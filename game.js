let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const  finalres = document.querySelector(".final-result");
const usc  = document.querySelector(".p1score");
const csc = document.querySelector(".p2score");

const genCompChoice =() =>{
    const options = ["rock" ,"paper" , "scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const drawGame = () =>{
    console.log("game draw");
}

const showwinner= (userwin) => {
    if (userwin) {
        finalres.innerHTML = "You Won the Game!";
        finalres.style.backgroundColor = "Green";
        finalres.style.color = "white";
        userscore++;
        usc.innerHTML = userscore;
    }else{
        finalres.innerHTML = "You Lost the Game";
        finalres.style.backgroundColor = "Red";
        finalres.style.Color = "white";
        compscore++;
        csc.innerHTML = compscore;
    }
}

const playgame = (userchoice) => {
    const compChoice = genCompChoice()
    if (userchoice === compChoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoice==="rock") {
            userwin = compChoice ==="paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compChoice === "scissor" ? false : true;
        }
        else{
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
    

}
choices.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id");
        playgame();
    })
})


const reset = document.querySelector(".reset");
reset.addEventListener("click" , () =>{
    usc.innerHTML = 0;
    csc.innerHTML = 0;
    finalres.innerHTML ="Play!"
    finalres.style.backgroundColor = "aliceblue";
    finalres.style.color = "black";
    userscore=0;
    compscore=0;
})
