function store(firstArr, secondArr) {
    let fullStore = [...firstArr, ...secondArr];

    let store = {};

    for (let index = 0; index < fullStore.length; index += 2) {
        let product = fullStore[index];
        let numberProduct = Number(fullStore[index + 1]);

        if (!store.hasOwnProperty(product)) {
            store[product] = numberProduct;
        } else {
            store[product] += Number(numberProduct);
        }
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]} `);
    }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)

store([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)