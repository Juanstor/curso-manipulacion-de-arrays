const myArray = [
    { product: 'ChocoPalito',price: 3 },
    { product: '6xSprite', price: 8 },
    { product: 'Afilator', price: 12 },
    { product: 'Plastic Box', price: 5 }
];

console.log('original', myArray);

const filtPrice = myArray.map(n => n.price);
console.log('filtro precios: ', filtPrice);



// Ahora queremos añadir un nuevo elemento, por ejemplo, taxes sin tener que modificar el array original.

