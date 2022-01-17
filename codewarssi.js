// Decoding a message

function decode(message) {
    const reversedAlpha = [
        "z",
        "y",
        "x",
        "w",
        "v",
        "u",
        "t",
        "s",
        "r",
        "q",
        "p",
        "o",
        "n",
        "m",
        "l",
        "k",
        "j",
        "i",
        "h",
        "g",
        "f",
        "e",
        "d",
        "c",
        "b",
        "a",
    ];

    const msgArr = message.split("");

    const decode = msgArr.map((w) => {
        if (w.match(/[\w]/g)) {
            return reversedAlpha[w.charCodeAt(0) - 97];
        } else return "-";
    });
    return decode.join("").replace(/-/g, " ");
}
console.log(decode("hello"));

function order(words) {
    // split word
    // remove alphanumeric
    // sort numbers
    // useindexof to push into new array
    // .join
    let orderArr = [];

    const wordArr = words.split(" ");
    console.log("wordArr:", wordArr);

    const newArr = [...wordArr].map((w) => {
        return w.replace(/[a-zA-Z]/g, "");
    });
    console.log("newArr:", newArr);

    const sorted = [...newArr].sort((a, b) => a - b);
    console.log("sorted:", sorted);

    console.log("test1:", newArr.indexOf("2"));

    sorted.map((w) => {
        console.log(newArr.indexOf(w));
        orderArr.push(wordArr[newArr.indexOf(w)]);
    });

    console.log("orderArr:", orderArr);

    return orderArr.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));

// clever solution
// \d is the digit character class
// .match, a method that retrives the results of a matching string against a regex expression

function order(words) {
    return words
        .split(" ")
        .sort((a, b) => {
            return a.match(/\d/) - b.match(/\d/);
        })
        .join(" ");
}

console.log("order2:", order("is2 Thi1s T4est 3at"));

// two sum

function twoSum(numbers, target) {
    // indexOf()

    let valid = [];

    console.log(numbers);
    console.log(target);

    numbers.sort((a, b) => {
        if (a + b === target) {
            valid.push(a, b);
        }
    });
    console.log("valid:", valid);
}

console.log(twoSum([1, 2, 3], 4));

// sum of digits/digital Root

function digital_root(n) {
    let num = n;
    let sumCounter = num;

    while (sumCounter >= 10) {
        const newArr = num.toString().split("");
        console.log(newArr);

        let numArr = newArr.map((n) => (n = parseInt(n)));
        console.log(numArr);

        let sum = numArr.reduce((acc, num) => {
            return acc + num;
        });
        num = sum;
        sumCounter = sum;
        console.log(sumCounter);
    }

    console.log("sumcounter:", sumCounter);
    return sumCounter;
}

console.log(digital_root(456));

// clever solution:

function digital_root(n) {
    return ((n - 1) % 9) + 1;
}

// STRING INCREMENTOR

//ATTEMPT
function incrementString(string) {
    // return incrementedString
    if (string === "") {
        return "1";
    }

    //   if (!string.match(/[a-z]+/gi)){
    //     let test = parseInt(string) + 1;
    //     return test.toString();
    //   }

    const newStr = string.match(/[a-z]+|[^a-z]+/gi);
    console.log("newStr:", newStr);

    // if (string.match(/[\W]+/gi)) {
    //     newStr[0] = newStr[0] + 1;
    //     return newStr[0];
    // }

    if (newStr.length === 1) {
        const newNum = parseInt(newStr[0]) + 1;
        return newNum.toString();
    }

    const test = newStr.map((x) => {
        if (x.match(/\d+/g)) {
            const num = parseInt(x) + 1;
            const diff = x.length - num.toString().length;
            return diff > 0 ? "0".repeat(diff) + num.toString() : num;
        } else return x;
    });
    console.log("newstr2", newStr);
    console.log("test:", test);
    console.log("testJoin:", test.join(""));
    return test.join("");
}

console.log("incrementString:", incrementString("foo"));

// SOLUTION // https://www.youtube.com/watch?v=DAIZ-0y2F8I

function incrementString2(string) {
    // select '\d' digits 0 or more and pass that as $ = 'match', second parameter(which is the newSubStr replacemen): we pass a function instead of a value
    return string.replace(/\d*$/, (match) => {
        if (!match) return "1";
        const numStr = String(parseInt(match) + 1);
        const diff = match.length - numStr.length; // finding the difference so we can add the 0 digits back to number
        return diff > 0 ? "0".repeat(diff) + numStr : numStr;
    });
}

