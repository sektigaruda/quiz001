const phone = 'tlp:' + 6285884837769
console.log(phone);                 //menampilkan dengan penggabungan +
console.log(typeof phone);          //menampilkan tipe datanya 'string'
console.log(phone.length);          //menampilkan panjang index 
console.log(phone.charAt('6'));     //mencari karekter di index 6 dimulai dari 0,1..dst
console.log(phone.startsWith('t')); //apakah berawalan huruf t? true
console.log(phone.startsWith('k')); //apakah berawalan huruf k? false
console.log(phone.endsWith('9'));   //apakah berakhiran 9? true
console.log(phone.endsWith('7'));   //apakah berakhiran 7? false
console.log(phone.includes('69'));  //apakah ada 69 di dlm string? true
console.log(phone.indexOf('9'));    //angka 9 diurutan keberapa? dimulai dari 0,1..dst
console.log(phone.substr(4,2));     //mencetak index ke-4 sepanjang 5x dimulai dari 0

const address = `Jl.Bawang Putih No.90, babakan madang, bogor ${phone}` // $(phone) menggabungkan 2 const/sring
console.log(address);
console.log(address, phone); //penggabungan
console.log(address.replace('bogor', 'jakarta'));   //merubah isi string bogor menjadi jakarta
console.log(address.toLocaleUpperCase());   //merubah menjadi huruf besar semua
console.log(address.toLocaleLowerCase());   //merubah menjadi huruf kecil semua
