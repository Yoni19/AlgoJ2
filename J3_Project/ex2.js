let counter1 = 0

const westView = (array) => {
    let l = array.length
    for (let i = 0; i < l; i++) {
        for (let j = i; i < l; i++) {
            let counter2 = 0
            if (array[j] < array[i]) {
                counter2++
            }
            if (counter2 > 0) {
                counter1++
            }
        }
    }
    return `Il y a ${(array.length - counter1)} immeuble(s) avec une vue à l'ouest`
}

console.log(westView([3, 7, 8, 3, 6, 1]))