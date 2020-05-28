function percentageRandom_aa() {
    let percentageArray = [40, 70, 100];
    let random = Math.random() * 100;
    for (let index = 0; index < percentageArray.length; index++) {
        const percentage = percentageArray[index];
        if (percentage >= random) {
            return index;
        }
    }
}

for (let index = 0; index < 100; index++) {
    console.log(percentageRandom_aa());
}

