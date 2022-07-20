We call a "lucky" ticket having a number in which the sum of the first half of the digits is equal to the sum of the second half of the digits. The numbers can be of any length, with the only condition that the number of digits is always even, for example: 33, 2341 and so on.

The ticket with the number 385916 is a lucky one, since 3 + 8 + 5 === 9 + 1 + 6. The ticket with the number 231002 isn't a lucky one, since 2 + 3 + 1 !== 0 + 0 + 2.

Implement a function that checks whether the number is lucky (the number is always a string). The function should return true if the ticket is lucky, otherwise, it should return false.

Usage:
isLuckyTicket('385916'); // true
isLuckyTicket('231002'); // false
isLuckyTicket('1222');   // false
isLuckyTicket('054702'); // true
isLuckyTicket('00');     // true