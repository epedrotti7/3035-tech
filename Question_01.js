// Faça uma função que receba um array composto de [ 1, 2, 3, 4, 5, 6, 6 ], 
// você deverá retornar o segundo maior número deste array.

function getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
}

function getSecondHighestNumber(arr) {
    let maxNumberOfArray = getMaxOfArray(arr);
    let secondHighestNumber;
    arr.forEach((value) => {
        if ((maxNumberOfArray - value) === 1 && secondHighestNumber !== value) {
            secondHighestNumber = value
        }
    })

    console.log(secondHighestNumber);

    return secondHighestNumber;
}

getSecondHighestNumber([1, 2, 3, 4, 5, 6, 6]);