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
