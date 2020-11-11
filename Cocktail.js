const cocktail = (n) => {
    let comparaison = 0;
    let is_Sorted = true;

    while (is_Sorted) {
        for (let i = 0; i < n.length; i++) {
            comparaison++;
            if (n[i] > n[i + 1]) {
                let tmp = n[i];
                n[i] = n[i + 1];
                n[i + 1] = tmp;
                is_Sorted = true;
            }
        }

        if (!is_Sorted) break;

        is_Sorted = false;
        for (let j = n.length - 1; j >= 0; j--) {
            comparaison++;
            if (n[j - 1] > n[j]) {
                let tmp = n[j];
                n[j] = n[j - 1];
                n[j - 1] = tmp;
                is_Sorted = true;
            }
        }
    }

    console.log(`Tri Cocktail: ${comparaison} comparaisons. Resulat :`, n)
    return n;
};

module.exports = cocktail