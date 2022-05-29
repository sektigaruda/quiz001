function SayHello() {           //function tanpa parameter
    return 'Hai Kawan-kawan'
}
console.log(SayHello());

function MyName(firstName) {        //function dengan satu parameter
    return `Hai saya ${firstName}`
}
console.log(MyName('Sekti'));

function MyName2(firsName, lastName) {               //function dengan dua parameter
    return `Hai Nama Saya ${firsName}${lastName}`
}
console.log(MyName2('Sekti', ' Mulia'));

function myFullName(firstName, middleName, lastName) {  //function tiga parameter
    return `Hello Gess Gua ${firstName}${middleName}${lastName}`
}
console.log(myFullName('Sekti',' Indra',' Mulia'));