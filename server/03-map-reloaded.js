const orders = [
    { product: 'ChocoPalito',price: 3 },
    { product: '6xSprite', price: 8 },
    { product: 'Afilator', price: 12 },
    { product: 'Plastic Box', price: 5 }
];
console.log('original', orders); // 'Se imprime todo el array'

const filtPrice = orders.map(n => n.price);
console.log('Filtro precios: ', filtPrice); // Filtro precios:  [ 3, 8, 12, 5 ]



// Ahora queremos añadir un nuevo elemento, por ejemplo, taxes sin tener que modificar el array original.
const addTax = orders.map(n => {
    return {
        ...n,
        tax: 0.19, 
    };
});

console.log('Agregando tax: ', addTax); // Array con tax incluido
console.log('original', orders); // 'Se imprime todo el array'



// CON ERROR

/*
const addTax = orders.map(n => {
    n.tax = 0.19;
    return n;
});

console.log('Agregando tax: ', addTax); // Array con tax
console.log('original', orders); // 'Se imprime todo el array pero todavia con el tax, no es original'
*/
