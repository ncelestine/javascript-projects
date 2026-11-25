
// Arrays to hold the words and their definitions 
const secretWords=['stoic','machiavellian','theology','discernment','virtue','perspicacity'];
const wordDef=[];
wordDef[0]='a person who can endure pain or hardship without showing their feelings or complaining';
wordDef[1]='cunning, scheming, and unscrupulous, especially in politics.';
wordDef[2]='the study of the nature of God and religious belief.';
wordDef[3]='the ability to judge well.';
wordDef[4]='behavior showing high moral standards.';
wordDef[5]='the quality of having a ready insight into things; shrewdness.';

//creating variables for the loop
let userInput=0;
let guessAttempts=0;
let guessLimit=3;
let pointsPerGuess=10;
let showDef=Math.floor(Math.random()*6);
let guessLimitReached=false;
let retryOption1=1;
let retryOption2=2;
Boolean(guessLimitReached);
let reset=true;
Boolean(reset);

//Prompt user to enter a word based on the definition given.
alert('Welcome to WordGame!');
alert('Here you will be given a word definition and you are to guess what word it is defining.');
alert('You have a limit of 3 attempts for each word.');
while(!reset===false){
  for(let i=0;i<wordDef.length;i++){
    console.log('Here is the  definition:'+wordDef[i]);
    userInput=prompt('What is your guess?');
    
    //creating loops to join the arrays words and definitions and prompting commands for u
      if(userInput==secretWords[i]){
        console.log('You are correct!');
        console.log('You are award 10 points.');
        pointsPerGuess+=10;
        guessLimit=0;
      }else if(userInput !=secretWords[i]){
        console.log('Your guess is wrong.');
        userInput=prompt(wordDef[i]);
        guessLimit+=1;
     if(userInput==secretWords[i]){
      userInput=prompt('You guessed all correctly.');
      let totalPoints=pointsPerGuess*userInput==secretWords[i];
     }   
      
  }//Loops created to end or restart the game once attempt limit is reached.
  if(guessLimit==3){
    alert('You lose.If you wish to retry press 1 and to exit press 2');
    userInput=prompt('enter 1 or 2');
  }  
}
  alert('If you wish to retry press 1 and to exit press 2');
  userInput=prompt('enter 1 or 2');
if(userInput=='2'){
reset=false;
break;
}else if(userInput=='1'){
  reset=true;
  continue;
}
}
userInput=prompt('Your game has finished');
