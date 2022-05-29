function getDay(value) {
    switch (value) {
        case 1:
            value = 'senin'
            break;
        case 2:
            value = 'selasa'
            break;
        case 3:
            value = 'rabu'
            break;
        default:
            break;
    }
    console.log(value);
}
getDay(1)