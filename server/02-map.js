const arrayLetters = ['a', 'b', 'c'];
const newArray = [];

//Forma larga
for (let index = 0; index < arrayLetters.length; index++) {
    const eachElement = arrayLetters[index];
    newArray.push(eachElement + '+');
}

// Mejorada
const newArray2 = arrayLetters.map(item => item + '++');


console.log('original', arrayLetters); // original [ 'a', 'b', 'c' ]
console.log('new', newArray); // new [ 'a+', 'b+', 'c+' ]
console.log('Second new', newArray2); // Second new [ 'a++', 'b++', 'c++' ]