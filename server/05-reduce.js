const numeritos = [1,2,3,4,];

// Forma larga
let sum = 0;
for (let index = 0; index < numeritos.length; index++) {
    const elemento = numeritos[index];
    sum = sum + elemento;
}
console.log(sum); // 10

// Forma mejorada

const respuesta = numeritos.reduce((sum, elemento) =>sum + elemento, 0)
console.log('reducido es ', respuesta); // reducido es  10


