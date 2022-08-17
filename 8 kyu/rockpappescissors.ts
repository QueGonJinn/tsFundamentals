export function rps(p1: string, p2: string): string{
  return (p1 === p2) ? 'Draw!' : (p1 === 'scissors' && p2 === 'paper') ? 'Player 1 won!' : (p1 === 'paper' && p2 === 'scissors') ? 'Player 2 won!' : (p1 === 'paper' && p2 === 'rock') ? 'Player 1 won!' : (p1 === 'rock' && p2 === 'paper') ? 'Player 2 won!' : (p1 === 'scissors' && p2 === 'rock') ? 'Player 2 won!' : 'Player 1 won!';
}

console.log(rps('rock', 'scissors'));