console.log("incrementString2:", incrementString2("foo"));

// statistics for an athletic association

function stat(strg) {
    console.log("strg:", strg);

    const newArr = strg.split(",").map((x) => {
        return x.split("|");
    });
    console.log("newArr:", newArr);

    let total = [0, 0, 0];

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[1].length; j++) {
            let num = parseInt(newArr[i][j]);
            console.log(num);
            total[j] += num;
        }
    }
    console.log("total:", total);
    console.log("timeToSecs:", timeToSecs(total));
}

// convert [ 6, 128, 146 ] to seconds
// 29426s / 5 to get average = 5885.2
// 5885.2 /60 for mins = 98.086666
// ANS / 60 = 1.63477... -> gives us hours
// take the remainding decimal ANS - 1 = 0.63477 ->  * 60 to get mins = 0.63477 * 60 = 38.08666mins
//again take the remainding decimal ANS - 38 = 0.08666 -> *60 to get secs = 5.2s

const timeToSecs = (timeArr) => {
    let seconds = 0;

    seconds += timeArr[0] * 60 * 60;
    seconds += timeArr[1] * 60;
    seconds += timeArr[2];
    return seconds;

    // /.+(?<=[\.])/ positive look behind
};
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));

// strongest even number in an interval

function strongestEven(n, m) {
    console.log(n, m);

    const nmArr = numberInt(n, m);
    console.log("nmArr", nmArr);
    let countArr = [];

    for (let i = 0; i < nmArr.length; i++) {
        let num = nmArr[i];
        let counter = 0;

        while (num % 2 == 0) {
            counter += 1;
            num /= 2;
            if (num === 0) {
                break;
            }
        }
        countArr.push(counter);
    }
    console.log(countArr);

    return nmArr[countArr.indexOf(Math.max(...countArr))];
}

// might need to sort out absolute value
const numberInt = (n, m) => {
    let newArr = [];
    for (let i = n; i <= m; i++) {
        newArr.push(i);
    }
    return newArr;
};

// strongest interval baselog test

function strongestEven(n, m) {
    console.log(n, m);

    const nmArr = numberInt(n, m);
    console.log(nmArr);

    console.log("test baselog6:", getBaseLog(8));

    for (let i = 0; i < nmArr.length; i++) {
        nmArr[i] = getBaseLog(nmArr[i]);
    }
    console.log("test2 nmarr:", nmArr);
    const maxLog = Math.max(...nmArr);
    console.log("math.max:", Math.max(...nmArr));

    return Math.pow(2, Math.max(...nmArr));
}

// logarithm function

const getBaseLog = (y) => {
    return Math.log(y) / Math.log(2);
};

// seperate function to create an array of closed interval numbers
// const numberInt = (n, m) => {
//     let newArr = [];
//     for (let i = n; i <= m; i++) {
//         if (i % 2 === 0) {
//             newArr.push(i);
//         } else continue;
//     }
//     return newArr;
// };

// create a phone number

function createPhoneNumber(numbers) {
    let first = "";
    let second = "";
    let third = "";

    for (let i = 0; i < numbers.length; i++) {
        if (i <= 2) {
            first += numbers[i];
        } else if (i <= 5) {
            second += numbers[i];
        } else {
            third += numbers[i];
        }
    }

    return `(${first}) ${second}-${third}`;
}

// clever

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace("x", numbers[i]);
    }

    return format;
}

// strongesr even

function strongestEven(n, m) {
    let curr = n;
    for (let s = 1; curr + s <= m; s *= 2) {
        if ((curr + s) % (s * 2) === 0) curr += s;
    }
    return curr;
}

// find the odd int https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(a) {
    // count multiple values
    const counts = {};

    a.forEach((x) => {
        console.log("x", x);
        counts[x] = (counts[x] || 0) + 1;
    });

    console.log("counts:", counts);

    // convert object values and keys to an array
    const countVal = Object.values(counts);
    const countKey = Object.keys(counts);

    console.log("countVal:", countVal);
    console.log("countKey:", countKey);

    // match odd count with key to return the odd int
    let answer = 0;

    countVal.map((value) => {
        if (value % 2 !== 0) {
            answer = countKey[countVal.indexOf(value)];
        }
    });
    return parseInt(answer);
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// clever solution

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// Duplicate Encoder

