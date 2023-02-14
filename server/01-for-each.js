//Se define el array llamado letters
const letters = ['a', 'b', 'c'];

// Modo largo
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element); //a , b, c
}

// Modo mejorado 
letters.forEach(item => console.log(item)); //a , b, c