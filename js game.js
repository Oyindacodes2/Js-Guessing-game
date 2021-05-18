
  const main = document.querySelector('.main');
  const firstbtn = document.querySelector('.firstbtn');
  const secbtn = document.querySelector('.secbtn');
  const thirdbtn = document.querySelector('.thirdbtn');
  const fourthbtn = document.querySelector('.fourthbtn');
  const fifthbtn = document.querySelector('.fifthbtn');
  const sixthbtn = document.querySelector('.sixthbtn');
  const seventhbtn = document.querySelector('.seventhbtn');
  const eightbtn = document.querySelector('.eightbtn');
  const note = document.querySelector('.note');
  const notice = document.querySelector('.notice');
  const info = document.querySelector('.info');
  const info2 = document.querySelector('.info2');
  const altbtn = document.querySelector('.altbtn');

  const resetpara = document.querySelectorAll('.main p');

const guessField = document.querySelector('.guessField');
 const guessbtn = document.querySelector('.guessbtn');

  guessbtn.value= 'guess';

  let G = Number(guessField.value);

 let guessCtn = 1;
let resetbtn;

altbtn.textContent = 'otherwise';

altbtn.disabled= true;

function guessNum(digit){
      var digit = Math.floor(Math.random()*100)+1;
    return digit;
}

  firstbtn.textContent = guessNum();
  secbtn.textContent = guessNum();
  thirdbtn.textContent = guessNum();
  fourthbtn.textContent= guessNum();
  fifthbtn.textContent = guessNum();
  sixthbtn.textContent = guessNum();
  seventhbtn.textContent = guessNum();
  eightbtn.textContent = guessNum();

   function Store(first,sec,third,fourth){
          this.first = first;
          this.sec = sec;
          this.third = third;
          this.fourth = fourth;
   }

   var store1 = new Store(firstbtn.textContent,secbtn.textContent,thirdbtn.textContent,fourthbtn.textContent); 

  var actualNum = Number(Math.floor(Math.random(store1)*100));
   //document.write(actualNum);
  //actual number for references

  firstbtn.addEventListener('click',function(){
     guessField.value =Number(firstbtn.textContent);
  });

  secbtn.addEventListener('click',function(){
   guessField.value =Number(secbtn.textContent);
});

thirdbtn.addEventListener('click',function(){
   guessField.value =Number(thirdbtn.textContent);
});

fourthbtn.addEventListener('click',function(){
   guessField.value = Number(fourthbtn.textContent);
});

fifthbtn.addEventListener('click',function(){
   guessField.value =Number(fifthbtn.textContent);
});

sixthbtn.addEventListener('click',function(){
   guessField.value =Number(sixthbtn.textContent);
});

seventhbtn.addEventListener('click',function(){
   guessField.value =Number(seventhbtn.textContent);
});

eightbtn.addEventListener('click',function(){
   guessField.value =Number(eightbtn.textContent);
});


altbtn.addEventListener('click',function(){
   if(Number(guessField.value) !== eightbtn.textContent  &&Number(guessField.value) !== seventhbtn.textContent  && Number(guessField.value) !== sixthbtn.textContent &&
   Number(guessField.value) !== fifthbtn.textContent  && Number(guessField.value) !== fourthbtn.textContent  && Number(guessField.value) !== thirdbtn.textContent  &&
   Number(guessField.value) !== secbtn.textContent  && Number(guessField.value) !== firstbtn.textContent ){

      note.textContent ='CONGRATULATION!! you got it right';
      note.style.backgroundColor = "green";
      gamereset();
     }else{
      note.textContent = 'WRONG Try again';
     }
})
var x =10;
    function mainGame(){
       if(guessField.value !== ''){
           if(guessCtn === 1){
              info.textContent ='guess counts: ';
              info2.textContent = 'previous guesses';
           }
           info.textContent = guessCtn;
           info2.textContent +=" " + Number (guessField.value);

            if(Number (guessField.value) === actualNum){                   //THIS IS A IMPORTANT LINE SYNTAX NOT TO FORGET
              note.textContent ='CONGRATULATION!! you got it right';
              note.style.backgroundColor = "green";
              gamereset();
           }
           else if(guessCtn === 10){
              note.textContent = "!!GAME OVER!!";
              note.style.backgroundColor = "red";
              gamereset();
           }
           else if(guessCtn === 7){
              note.textContent = "HINT: not all button has the actual ans";
              note.style.backgroundColor = "orange";
              altbtn.disabled = false;
              
           }
           else {
              note.textContent = 'WRONG Try again';
           }
       }

       guessCtn++;
       
       guessField.focus();
    }

     guessbtn.addEventListener('click',mainGame);


     function gamereset(){
            guessCtn = 1;

           guessField.disabled = true;
           guessbtn.disabled = true;
           altbtn.disabled = true;
           resetbtn = document.createElement('button');
           resetbtn.textContent='new game';
           document.body.appendChild(resetbtn);
           resetbtn.addEventListener('click',newGame);
     }

      function newGame(){
        note.style.backgroundColor = "transparent";
        for(let i=0; i<resetpara.length; i++){
           resetpara[i].textContent = '';
        }
        guessField.disabled = false;
        guessbtn.disabled = false;
        guessField.value = '';
        guessField.focus();

        resetbtn.parentNode.removeChild(resetbtn);

        let actualNum = Number(Math.floor(Math.random(store1)*100));
      }

     

         


   // document.writeln("<h3>"+actNum+"</h3>");

