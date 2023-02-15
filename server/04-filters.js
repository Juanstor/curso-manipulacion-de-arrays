const words = ['way', 'limit', 'apex', 'exuberant'];
const newArray =[];

// Forma larga
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 5) {
        newArray.push(item);
    }
}

// Forma mejorada
const theFilter = words.filter(item => item.lenght >= 6);

console.log('origin words', words); //origin words [ 'way', 'limit', 'apex', 'exuberant' ]
console.log('newArray', newArray); //newArray [ 'limit', 'exuberant' ]
console.log('theFilter', newArray); //theFilter [ 'limit', 'exuberant' ]






//OTRO EJEMPLO
const orders = [
    { product: 'ChocoPalito',price: 3, delivered: true},
    { product: '6xSprite', price: 8, delivered: false },
    { product: 'Afilator', price: 12, delivered: true },
    { product: 'Plastic Box', price: 5, delivered: false }
]

const search = (query) => {
    return orders.filter(item => {
        return item.product.includes(query);
    })
}


const fueronEntregadas = orders.filter(item => item.delivered);
const entregadaMayorA10 = orders.filter(item => item.delivered && item.price >= 10);

console.log('ordenes totales:',orders);
console.log('Estos fueron los artículos entregaods:',fueronEntregadas);
console.log('Entregados mayores a 10 dolares:',entregadaMayorA10);

console.log('Con la palabra Choco', search('Choco'));
console.log('Con la palabra x', search('x'));
console.log('Con la palabra plast (con p minuscula)', search('plast'));