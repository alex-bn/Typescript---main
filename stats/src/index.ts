import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// read and parse data
const reader = new MatchReader('football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);

// analyze data
let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// generate report
console.log(`Man United won ${manUnitedWins} games`);
