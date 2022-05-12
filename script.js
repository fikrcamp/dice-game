//write code here


// 1.Roll

let dice;
let scores = [0,0];
let currentPlayer = 0;
let current=0;


//   ROLL BUTTON
document.querySelector(".btn--roll").addEventListener('click' , function () {
    
    if(scores[0]<100 && scores[1]<100) {
    
    dice=Math.trunc(Math.random() * 6) + 1;
    document.querySelector(".dice").src = `dice-${dice}.png`
    

if(dice!=1){
    current += dice;

    if(currentPlayer==0){
        document.querySelector("#current--0").innerText= current ;
    }
    else if(currentPlayer==1){
        document.querySelector("#current--1").innerText = current ;
    }

    
} 
else {
    current=0;
    if(currentPlayer==0){
        document.querySelector("#current--0").innerText= current ;
        currentPlayer=1;
        document.querySelector(".player--0").classList.toggle("player--active");
       
        

    }
    else if(currentPlayer==1){
        document.querySelector("#current--1").innerText= current;
        currentPlayer=0;
        document.querySelector(".player--1").classList.toggle("player--active");
        
        
    }

    document.querySelector(".player--" + currentPlayer).classList.toggle("player--active");

}
    }

});


// HOLD BUTTON


document.querySelector(".btn--hold").addEventListener('click', function () {

   

   

if(currentPlayer==0){
    
    scores[currentPlayer]+=current;

    if(scores[currentPlayer]<100){
    
    current=0;
    document.querySelector("#current--0").innerText= current;
    document.querySelector("#score--0").innerText=scores[currentPlayer];
    currentPlayer=1;
    document.querySelector(".player--0").classList.toggle("player--active");
}
else if(scores[currentPlayer]>=100){
document.querySelector(".player--0").classList.add("player--winner") ;
current=current;
scores[currentPlayer]=scores[currentPlayer];
document.querySelector("#current--0").innerText= current;
document.querySelector("#score--0").innerText=scores[currentPlayer];
document.querySelector(".btn--roll").disabled=true;
document.querySelector(".btn--hold").disabled=true;


}
}
else if(currentPlayer==1){
    
    scores[currentPlayer]+=current;

    if(scores[currentPlayer]<100){
    current=0;
    document.querySelector("#current--1").innerText=current;
    document.querySelector("#score--1").innerText=scores[currentPlayer];
    currentPlayer=0;
    document.querySelector(".player--1").classList.toggle("player--active");
    
}
else if(scores[currentPlayer]>=100){
document.querySelector(".player--1").classList.add("player--winner") ;
current=current;
scores[currentPlayer]=scores[currentPlayer];
document.querySelector("#current--1").innerText= current;
document.querySelector("#score--1").innerText=scores[currentPlayer];
document.querySelector(".btn--roll").disabled=true;
document.querySelector(".btn--hold").disabled=true;

}

}
document.querySelector(".player--" + currentPlayer).classList.toggle("player--active");
    
}


 

)


// 3.New Game

document.querySelector(".btn--new").addEventListener('click' , function (){

current=0;
currentPlayer=0;
scores=[0,0];
document.querySelector("#current--0").innerText=current;
document.querySelector("#current--1").innerText=current;
document.querySelector("#score--0").innerText=scores[0];
document.querySelector("#score--1").innerText=scores[1];
document.querySelector(".player--0").classList.add("player--active");
document.querySelector(".player--0").classList.remove("player--winner");
document.querySelector(".player--1").classList.remove("player--winner");
document.querySelector(".player--1").classList.remove("player--active");


})