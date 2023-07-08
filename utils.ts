/**
 * @returns true if the input string is a palindrome
 */

export function isPalindrom(str: string): boolean {
    return str === str.split('').reverse().join('');
}

//caculator class