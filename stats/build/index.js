"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Read and Parse data
const matches = fs_1.default
    .readFileSync(`${__dirname}/../football.csv`, {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
// Analyze data
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
// Generate report
console.log(`Man United won ${manUnitedWins} games`);
