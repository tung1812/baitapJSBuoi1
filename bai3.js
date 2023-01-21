/**
 * Dau vao
 *  - So tien USD
 *  - Hang so (Ty gia USD) = 23.000 VND
 * Xu ly
 *  - So tien USD * ty gia USD
 * Dau ra
 *  - So tien sau quy doi
 */
// Khai bao so tien USD
var usdAmount = 5;
const exchangeRate = 23000;
var finalValue = 0;
// Xu ly
finalValue = usdAmount * exchangeRate;
// Dau ra
console.log("Final Value:" + " " + finalValue + "VND");