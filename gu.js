let currentBalance = document.getElementById("currentBalance");
let result = document.getElementById("res");
let re = document.getElementById("re");
let depositBtn = document.getElementById("depositBtn");
let attempts = 0;
let balance = 0;
let guess;
let guessBtn = document.getElementById("guessBtn");
let withdrawBtn =  document.getElementById("withdrawBtn");
// Load balance and guess from localStorage if they exist
if (localStorage.getItem("balance")) {
   // parseInt(localStorage.getItem("balance"))=0;
    balance = parseInt(localStorage.getItem("balance"));
  //  balance = 0;
    currentBalance.textContent = `Current Balance: ${balance} birr`;
    guessBtn.disabled = balance < 10; // Disable button if balance is less than 10
}

// Check if a previous guess is stored; otherwise, set it
if (localStorage.getItem("guess")) {
    guess = parseInt(localStorage.getItem("guess"));
} else { 
    resetGame(); // Initialize for a new game
}


withdrawBtn.onclick = function()
{
   let amount =window.prompt("how much do you want to withdarw?");
   
     let withdrawAmount = Number(amount);
    //console.log(`amount :${withdrawAmount} `);
     //console.log(`balance :${balance} `);
     if(withdrawAmount <= balance - 10)
   {
    balance-=withdrawAmount;
    localStorage.setItem("balance", balance); // Save updated balance to localStorage
    alert("witdrawal successful");
    currentBalance.textContent = `Current Balance: ${balance} birr`;
   }
   else if(withdrawAmount > balance )
   {
     alert(`amount mustn't exceed your balance(${balance}`);
   }
   else if(balance == 0)
   {
     alert(`you have no sufficient balance to withdraw.`);
   }
   else
   {
     alert(`amount must be less than your balance(${balance})`);
   } 
  
 
  

}
// Deposit button function with validation
depositBtn.onclick = function() {
    let deposit = parseInt(document.getElementById("depositInput").value);
    if (isNaN(deposit) || deposit < 10) {
        result.textContent = "Please deposit a minimum of 10 birr.";
    } else {
        balance += deposit;
        localStorage.setItem("balance", balance); // Save updated balance to localStorage
        currentBalance.textContent = `Current Balance: ${balance} birr`;
        alert(`successfully deposited ${deposit} birr.`)
        guessBtn.disabled = false;
        result.textContent = "";
        // Reset game only after deposit
        resetGame();
    }
};

function won() {
    result.textContent = "You won (አሸንፈዋል) ✅! +10 birr";
}

function lost() {
    result.textContent = "You Lost (ተሸንፈዋል) ❌! -10 birr";
    
}

function resetGame() {
    guess = Math.floor(Math.random() * 100 + 1);
    localStorage.setItem("guess", guess); // Store guess in localStorage
    attempts = 0; // Reset attempts
    console.log(`New guess: ${guess}`);
    result.textContent = "";
    re.textContent ="";
}
//If you want to reset the balance to a specific value (e.g., 0) in localStorage, you can create a function or directly set it like this:
document.getElementById("resetBalanceBtn").onclick = function() {
    balance = 0; // Reset balance to 0
    localStorage.setItem("balance", balance); // Update localStorage
    currentBalance.textContent = `Current Balance: ${balance} birr`; // Update display
    alert("Balance has been reset.");
};

// Guess button function with validation
guessBtn.onclick = function() {
    let input = parseInt(document.getElementById("input").value);
    console.log(`Input: ${input}`);
    if (isNaN(input) || input < 1 || input > 100) {
        result.textContent = "Please enter a number between 1 and 100";
        return;
    }

    if (balance >= 10) {
        attempts++;
        console.log(`Guess: ${guess}, Attempts: ${attempts}`);

        if (input === guess) {
            result.textContent = "You won (አሸንፈዋል) +10 birr";
            balance += 10;
            localStorage.setItem("balance", balance);
            currentBalance.textContent = `Current Balance: ${balance} birr`;
            won();
            setTimeout(resetGame, 3000); // Start a new game
        } else if (input > guess) {
            result.textContent = `Too High, remaining attempts: ${6 - attempts}`;
        } else if (input < guess) {
            result.textContent = `Too Low, remaining attempts: ${6 - attempts}`;
        }

        if (attempts === 6) {
            if (input !== guess) {
                balance -= 10;
                localStorage.setItem("balance", balance);
                currentBalance.textContent = `Current Balance: ${balance} birr`;
                lost();

                if (balance < 10) {
                   // alert("you Lost,but Never Give Up🦾");
                   re.textContent = "you Lost,but Never Give Up🦾";
                    result.textContent = "Your balance is now insufficient to continue playing. Please deposit more to play again.";
                    guessBtn.disabled = true; // Disable the guess button if balance is insufficient
                } else {
                    setTimeout(resetGame, 3000); // Reset the game after the final attempt
                }
            }
        }
    }
};

window.onload = function() {
    let loadingText = document.getElementById("loadingText");
    let gameContainer = document.getElementById("gameContainer");
    let loadingScreen = document.getElementById("loadingScreen");

    let percent = 0;
    let loadingInterval = setInterval(function() {
        percent++;
        loadingText.textContent = `Loading... ${percent}%`;

        if (percent === 100) {
            clearInterval(loadingInterval);//Stops the interval when the loading reaches 100%.
            loadingScreen.style.display = "none"; // Hide the loading screen
            gameContainer.style.display = "block"; // Show the game container
        }
    }, 50); // Adjust the interval speed as needed (50ms for faster, 100ms for slower)
};

