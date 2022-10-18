const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

function getRandomPick() {
  let chance = Math.random();

  /*if chance is between 0.66 and 1
    then ROCK
  if chance is between 0.33 and 0.66
    then PAPER
  if chance is between 0 and 0.33
    then SCISSORS
  */

  if (chance > 0.66) {
    return ROCK;
  } else if (chance > 0.33) {
    return PAPER;
  }
    else {
      return SCISSORS;
    }
}

function getResultText(computerPick, playerPick) {
  const TIE = "It's a tie!";
  const WIN = "You win!";
  const LOSE = "You lose!";

  // if the computer and player pick the same value, then the result is a TIE
  if (computerPick == playerPick) {
    return TIE;
  }

  /*
  at this point, if the computer and player values were the same,
  we would have already returned a TIE, so we know they must be different now
  */
  if (computerPick == PAPER && playerPick == ROCK) {
    return LOSE;
  } else if (computerPick == PAPER && playerPick == SCISSORS) {
    return WIN;
  }

  if (computerPick == ROCK && playerPick == SCISSORS) {
    return LOSE;
  } else if (computerPick == ROCK && playerPick == PAPER) {
    return WIN;
  }

  if (computerPick == SCISSORS && playerPick == PAPER) {
    return LOSE;
  } else if (computerPick == SCISSORS && playerPick == ROCK) {
    return WIN;
  }
}
