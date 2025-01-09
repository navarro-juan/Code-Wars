/*
 ======= Problem Name: 
  Rock Paper Scissors
 ======= Problem description:

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

 ======= Solution:
    // [Your solution code goes here]
*/
const rps = (p1, p2) => {
  
    
    return p1 === "scissors" && p2 === "paper" ? "Player 1 won!"
        : p1 === "paper" && p2 === "rock" ? "Player 1 won!"
        : p1 === "rock" && p2 === "scissors" ? "Player 1 won!"
        : p2 === "scissors" && p1 === "paper" ? "Player 2 won!"
        : p2 === "paper" && p1 === "rock" ? "Player 2 won!"
        : p2 === "rock" && p1 === "scissors" ? "Player 2 won!"
        : "Draw!"
};

