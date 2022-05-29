/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n){
   if (isNaN(n)) {
       return n + " is not number, try again..."
   }
   else if (n >= 10000) {
       return n + " harus lebih kecil dari 10000"
   }
   else {
       //accumulator = '0' + currentValue = 1 => 1
       //accumulator = 1 + currentValue = 2 => 3
       //accumulator = 3 + currentValue = 3 => 6
       //accumulator = 6 + currentValue = 4 => 10

       return n
        .toString()                 //konversi ke string
        .split("")                  //string ke array
        .map(Number)
        .reduce(function (a, b) {   //(accumulator, currentValue)
            return a + b;
        });
   }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...