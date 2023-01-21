/**
 * Dau vao
 *  - Nhap vao 1 so co 2 chu so
 * Xu ly
 *  - Lay so hang don vi: so % 10
 *  - Lay so hang chuc:  so / 10
 *  - Tong 2 so
 * Dau ra
 *  - tong 2 ky so
 */
// Khai bao
var twoDigitNumber = 44;
var unitsDigit, tensDigit, sumOfDigit = 0;
// Xu ly
unitsDigit = parseInt(twoDigitNumber % 10);
tensDigit = parseInt(twoDigitNumber / 10);
sumOfDigit = tensDigit + unitsDigit;
// Dau ra
console.log("Tong 2 ky so", sumOfDigit);