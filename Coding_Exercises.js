// Random String generator using Math 
function randomStr(size) {
    return Math.random().toString(36).substring(2, 2 + size);

}
console.log("Random String:", randomStr(12))


// Validating Password using regex
function validatePassword(password) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return pattern.test(password);
}

console.log("Is password valid", validatePassword("Password123!"));
console.log("Is password valid", validatePassword("pass123"));
console.log("Is password valid", validatePassword("PASSWORD123!"));
console.log("Is password valid", validatePassword("Password!"));


// Reverse a string
function reverseStr(name) {
    let reversedStr = "";

    for (let i = name.length - 1; i >= 0; i--) {
        reversedStr += name[i];
    }

    return reversedStr;
}

console.log("Reversed String:", reverseStr("Hafeez"))

// // Check if sequence is a palindrome series
function isPalindrome(value) {
    let reversedValue = "";

    for (let i = value.length - 1; i >= 0; i--) {
        reversedValue += value[i];
    }

    return value === reversedValue;
}
console.log("isPalindrome:", isPalindrome("1221"))


// Check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log("isPrime:", isPrime("10"))


// Generate Fibonacci series upto n 
function fibonacci(n) {
    let arr = [0, 1];

    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr;
}
let n = 6;
console.log(`Fibonacci series upto ${n}:`, fibonacci(n));


// Count vowels in a string
function countVowels(str) {
    str = str.toLowerCase();
    let vowels = "aeiou";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
let str = "Hafeez"
console.log(`Count of vowels in ${str} is:`, countVowels(str));


// Find the largest number in an array
function largest(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}
let arr = [1, 2, 4, 1, 6, 4, 0]
console.log(`Largets number in array ${arr} is:`, largest(arr));

// Sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum;
}
let arr2 = [1, 2, 4, 1, 6, 4, 0]
console.log(`Sum of all numbers in ${arr2} is:`, sumArray([2, 5, 3]));


// Check if a number is even or odd
function evenOrOdd(n) {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(`isEvenOrODD:`, evenOrOdd(4));
console.log(`isEvenOrODD:`, evenOrOdd(7));

// Convert first letter of each word to uppercase
function capitalizeWords(str) {
    let words = str.split(" ");      // break the sentence into words
    let newWords = [];

    for (let word of words) {
        let first = word[0].toUpperCase();  // first letter uppercase
        let rest = word.slice(1);           // remaining letters
        newWords.push(first + rest);        // join them
    }

    return newWords.join(" ");      // make the sentence again
}
console.log(`capitalizeWords:`, capitalizeWords("hafeez ahmad"));

// Count how many times a character appears in a string
function countChar(str, char) {
    let count = 0;

    for (let c of str) {
        if (c === char) {
            count++;
        }
    }

    return count;
}
let str2 = "Hafeez Ahmad"
let char = "e"
console.log(`Character ${char} in string ${str2} appears this times:`, countChar(str2));
