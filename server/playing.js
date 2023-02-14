function mutiplyElements(array) {
    
    return array.map(n => n*2);
};

const array = [
    {name: 'uno', price: 20, },
    {name: 'dos', price: 40, },
    {name: 'tres', price: 50, }
]
function addNewAttr(array) {
    return array.map(n => {
        n.tax = Math.trunc(n.price * 0.19);
        return n;
    })   
}

addNewAttr(array);
 console.log(array)