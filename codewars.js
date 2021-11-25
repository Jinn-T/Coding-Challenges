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
