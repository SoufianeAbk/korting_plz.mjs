import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


let prijzen = [125, 200, 337, 404, 598];

function geefKorting(prijs) {
    return prijs * 0.85;
}

for (let i = 0; i < prijzen.length; i++) {
    prijzen[i] = geefKorting(prijzen[i]);
}

console.log(prijzen);

process.exit()
