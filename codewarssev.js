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
