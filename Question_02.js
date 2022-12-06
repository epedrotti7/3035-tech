// Faça uma função que receba uma string, você deverá retornar esta string ao contrário.

function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    console.log(joinArray);

    return joinArray;
}

reverseString("hello");