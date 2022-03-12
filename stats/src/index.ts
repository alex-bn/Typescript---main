import fs from 'fs';

// Load / Parse / Analyze / Report

// // JS style approach
// const matches = fs
//   .readFileSync('football.csv', {
//     encoding: 'utf-8',
//   })
//   .split('\n')
//   .map((row: string): string[] => row.split(','));
// let manUnitedWins = 0;
// for (let match of matches) {
//   if (match[1] === 'Man United' && match[5] === 'H') {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === 'A') {
//     manUnitedWins++;
//   }
// }
// console.log(`Man United won ${manUnitedWins} games.`);

// Issues to be addressed:
// 1) magic strings comparisons -> solved using an enum
// 2) source data is hardcoded -> solved by decoupling the csv-reading into its own class
// 3) data array is all strings, even through it might have numbers/dates/etc in it -> solved using a tuple and mapping each row element on the correct type of data
// 4) refactoring 1st approach: inheritance
// 5) refactoring 2nd approach: composition

import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
