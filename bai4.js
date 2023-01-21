/**
 * Dau vao
 *  - chieu dai, chieu rong cua hinh chu nhat
 * Xu ly
 *  - dien tich = dai * rong
 *  - chu vi = dai + rong
 *  - chu vi = chu vi / 2
 * Dau ra
 *  - chu vi
 *  - Dien tich
 */
// Khai bao
var recLength = 5;
var recWidth = 4;
var perimeter = 0;
var area = 0;
// Xu ly
area = recLength * recWidth;
perimeter = recLength + recWidth;
perimeter *= 2;
// Dau ra
console.log("Chu vi:", perimeter);
console.log("Dien Tich:", area);