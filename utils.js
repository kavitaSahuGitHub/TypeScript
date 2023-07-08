"use strict";
/**
 * @returns true if the input string is a palindrome
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrom = void 0;
function isPalindrom(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrom = isPalindrom;
//caculator class
