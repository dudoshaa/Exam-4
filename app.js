/*1.uch xonali son berilgan .Jumlani rostlikka tekshiring "Ushbu sonlarning barcha raqami har xi" */
// let a = 123;

// let birinchiSon = (a - (a % 100)) / 100;
// let ikkinchiSon = ((a % 100) - (a % 10)) / 10;
// let oxirgiSon = a % 10;

// if (
//   birinchiSon !== ikkinchiSon &&
//   ikkinchiSon !== oxirgiSon &&
//   birinchiSon !== oxirgiSon
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/*2*/
// let a = 2;
// let b = 7;
// let sum = 0;
// for (i = a; i <= b; i++) {
//   sum += i ;
// }
// console.log(sum);

/*3.*/
// let sortABC = [10, 5, 8];
// let result = sortABC.sort((a, b) => a - b);
// console.log(result);

/*4. */
// let sortABC = [10, 5, 8];
// let result = sortABC.sort((a, b) => a - b);
// console.log(result);

/*5. */
// function isPalindrom(n) {
//   if (n <= 0) {
//     return false;
//   }
//   const str = n.toString();
//   const reversed=str.split('').reverse().join('')
//   const result=str===reversed
//   return result
// }
// console.log(isPalindrom(1331));

/*6. */

// function getDividersNumberAndSum(n) {
//   let count = 0;
//   let sum = 0;
//   for (i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//       sum += i;
//     }
//   }
//   return `${count} , ${sum}`;
// }
// console.log(getDividersNumberAndSum(12));

/*7. */

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// let correctCount = 0;

// let incorrectCount = 0;

// for (let question in rightAnswers) {
//   if (rightAnswers[question] == myAnswers[question]) {
//     correctCount++;
//   } else [incorrectCount++];
// }
// console.log(`To'g'ri javoblar soni: ${correctCount} ta`);
// console.log(`Noto'g'ri javoblar soni: ${incorrectCount} ta`);

/*8. */

// const names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// let result = {};

// for (i = 0; i < names.length; i++) {
//   result[names[i]] = names[i].length;
// }
// console.log(result);

/*9 */

// let sentence = "George Raymond Richard Martin";

// let result = sentence
//   .split(" ")
//   .map((word) => word.charAt(0))
//   .join("");

//   console.log(result)

/*10 */
let arr = [1, 2, 3, 2, 4, 1, 5, 3, 6];

let even = arr.filter((value, index, self) => {
  return value % 2 === 0;
});
let odd = arr.filter((value, index, self) => {
  return value % 2 !== 0;
});
console.log(`Juft : ${even} Toq: ${odd}`);
