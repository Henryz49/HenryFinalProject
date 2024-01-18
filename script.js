let timesRoll = 1;
let numOfDice;
let dice1;
let dice2;
let dice3;
function handleSubmit(){
    let input = document.getElementById("userinput").value;
    timesRoll = input;  
    console.log(input);
}
function updateRadio(num){
    let temp = num;
    numOfDice = 0+temp
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
    function loop(num){
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        dice3 = Math.floor(Math.random() * 6) + 1;
        let temp = num;
        console.log(temp)
        updateDice("dice1", dice1);
        updateDice("dice2", dice2);
        updateDice("dice3", dice3);
        temp = temp-1;
        if(temp<=0){
            return;
        }
        setTimeout(()=>{loop(temp)}, 1000);
    }
    loop(timesRoll);
}

function updateDice(dice, num){
    if(num==1){
        document.getElementById(dice).src="dice1.jpg"
    } else if(num==2){
        document.getElementById(dice).src="dice2.PNG"
    } else if(num==3){
        document.getElementById(dice).src="dice3.png"
    } else if(num==4){
        document.getElementById(dice).src="dice4.jpg"
    } else if(num==5){
        document.getElementById(dice).src="dice5.png"
    } else if(num==6){
        document.getElementById(dice).src="dice6.png"
    }

    document.getElementById(dice).style.height='20%';
    document.getElementById(dice).style.width='20%';
}

