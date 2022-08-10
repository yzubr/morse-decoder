const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let arx = '**********';
    for (let i = 0; i <= expr.length; i += 10) {
        arr.push(expr.slice(i,i+10).replace(/11/g, "-").replace(/10/g, ".").replace(/0/g, ""));
    };
    let resArr = [];
    for (let j = 0; j <= arr.length; j++) {
        if (arr[j] != '**********') resArr.push(MORSE_TABLE[arr[j]]);
        else resArr.push(' ');
    };
    let res = resArr.join('');
    //res.replace(/'**********'/g,' ');
    return res;
}

module.exports = {
    decode
}