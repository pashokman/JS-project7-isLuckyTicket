const sumOfDigits = (str) => {
    let result = 0;

    for (let index = 0; index < str.length; index++) {
        result += Number(str[index]);    
    }

    return result;
}

const isLuckyTicket = (str) => {

    if (str.length % 2 === 0) {
        let firstHalf = str.slice(0, str.length / 2);
        let secondHalf = str.slice(str.length / 2, str.length);
        
        if (sumOfDigits(firstHalf) === sumOfDigits(secondHalf)) {
            return `${str} - isLuckyTicket`;
        } else {
            return `${str} - is not a LuckyTicket`
        }
    } else {
        return `${str} - is not a LuckyTicket`;
    }
}

console.log(isLuckyTicket('385916')); // true
console.log(isLuckyTicket('3859165')); // false
console.log(isLuckyTicket('231002')); // false
console.log(isLuckyTicket('1222'));   // false
console.log(isLuckyTicket('054702')); // true
console.log(isLuckyTicket('00'));     // true