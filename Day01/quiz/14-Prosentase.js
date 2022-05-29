/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if (isNaN(start) || isNaN(end)) {
        return `${start} or ${end} harus dalam angka`
    }
    else {
        const income = end - start;
        const hasil = Math.floor((income / start) * 100)
        x = hasil;
        if (x >= 0) {
            return `Total kenaikan income ${hasil}%`
        }
        else {
            return `Total penurunan income ${hasil}%`
        }
    }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%


