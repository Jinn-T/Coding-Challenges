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
