// // Factorial Challenge

// //   Create a function that takes in n and returns the factorial of n
// //   The factorial function (symbol: !) says to multiply all whole numbers from our chosen number down to 1.

// const factorial = (n) => {
//     if (n < 0) {
//         throw new Error("Negative integer factorials are undefined"); // cannot have a negative factorial number
//     } else if (n === 0 || n === 1) {
//         //generally agreed !0 equals 1
//         // return (n = n + 1);
//         return 1;
//     }

//     let num = 1;

//     for (let i = 1; i <= n; i++) {
//         num *= i;
//     }
//     return num;
// };
// console.log("factorial:", factorial(5));

// // Create a function that calculates a fibonacci number

// const fibonacci = (n) => {
//     // return f0, f1, f2 of the sequence so we can use the formula as its only valid after f2
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1 || n === 2) {
//         return 1;
//     }

//     // keep track of the last 2 numbers in sequence
//     let f1 = 1;
//     let f2 = 1;
//     let fibNum = 0;

//     // Start i at 2 since the fibonacci sequence of( xn = xn−1 + xn−2 )is only valid for n > 2
//     for (let i = 2; i < n; i++) {
//         fibNum = f1 + f2; // <-- Fibonacci number is the sum of the two proceding ones
//         f1 = f2; // <-- updating our previous numbers in the sequence
//         f2 = fibNum;
//     }
//     return fibNum;
// };

// console.log("fibonacci:", fibonacci(10));

// // FizzBuzz Challenge

// //   write a function that takes n and returns
// //   Fizz for divisible by 3
// //   Buzz for divisibile by 5
// //   FizzBuzz... for 15
// //   n if n is not divisible
// //   Bonus: do fizz buzz without conditionals

// const fizzBuzz = (n) => {
//     // const stringN = n.toString().split("");
//     // console.log(stringN);

//     const newArr = n.map((n) => {
//         if (n === 0) {
//             return `${n}`;
//         } else if (n % 3 === 0) {
//             return (n = "Fizz");
//         } else if (n % 5 === 0) {
//             return (n = "Buzz");
//         } else if (n % 15 === 0) {
//             return (n = "FizzBuzz");
//         } else {
//             return (n = `${n}`);
//         }
//     });

//     return newArr;
// };
// console.log("fizzbuzz1:", fizzBuzz([3, 5, 10, 0, 8, 9, 8, 30, 13]));

// // Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// const fizzbuzz2 = () => {
//     let newString = [];

//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             newString.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             newString.push("Fizz");
//         } else if (i % 5 === 0) {
//             newString.push("Buzz");
//         } else {
//             newString.push(`${i}`);
//         }
//     }
//     return newString.join(", ");
//     // return newString;
// };

// console.log("fizzbuzz2:", fizzbuzz2());

// // Algorithm/palindrome Challenge

// // Return true if the given string is a palindrome. Otherwise, return false.

// // A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// // Note. You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

// // We’ll pass strings with varying formats, such as “racecar”, “RaceCar”, and “race CAR” among others.

// const palindrome = (text) => {
//     const textArr = text.split(""); // split word into array, seperated into single characters
//     console.log(textArr);
//     let j = textArr.length - 1;

//     for (let i = 0; i < j; i++) {
//         if (textArr[i] !== textArr[j - i]) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log("Palindrome:", palindrome("racecar"));

// // compare triplets

// const a = [5, 6, 7];
// const b = [3, 6, 10];

// function compareTriplets(a, b) {
//     // Write your code here
//     let score = [0, 0];

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             score[0] += 1;
//         } else if (a[i] < b[i]) {
//             score[1] += 1;
//         } else a[i] === b[i];
//         // return;
//     }
//     return score;
// }

// console.log(compareTriplets(a, b));

// // Greatest common divisor

// function gcdi(x, y) {
//     Math.abs(x, y);

//     for (let i = x + y; i > 0; i--) {
//         if (x % i === 0 && y % i === 0) {
//             return i;
//         }
//     }
// }
// // clever way to do it
// // const gcdi = (a, b) => (b ? gcdi(b, a % b) : Math.abs(a));

// console.log("GCDI:", gcdi(12, 36));

// // least common multiple

// function lcmu(x, y) {
//     for (let i = 0; i < x * y; i++) {
//         if ((x % i === 0) === (y % i === 0)) {
//             return i;
//         }
//     }
// }
// console.log("lcmu:", gcdi(4, 6));

// const s = ["hello", "my", "name", "is", "Jinn"];
// const test10 = [...s];
// console.log(test10);

// var numbers = [4, 2, 5, 1, 3];
// const newA = numbers.sort(function (a, b) {
//     a - b;
//     // console.log("a:", a);
//     // console.log("b:", b);
// });
// console.log(newA);

// // iceland challenges

// // Challenge 1
// // Write a javascript function that takes in a list of products, prices, saleProducts, salePrices, you must return total of all discounts that have been given:

// const products = ["mango", "kiwi", "banana"];
// const prices = [3, 2, 1];
// const saleProducts = ["mango", "mango", "kiwi", "kiwi", "banana"];
// const salePrices = [3, 2.5, 2, 1.7, 0.2];

// function totalDiscount(products, prices, saleProducts, salePrices) {
//     let discount = 0;

//     // map through
//     saleProducts.map((p, index) => {
//         discount += prices[products.indexOf(p)] - salePrices[index];
//     });
//     // return discount.reduce((a, b) => a + b);
//     return discount;
// }

// console.log(
//     "totalDiscount:",
//     totalDiscount(products, prices, saleProducts, salePrices)
// );

// //challenge 2
// // Write a javascript function that take in a list of prices, returns the indexes of all prices that are inflection points (excluding first and last datapoints)

// const test5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9, 8, 7, 6, 5];
// const test6 = [1, 2, 3, 4, 3, 2, 1, 2, 3, 4];

// function inflection(p) {
//     let indexInflPoint = [];

//     for (let i = 1; i < p.length - 1; i++) {
//         if (
//             (p[i] > p[i - 1] && p[i] > p[i + 1]) ||
//             (p[i] < p[i - 1] && p[i] < p[i + 1])
//         ) {
//             indexInflPoint.push(i);
//         }
//     }
//     return indexInflPoint;
// }

// console.log("inflection:", inflection(test6));

// // challenge 3
// // Write a javascript function that takes in a list of prices, returns the highest sell-off margin in the list:

// function highestSellOff(p) {
//     // p.sort((a, b) => a - b);
//     // return p[p.length - 1] - p[0];

//     return Math.max(...p) - Math.min(...p);
// }

// console.log(
//     "highestSellOff:",
//     highestSellOff([1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 10, 11])
// );

// shortestRoute = (word) => {
//     // split word into an array of characters
//     const wordArr = word.split("");
//     let distance = [];
//     let shortest = 0;

//     // map through each character, assigning distance
//     wordArr.map((l) => {
//         console.log("charcode", l.charCodeAt(0) - 97);
//         distance.push(l.charCodeAt(0) - 97);
//     });
//     console.log("distance arr:", distance);

//     // loop through the distance array and finding the difference between each value
//     for (let i = 0; i < distance.length - 1; i++) {
//         if (distance[i] > distance[i + 1]) {
//             let diff = distance[i] - distance[i + 1];
//             // if distance is greater than half the route -26 to go the other way
//             diff > 13 ? (shortest += 26 - diff) : (shortest += diff);
//         } else {
//             let diff = distance[i + 1] - distance[i];
//             diff > 13 ? (shortest += 26 - diff) : (shortest += diff);
//         }
//     }

//     console.log("shortest:", shortest);

//     return shortest;
// };

// console.log(shortestRoute("azj"));

// // ceaser cipher

// //check if letter is uppercase
// function isUpperCase(str) {
//     return str === str.toUpperCase();
// }

// function caesarCipher(s, k) {
//     let decipher = "";

//     //decipher each letter
//     for (let i = 0; i < s.length; i++) {
//         //if letter is uppercase then add uppercase letters
//         if (
//             s.charCodeAt(i) < 65 ||
//             s.charCodeAt(i) > 122 ||
//             (s.charCodeAt(i) > 90 && s.charCodeAt(i) < 97)
//         ) {
//             decipher += String.fromCharCode(s.charCodeAt(i));
//         } else if (isUpperCase(s[i])) {
//             decipher += String.fromCharCode(
//                 ((s.charCodeAt(i) + k - 65) % 26) + 65
//             );
//         } else {
//             //else add lowercase letters
//             decipher += String.fromCharCode(
//                 ((s.charCodeAt(i) + k - 97) % 26) + 97
//             );
//         }
//     }

//     return decipher;
// }
// console.log(caesarCipher("S", 4));

// Create 2 functions:
// 1 that returns the longest palindrome in a string,
// 1 that returns the total number of palindromes in a string (excluding single letters)

const longestPalindrome = (word) => {
    const wordArr = word.split("");
    let last = word.length - 1;
    let palindrome = [];

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < last; j++) {
            let word2 = [];
            if (!wordArr[i - j] || !wordArr[i + j]) {
                continue;
            }
            if (wordArr[i - j] === wordArr[i + j]) {
                console.log("1st", wordArr[i - j]);
                console.log("2nd", wordArr[i + j]);

                word2.push(wordArr[i + j]);
                word2.unshift(wordArr[i - j]);
            }
            console.log(word2);
        }
        // word2.length > 0 ? palindrome.push(word2) : console.log("hi");
    }
    console.log(palindrome);

    // then do a .length check to find longest
};
longestPalindrome("babad");
