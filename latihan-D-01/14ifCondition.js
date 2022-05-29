const score = 70
if (score >= 90) {                      //jika score lebih dari sama dengan 90 maka A
    console.log('A');
}
else if(score < 90 && score >= 80) {    //jika score kurang dari 90 & lebih dari sama dengan 80 maka B
    console.log('B');
}
else if(score < 80 && score >= 70) {    //jika score kurang dari 80 & lebih daro sama dengan 70 maka C
    console.log('c');
}
else {
    console.log('D');                   //jika tidak ada kondisi diatas maka D
}

function getScore(score) {
    let grade;
    if (score >= 80) {
        grade = 'A';
    }
    else if (score < 80 && score >= 70) {
        grade = 'B';
    }
    else if (score < 70 && score >= 60) {
        grade = 'C';
    }
    else {
        grade = 'D';
    }
    console.log(grade);
}
getScore(85);