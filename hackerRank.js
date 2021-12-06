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