function duplicateEncode(word) {
    // duplicates = )
    // unique = (
    let newArr = [];
    let trackArr = [];

    const charArr = word.toLowerCase().split("");
    const len = charArr.length;
    console.log(len);
    console.log("charArr:", charArr);

    for (let i = 0; i < len - 1; i++) {
        const letter = charArr.shift();

        if (charArr.includes(letter) || trackArr.includes(letter)) {
            newArr.push(")");
        } else newArr.push("(");
        trackArr.push(letter);
    }

    console.log("trackarr after loop:", trackArr);
    console.log("charArr after loop:", charArr);
    console.log("test:", trackArr.includes(charArr));

    trackArr.includes(charArr[0]) ? newArr.push(")") : newArr.push("(");

    console.log(newArr);
    return newArr.join("");
}

console.log(duplicateEncode("Success"));

// clever solution using indexOf

function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split("")
        .map(function (a, i, w) {
            console.log("testindexof:", w.indexOf(a) == w.lastIndexOf(a));
            // if the first indexOf is the same as the last indexOf, we know the element is unique thus returning "("
            return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
        })
        .join("");
}

console.log(duplicateEncode("Success"));

// take ten minute walk

function isValidWalk(walk) {
    //insert brilliant code here
    console.log(walk);
    let n = 0;
    let e = 0;
    let s = 0;
    let w = 0;

    for (let i = 0; i < walk.length; i++) {
        if (walk[i] == "n") {
            n += 1;
        }
        if (walk[i] == "e") {
            e += 1;
        }
        if (walk[i] == "s") {
            s += 1;
        }
        if (walk[i] == "w") {
            w += 1;
        }
    }

    console.log("n", n);
    console.log("e", e);
    console.log("s", s);
    console.log("w", w);

    return n === s && e === w && walk.length === 10 ? true : false;
}

function off(n) {
    // 0 === off 1 === on
    // filter and return indexOf 0's to find off switches

    //   0000

    const newArr = new Array(n).fill(0);
    console.log(newArr);

    let switchCounter = 1;

    for (let i = 0; i < n; i++) {
        switchCounter++;
        for (let j = 0; j < n; j++) {
            if (j * switchCounter >= n) {
                continue;
            } else {
                newArr[j * switchCounter] === 0
                    ? newArr[j * switchCounter]++
                    : newArr[j * switchCounter]--;
            }
        }
    }

    console.log("newArr:", newArr);

    newArr[0] = 0;

    return newArr.filter((n) => {
        if (n === 0) {
            return newArr.indexOf(n);
        }
    });
}

// off(10) should === 0110100100;

console.log("off", off(10));

// make the deadfish swim

// Return the output array, and ignore all non-op characters
function parse(data) {
    const clean = data.replace(/[^isdo]/g, "");

    let num = 0;
    let deadfish = [];

    clean.split("").map((w) => {
        if (w === "i") {
            num++;
        }
        if (w === "d") {
            num--;
        }
        if (w === "s") {
            num = Math.pow(num, 2);
        }
        if (w === "o") {
            deadfish.push(num);
        }
    });

    return deadfish;
}

// tortoise racing

function race(v1, v2, g) {
    // your code

    let newArr = [0, 0, 0];

    const diffSpeed = v2 - v1; // finding the diff in speed between tortoise
    const catchHour = g / diffSpeed; // distance / feetperhour diff

    catchHour < 1 ? (newArr[0] = 0) : (newArr[0] = Math.floor(catchHour));

    const catchMin = (catchHour - Math.floor(catchHour)) * 60;

    newArr[1] = Math.floor(catchMin);

    console.log("catchMin:", catchMin);
    console.log("catchMinArr:", newArr[1]);

    const catchSec = (catchMin - Math.floor(catchMin)) * 60;

    newArr[2] = Math.floor(catchSec);

    console.log(catchSec);
    console.log(newArr);
    return newArr;
}

// clever
// 3600 seconds in an hour

function race(v1, v2, g) {
    if (v1 >= v2) {
        return null; //B will never catch A
    }

    let newArr = [];

    let diffSpeed = v2 - v1;

    let feetInSeconds = (g * 3600) / diffSpeed;

    newArr[0] = Math.floor(feetInSeconds / 3600);
    console.log(newArr[0]);

    newArr[1] = Math.floor((feetInSeconds % 3600) / 60);
    console.log(newArr[1]);

    newArr[2] = Math.floor((feetInSeconds % 3600) % 60);
    console.log(newArr[2]);

    return newArr;
}
