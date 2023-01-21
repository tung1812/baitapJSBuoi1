/**
 * Mo hinh 3 khoi
 * Dau vao
 *  - So ngay lam
 *  - hang so (Luong 1 ngay): 100.000
 * Xu ly
 *  - luong 1 ngay * so ngay lam
 * Dau ra
 *  - Luong nhan vien
 */

// Khai bao bien va hang so
var workingDays = 20;
const payPerDay = 100000;
var salary = 0;
// Xu ly
salary = workingDays * payPerDay;
// Dau ra
console.log("Salary:", salary);