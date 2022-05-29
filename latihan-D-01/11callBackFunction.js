// function SayHai() {
//     console.log('Hai');
// }
// function Nama() {
//     console.log('saya Sekti');
// }

// function all(callBackFunction) {
//     callBackFunction(),
//     Nama()
// }
// all(SayHai)

function salam() {
    console.log('Assalamu\'alaikum');
}
function name() {
    console.log('Mas Sekti');
}
function nembak() {
    console.log('Aku Sayang Banget Sama Kamu');
}

function all(callBackFunction) {
    callBackFunction(),
    name(),
    nembak()
}
all(salam)