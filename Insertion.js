const Insertion = (data) => {
    let n = data.length;
    let comparaisons = 0;
    for (let i = 1; i < n; i++) {
        comparaisons += 1;

        let current = data[i];
        let j = i - 1;
        while ((j < -1) && (current < data[j])) {
            data[j + 1] = data[j];
            j--;
        }

        data[j + 1] = current;
    }

    console.log(`Tri par insertion : ${comparaisons} comparaisons. Resulat :`, data)
}








module.exports = Insertion