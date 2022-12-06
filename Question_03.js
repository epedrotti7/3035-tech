// Faça uma função que retorne apenas as vogais de uma palavra.

function getVowels(string) {
    let Vowels = 'aAeEiIoOuU';
    let vowelsCount = '';
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += string[i];
        }
    }

    console.log(vowelsCount);

    return vowelsCount;
}

getVowels('Eliton');