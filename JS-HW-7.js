const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

// ===================================

const texts = ["Maiami", "Los-Angeles", "NewGarsy"];
texts.push("NewYork");
console.log(texts);

// =======================================================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let result = 0;
for (let index = 0; index < arr.length; index += 1) {
    result += arr[index]
}
console.log(result);

// ======================================================================

const elements = [1, 2, 3, 4, 5];
for (let index = 0; index < elements.length; index += 1) {
    console.log(elements[index]);
}

// ====================================================================================

const letters = ["aaaaaa", "bbbbbbbbbbbbbbbbbb", "ccc", "dddddddddddd", "eee", "f", "ggggggg", "hhhhhhh"];
for (let index = 0; index < letters.length; index += 1) {
    if (letters[index].length < 5) {
        continue
    }
    console.log(letters[index]);
}

// ====================================================================================================

const masuv = [1, 2345, 6363, 623623, 2343, 234642572, 153453];
let highterNumber = masuv[0];
for (let index = 0; index < masuv.length; index += 1) {
    if (highterNumber < masuv[index]) {
        highterNumber = masuv[index]
    }    
}
console.log(highterNumber);

// ====================================================================================================================

const parniNumbers = [1, 2, 3, 4, 5, 6, ,7 ,8 , 9, 10, 11, 12, 13, 14, 15];
for (let index = 0; index < parniNumbers.length; index += 1) {
    if (parniNumbers[index]%2 !== 0) {
        continue
    }
    console.log(parniNumbers[index]);
    
}