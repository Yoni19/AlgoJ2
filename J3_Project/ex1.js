let numbers = [1, 3, 7, 9, 44, 55, 1]
let counterTrue = 0

const checkSum = (k) => {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length && j !== i; j++) {

            if (numbers[i] + numbers[j] === k) {
                counterTrue++
            }
        }
    }
    if (counterTrue > 0) {
        return true
    } else {
        return false
    }
}


console.log(checkSum(16))