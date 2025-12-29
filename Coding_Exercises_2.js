// Random String generator using crypto for stronger randomness
function randomStr(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/~`';

    let result = '';

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

console.log("Random String:", randomStr(15));


// Validating Password using optimized regex
function validatePassword(password) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
}
console.log("Is password valid", validatePassword("Password123!"));
console.log("Is password valid", validatePassword("pass123"));
console.log("Is password valid", validatePassword("PASSWORD123!"));
console.log("Is password valid", validatePassword("Password!"));


// Reverse a string (optimized using built‑ins)
function reverseStr(name) {
    return [...name].reverse().join("")

}
console.log("Reversed String:", reverseStr("Hafeez"));


// Check if sequence is palindrome
function isPalindrome(value) {
    return value === [...value].reverse().join("");
}
console.log("isPalindrome:", isPalindrome("1221"));


// Check if a number is prime (optimized)
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("isPrime:", isPrime(10));


// Generate Fibonacci series up to n (optimized)
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const arr = [0, 1];
    for (let i = 2; i < n; i++) arr.push(arr[i - 1] + arr[i - 2]);
    return arr;
}
console.log(`Fibonacci series upto 6:`, fibonacci(6));


// Count vowels (compact + regex)
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(`Count of vowels in Hafeez is:`, countVowels("Hafeez"));


// Find largest number (optimized with Math.max)
function largest(arr) {
    return Math.max(...arr);
}
console.log(`Largest number:`, largest([1, 2, 4, 1, 6, 4, 0]));


// Sum array (optimized reduce)
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(`Sum of array:`, sumArray([2, 5, 3]));


// Even or Odd (clean short version)
function evenOrOdd(n) {
    return n % 2 === 0 ? "even" : "odd";
}
console.log("isEvenOrOdd:", evenOrOdd(4));
console.log("isEvenOrOdd:", evenOrOdd(7));


// Capitalize each word (regex version)
function capitalizeWords(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}
console.log("capitalizeWords:", capitalizeWords("hafeez ahmad"));


// Count occurrences of a character
function countChar(str, char) {
    return [...str].filter(c => c === char).length;
}
console.log(`Character e appears:`, countChar("Hafeez Ahmad", "e"));
