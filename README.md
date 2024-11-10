# play-with-mica
# Marvelous Guessing Game

This is a simple web-based guessing game where players deposit a minimum amount, guess a random number, and can win or lose money based on their guesses. The game keeps track of the player's balance using `localStorage`, allowing the player to withdraw and deposit money. It also features a loading screen and interactive gameplay.

## Features
- Deposit a minimum amount to start playing.
- Guess a number between 1 and 100.
- Win or lose money based on your guess.
- Balance is saved in `localStorage` so you can come back later.
- The game provides feedback on your guesses (Too High, Too Low, or You Won).
- Withdraw funds and reset balance with buttons.
- A loading screen appears when the page is first loaded.

## How to Play
1. **Deposit Money**: To start playing, deposit at least 10 Birr (use the input box and click "Deposit").
2. **Make a Guess**: Once you've deposited money, you can guess a number between 1 and 100 by entering it into the "Enter a number (1-100)" input box and clicking "Guess".
3. **Game Feedback**: 
    - If your guess is correct, you win 10 Birr.
    - If your guess is too high or too low, the game will let you know how far off your guess was.
    - You have 6 attempts to guess the correct number.
    - If you run out of attempts, you lose 10 Birr.
4. **Withdraw**: If you have enough balance, you can withdraw some money by clicking the "Withdraw" button.
5. **Reset Balance**: You can reset your balance to zero by clicking the "Reset Balance" button.

## Project Setup
1. **Clone the repository**:
    ```bash
    git clone <repo-url>
    ```

2. **Open the project folder** in your code editor.

3. **Open `index.html`** in your web browser to play the game.

4. If you want to host this project, follow the instructions for deployment.

## Technologies Used
- **HTML**: Structure of the page
- **CSS**: Styling for the game interface
- **JavaScript**: Game logic, including `localStorage` for saving the balance and guess.

## License
This project is open-source and available under the [MIT License](LICENSE).
