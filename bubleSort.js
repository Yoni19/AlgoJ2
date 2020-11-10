const bubbleSort = (data) => {
    let comparaison = 0;
    let swapp;
    let n = data.length - 1;
    let x = data;
    do {
        swapp = false;
        for (let i = 0; i < n; i++) {
            comparaison++;
            if (x[i] > x[i + 1]) {
                let temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    console.log(`Tri par bulle : ${comparaison} comparaisons. Resulat :`, data)
        //return x;
}







module.exports = bubbleSort