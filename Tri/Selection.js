const Selection = (tab) => {

    let comparaisons = 0;

    for (let i = 0; i < tab.length; i++) {
        //stocker l'index de l'élément minimum
        let min = i;
        for (let j = i + 1; j < tab.length; j++) {
            comparaisons++;
            if (tab[j] < tab[min]) {
                // mettre à jour l'index de l'élément minimum
                min = j;
            }
        }
        let tmp = tab[i];
        tab[i] = tab[min];
        tab[min] = tmp;
    }

    console.log(`Tri par selection : ${comparaisons} comparaisons. Resulat :`, tab)
};


module.exports = Selection;