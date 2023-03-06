function calculatePrice(fruit, grams, price) {
    let kg = grams / 1000;
    let totalPrice = kg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2) } kilograms ${fruit}.`)
}



calculatePrice('orange', 2500, 1.80);

calculatePrice('apple', 1563, 2.35)