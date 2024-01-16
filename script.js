let rollhandler = document.getElementById("rollHandler");
let timesRolled;

rollhandler.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let rollAmount = document.getElementById("rollAmount")

    if (typeof rollAmount.value == "number" ) {
        console.log(`This form has a roll amount of ${rollAmount.value}`);
        timesRolled = rollAmount.value;
        console.log(timesRolled);

    } else {
        alert("Ensure you input a number!");
    }
});

