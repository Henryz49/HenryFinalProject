let timesRoll;
let numOfDice;
function handleSubmit(){
    let input = document.getElementById("userinput").value;
    console.log(input);
}
function updateRadio(num){
    numOfDice = num;
    document.getElementById('dice2').style.opacity = 1;
    document.getElementById('dice1').style.opacity = 1;
    document.getElementById('dice3').style.opacity = 1;

    if(numOfDice == 1){
        document.getElementById('dice3').style.opacity = 0;
        document.getElementById('dice2').style.opacity = 0;
    } else if(numOfDice == 2){
        document.getElementById('dice3').style.opacity = 0;
    }
}

function rollDice(){
    
}


