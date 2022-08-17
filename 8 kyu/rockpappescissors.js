"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rps = void 0;
function rps(p1, p2) {
    return (p1 === p2) ? 'Draw!' : (p1 === 'scissors' && p2 === 'paper') ? 'Player 1 won!' : (p1 === 'paper' && p2 === 'scissors') ? 'Player 2 won!' : (p1 === 'paper' && p2 === 'rock') ? 'Player 1 won!' : (p1 === 'rock' && p2 === 'paper') ? 'Player 2 won!' : (p1 === 'scissors' && p2 === 'rock') ? 'Player 2 won!' : 'Player 1 won!';
}
exports.rps = rps;
console.log(rps('rock', 'scissors'));
