"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// read and parse data
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);
// analyze data
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// generate report
console.log(`Man United won ${manUnitedWins} games`);
