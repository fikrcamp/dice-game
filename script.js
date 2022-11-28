//write code here

let dice = Math.floor(Math.random() * 6) + 1. // random dice number from 1 - 6
let rollDice = document.querySelector('#roll');
let New = document.querySelector('#new');
let Hold = document.querySelector('#hold');


let total0= 0;
let total1 = 0;
let totalScore0 = 0;
let totalScore1 = 0;
let Active ;



 

 function start(){
  if (Active == 0 && totalScore1 >= 100 ) {

    document.querySelector('#player1').style.backgroundColor = "black";
    rollDice.removeEventListener('click', start);
        Hold.removeEventListener('click',HoldFun);
         
 }
 else if (Active == 1 && totalScore0 >= 100 )
 {
    document.querySelector('#player0').style.backgroundColor = "black";
    
    rollDice.removeEventListener('click', start);
        Hold.removeEventListener('click',HoldFun);
 }
 
    if (Active == 0 && totalScore1 < 100  && totalScore0 < 100 ){
    
    if (dice != 1){
        document.querySelector('#player1').style.backgroundColor = "pink";
        
      
    
        document.querySelector('#dice').src = `dice-${dice}.png`;
         
         total1 += dice;
          document.querySelector('#current--1').innerHTML = total1;
          dice = Math.floor(Math.random() * 6) + 1;
          
          
    }
    else if (dice == 1){
       
        
         document.querySelector('#dice').src = `dice-${dice}.png`;
        total1 = 0;
        total0 = 0;
        document.querySelector('#current--1').innerHTML = total1;
        Active = 1;
        dice = Math.floor(Math.random() * 6) + 1;
        
        

    }
 }
 
 else {
    Active = 1;
    
    
    if (Active == 1 && totalScore0 < 100 && totalScore1 < 100){
    
    if (dice != 1){
        
    
        document.querySelector('#dice').src = `dice-${dice}.png`;
         
         total0 += dice;
          document.querySelector('#current--0').innerHTML = total0;
          
          dice = Math.floor(Math.random() * 6) + 1;
          
    }
    else if (dice == 1){
        
        
         document.querySelector('#dice').src = `dice-${dice}.png`;
        total0 = 0;
        total1 = 0;
        document.querySelector('#current--0').innerHTML = total0;
        Active = 0;
        dice = Math.floor(Math.random() * 6) + 1;

        

        

 }  
} 

 }
};

 rollDice.addEventListener('click', start);

 New.addEventListener('click',function(){
    document.querySelector('#dice').src = `dice-5.png`;
        total0 = 0;
        totalScore0 = 0;
        total1 = 0;
        totalScore1 = 0;
        document.querySelector('#current--0').innerHTML = total0;
         document.querySelector('#current--1').innerHTML = total1;
         document.querySelector('#score--0').innerHTML = totalScore0;
         document.querySelector('#score--1').innerHTML = totalScore1;
         location.reload();



 })
 Hold.addEventListener('click',HoldFun);
 function HoldFun(){
    
      if(Active == 1 && document.querySelector('#current--0').innerHTML != 0)  {
        totalScore0 += total0;
       
        document.querySelector('#score--0').innerHTML = totalScore0;
        document.querySelector('#current--0').innerHTML = 0;
        total0 = 0;
        Active = 0;
         document.querySelector('#player0').style.opacity = "0.7";
         
      }else if (Active == 0 && document.querySelector('#current--1').innerHTML != 0){
         totalScore1 += total1;
        
         document.querySelector('#score--1').innerHTML = totalScore1;
         document.querySelector('#current--1').innerHTML = 0;
         total1 = 0;
         Active = 1;
        
         


}};




