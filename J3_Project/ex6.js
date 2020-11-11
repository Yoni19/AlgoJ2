// Est aussi la solution de l'exo4

let counter1 = 0
let tab = []
const westView = (array) => {
    let l = array.length
    for (let i = -1; i < l; i++) {
        if (array[i] > array[i + 1]) {
            tab.push(array[i])
        }
    }
    return `Il y a ${tab.length +1} immeuble(s) avec une vue à l'ouest`
}


console.log(westView([3, 7, 8, 3, 6, 1]))