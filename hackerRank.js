// prep

//mini max sum

function miniMaxSum(arr) {
    const newArr = arr.sort((a, b) => a - b);
    let minMax = [];

    for (let i = 0; i < 2; i++) {
        let acc = 0;
        for (let j = 0; j < 4; j++) {
            acc += arr[j + i];
        }
        minMax.push(acc);
    }
    return minMax.join(" ");
}
console.log("miniMaxSum:", miniMaxSum([1, 3, 5, 7, 9]));

// lonley integer

function lonelyinteger(a) {
    let newArr = [];

    for (let i = 0; i < a.length; i++) {
        if (newArr.includes(a[i])) {
            let ind = newArr.indexOf(a[i]);
            newArr.splice(ind, 1);
        } else newArr.push(a[i]);
    }
    return newArr;
}

console.log("lonelyinteger:", lonelyinteger([1, 2, 3, 4, 3, 2, 1]));

// clever solution

function lonelyinteger(a) {
    let unique = a.filter((x) => {
        return a.indexOf(x) === a.lastIndexOf(x);
    });

    return unique[0];
}

function gridChallenge(grid) {
    // console.log(grid);
    const sortedArr = grid.map((a) => {
        return a.split("").sort();
    });
    // console.log(sortedArr);

    let counter = 0;
    const yes = "YES";
    const no = "NO";

    for (let i = 0; i < sortedArr[0].length; i++) {
        // console.log("break")
        for (let j = 0; j < sortedArr.length - 1; j++) {
            // console.log("test",sortedArr[j][i])
            if (
                sortedArr[j][i].charCodeAt(0) >
                sortedArr[j + 1][i].charCodeAt(0)
            ) {
                counter += 1;
            }
        }
    }
    // console.log("counter",counter);

    return counter > 0 ? no : yes;
}
