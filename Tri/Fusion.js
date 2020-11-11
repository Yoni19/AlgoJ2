const Fusion = (n) => {
    let comparaison = 0;

    const merge = (left, right) => {
        let result = [];

        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while (left.length) result.push(left.shift());
        while (right.length) result.push(right.shift());

        return result;
    }

    const FusionSort = (p) => {
        comparaison++;
        if (p.length < 2) return p;
        let middle = Math.floor(p.length / 2);
        let left = p.slice(0, middle);
        let right = p.slice(middle, p.length);

        return merge(FusionSort(left), FusionSort(right));
    }

    FusionSort(n);
    console.log(`Tri Fusion: ${comparaison} comparaisons. Resulat :`, n)
    return FusionSort(n);

}










module.exports = Fusion