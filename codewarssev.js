//Highest and Lowest

function highAndLow(numbers) {
    const sortedArr = numbers.split(" ").sort((a, b) => a - b);
    return `${sortedArr[sortedArr.length - 1]} ${sortedArr[0]}`;
}

// square every digit

function squareDigits(num) {
    const sqrArr = num
        .toString()
        .split("")
        .map((n) => {
            return Math.pow(n, 2);
        });
    return parseInt(sqrArr.join(""));
}

//disemvowel trolls

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "");
}
