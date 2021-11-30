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
