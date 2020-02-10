function grade(score) {
    if (score > 89) {
        return 'A';
    } else if(score > 79) {
        return 'B';
    } else if(score > 69) {
        return 'C';
    } else if(score > 64) {
        return 'D';
    } else {
        return 'F';
    }
}

for (i = 80; i <= 100; i++) {
    console.log('For ' + i + ' you get a ' + grade(i));
}