let checkSum = (array, sum) => {
    let hashMap = {},
        counter = 0

    for (let i = 0; i < array.length; i++) {
        if (hashMap[array[i]]) {
            counter++
        } else {
            hashMap[sum - array[i]] = array[i];
        }
    }
    if (counter > 0) {
        return true
    } else return false
}
console.log(checkSum([1, 3, 7, 8, 44, 55, 1], 16));