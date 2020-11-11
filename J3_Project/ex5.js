let numbers = [10, 14, 3, 7, 8, 4, 5, 6]

const checkSum = (k) => {

    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i];
        let others = numbers.slice(i + 1)
        if (others.map(x => x + current).filter(x => x == k).length) {
            return true
        }
    }
    return false
}


console.log(checkSum(21))