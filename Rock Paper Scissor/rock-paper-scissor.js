const score=JSON.parse(localStorage.getItem('score'))||{wins:0,losses:0,draw:0};
console.log();


function playGame(playerMove){
comMove=pickComMove();
//console.log(comMove);
let result='';

if(playerMove==='Scissor'){
if (comMove==='rock'){result='You Loose.';}
else if (comMove==='paper'){result='You Win.';}
else{result='Tie.';}
if (result==='You Win.'){score.wins+=1;}
else if (result==='You Loose.'){score.losses+=1;}
else if (result==='Tie.'){score.draw+=1;}
//alert(`You picked ${playerMove}. Computer picked ${comMove}. ${result}.
//Win:${score.wins} Looses:${score.losses} Draw:${score.draw}`);
localStorage.setItem('score',JSON.stringify(score));
}

else if(playerMove==='paper'){
if (comMove==='rock'){result='You Win.';}
else if (comMove==='paper'){result='Tie.';}
else{result='You Loose.';}
if (result==='You Win.'){score.wins+=1;}
else if (result==='You Loose.'){score.losses+=1;}
else if (result==='Tie.'){score.draw+=1;}
//alert(`You picked ${playerMove}. Computer picked ${comMove}. ${result}.
//Win:${score.wins} Looses:${score.losses} Draw:${score.draw}`);
localStorage.setItem('score',JSON.stringify(score));
//console.log(playerMove,comMove);
}

else{
if (comMove==='rock'){result='Tie.';}
else if (comMove==='paper'){result='You Loose.';}
else{result='You Win.';}
if (result==='You Win.'){score.wins+=1;}
else if (result==='You Loose.'){score.losses+=1;}
else if (result==='Tie.'){score.draw+=1;}

//alert(`You picked ${playerMove}. Computer picked ${comMove}. ${result}.
//Win:${score.wins} Looses:${score.losses} Draw:${score.draw}`);
localStorage.setItem('score',JSON.stringify(score));
}
//console.log(score);

if(result!='Tie.'){
document.querySelector('.js-result').innerHTML=`&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp${result}.<br><br>&nbsp &nbsp &nbsp &nbsp  &nbsp &nbspYou
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${comMove}-emoji.png" class="move-icon">
    Computer`;
}
else{document.querySelector('.js-result').innerHTML=`&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp${result}.<br><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp You
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${comMove}-emoji.png" class="move-icon">
    Computer`;}

document.querySelector('.js-score').innerHTML=`&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbspWins : ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`;
}


function pickComMove(){
const randomNumber=Math.random();
let comMove=''
if(randomNumber<=1/3){comMove='rock'}
else if(randomNumber>1/3 && randomNumber<2/3 ){comMove='paper'}
else if(randomNumber>=2/3){comMove='scissor'}
return comMove;
}
