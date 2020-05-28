

let letter = 'X';
let number = [1,2,3,4,5,6,7,8,9];
let b = document.querySelector(".play");
//b.innerHTML = "Player ONE";
let comp = false ;

function comput(){

  comp = true;
}

function printx(numb){
let a = document.querySelector(".row"+numb);
if (a.innerHTML==""){    
a.innerHTML = letter;
whoWins();
tie();
change();
player();
//notPlay(number,cellarr);
if(comp == true){
  number = number.filter(number => number  !== numb)
easyComp();

}else{
   }
}else{
}
}

//console.log(letter);
function change(){
   if (letter =="X")letter ="O"
   else letter = "X";
}
//console.log(b.innerHTML);

function player(){ 
if (comp == true){
b.innerHTML = `Playing with computer`;
}

else{
 switch(b.innerHTML){
case `Play Game`:
b.innerHTML= "Player ONE turn";
break;
case `Player ONE turn`:
b.innerHTML= "Player TWO turn";
 break;
 case `Player TWO turn`:
b.innerHTML= "Player ONE turn";
break;
default:
 }
}
}

function  move(num) {
    return document.querySelector(".row"+num).innerHTML; 
}
function checkTurn(a,b,c,m){
    if (move(a)==m && move(b)==m && move(c)==m){
        return true;
    }else {
        return false;
    }
}

function whoWins(){
  if( checkTurn(1,2,3,letter)||checkTurn(4,5,6,letter)||checkTurn(7,8,9,letter)||checkTurn(1,5,9,letter)||checkTurn(3,5,7,letter)||checkTurn(1,4,7,letter)
    ||checkTurn(2,5,8,letter)||checkTurn(3,6,9,letter)){
    if (letter== `X`)
        {  alert ("Player ONE wins");
      }
        else if (letter == `O` && comp == true ){
             alert (`Computer wins`);
                }

                else if (letter ==`O`){
                alert ("Player TWO wins");
               }
    else{
}
}
}

function clear1(){
    for (let i =1;i<10; i++){
        document.querySelector(".row"+ i).innerHTML = "";
    }
    number = [1,2,3,4,5,6,7,8,9];
    letter = "X";
 comp = false ;
}

function easyComp(){
    let i = number[Math.floor(Math.random()* number.length)]
    document.querySelector(".row"+i).innerHTML = "O";
    number = number.filter(number => number  !== i)   ///filtering the array
    //console.log(i);
    //console.log(number);
    whoWins();
    change();
    }


    function tie(){
    

      if (contain(1)&&contain(2)&&contain(3)&&contain(4)&&contain(5)&&contain(6)&&contain(7)&&contain(8)&&contain(9) == true){
          
        alert ("ïts a tie"); 


      }else {

        
      }




    }
    
function contain(num){
  for (let i = 1; i<10;i++){
   let str1 = document.querySelector(".row"+num).innerHTML;
   if (str1 == `O` || str1 == `X`){
return true;
   } else {
return false
   }
  }
}



function hardGame(){
  if(contain (5) == false)
  {let i = 5; 
  document.querySelector(".row"+5).innerHTML = "O";
  number = number.filter(number => number  !== i);
  }
else if ( (contain(2)||contain(4)||contain(6)||contain(8) == true) && (contain(1)==true)&& (contain(9)==true) && contain(3)==true && (move(3) == `O`)) {
  if (contain(6)== false){
    let i = 6;
          document.querySelector(".row"+i).innerHTML = "O";
          number = number.filter(number => number  !== i);
          change();
  } else{
    let i = 2;
    document.querySelector(".row"+i).innerHTML = "O";
    number = number.filter(number => number  !== i);
    change();
  }
}

  else if ((contain(2)||contain(4)||contain(6)||contain(8) == true) && (contain(1)==true)&& (contain(9)==true)){
          let i = 3;
          document.querySelector(".row"+i).innerHTML = "O";
          number = number.filter(number => number  !== i);
          change();

  }

  else if ((contain(2)||contain(4)||contain(6)||contain(8) == true) && (contain(1)==false)&& (contain(9)==true)){
    let i = 1; 
    document.querySelector(".row"+1).innerHTML = "O";
        number = number.filter(number => number  !== i);
        change();
  }
  else if (contain(2) || contain(4)||contain(6)||contain(8) == true) {

              let i = 9; 
              document.querySelector(".row"+9).innerHTML = "O";
                  number = number.filter(number => number  !== i)
                  change();
                      
  }
}