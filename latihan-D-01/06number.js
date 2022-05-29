//PR IDR tdk bisa Rp

const n = 189.333
console.log(typeof n);
console.log(parseFloat(n)); //dikonvert ke float
console.log(parseInt(n));   //dikonvert ke integer, di integer tdk ada koma

const a = '123.333'
console.log(a);
console.log(typeof a);
console.log(Number(a));
console.log(typeof Number(a));  //merubah sring menjadi number

const b = 'sekti'
console.log(Number(b));

const round = 123.456789
console.log(round);
console.log(round.toFixed(2));          //mencetak 2 angka dibelakakng koma
console.log(round.toExponential(2));    //ekponensial

let formatCurrency = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(round)
console.log(formatCurrency);

console.log(isNaN('sekti'));    //mengecek 'sekti' apakah bukan number? true
console.log(isNaN('456'));      //mengecek '456' apakah bukan number? false
