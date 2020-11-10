function Rapide(array) {
    let comparaisons = 0;
    if (array.length < 2) {
        return array;
    }

    var pivot = array[0];
    var lesserArray = [];
    var greaterArray = [];

    for (var i = 1; i < array.length; i++) {
        comparaisons++;
        if (array[i] > pivot) {
            greaterArray.push(array[i]);
        } else {
            lesserArray.push(array[i]);
        }
    }

    console.log(`Tri Rapide : ${comparaisons} comparaisons. Resulat :`, array)
}


module.exports = Rapide;