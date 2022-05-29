const sayHai = () => {
    console.log('Hai');
}
const nama = () => {
    console.log('Jendro');
}

const all = (callBack) => {
    callBack(),
    nama()
}
all(sayHai)