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

// Will you survive the zombie onslaught?

function zombie_shootout(zombies, range, ammo) {
    //your code goes here

    // enough ammo enough distance
    // enough ammo not enough distance
    // not enough ammo enough distance
    // not enough ammo not enough distance

    // zombie distance
    const zomDist = zombies * 0.5;

    if (zomDist < range && zombies <= ammo) {
        return `You shot all ${zombies} zombies.`;
    }

    if (zomDist > range && zombies <= ammo) {
        return `You shot ${range * 2} zombies before being eaten: overwhelmed.`;
    } else {
        return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
    }
}

// incrementer

function incrementer(nums) {
    return nums.map((n, index) => {
        let num = n + index + 1;
        return num > 9 ? num % 10 : num;
    });
}

// two to one

function longest(s1, s2) {
    return s1
        .concat(s2)
        .replace(/(.)(?=.*\1)/g, "")
        .split("")
        .sort()
        .join("");
}

// https://stackoverflow.com/questions/19301806/regex-remove-repeated-characters-from-a-string-by-javascript

// pair zero

// function pairZeros(arr) {
//     let zCounter = 0;
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0 && zCounter === 0) {
//             newArr.push(arr[i]);
//             zCounter += 1;
//         } else if (arr[i] === 0 && zCounter === 1) {
//             zCounter -= 1;
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// clever

function pairZeros(arr) {
    var seenZero = 0;
    return arr.filter(function (num) {
        console.log("seenzero", seenZero);
        return num != 0 || seenZero++ % 2 == 0;
    });
}

console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]));

// previous multiples of 3

const prevMultOfThree = (n) => {
    //your solution

    if (n % 3 === 0) {
        return n;
    }

    let numTrack = n;

    while (numTrack % 3 !== 0) {
        numTrack = Math.floor(numTrack / 10); // shaves off last digit
    }

    return numTrack % 3 !== 0 || numTrack == 0 ? null : numTrack;
};

// java fake binary

// import java.util.regex.Matcher;
// import java.util.regex.Pattern;

// public class FakeBinary {
//     public static String fakeBin(String numberString) {
//       System.out.println(numberString);
//       String bin1 = numberString.replaceAll("[0-4]", "0");
//       System.out.println(bin1);

//       String bin2 = bin1.replaceAll("[^0-4]", "1");
//       System.out.println(bin2);

//         return bin2;
//     }
// }
