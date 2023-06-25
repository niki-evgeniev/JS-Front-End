function solve(input) {

    let product = input.shift().split('!');


    for (let index = 0; index < input.length; index++) {

        let [command, item, newItem] = input[index].split(' ');

        if (command === 'Go Shopping!') {
            break;
        } else if (command === 'Urgent') {
            if (!product.includes(item)) {
                product.unshift(item);
            }
        } else if (command === 'Unnecessary') {
            if (product.includes(item)) {
                let index = product.indexOf(item);
                product.splice(index, 1);
            }
        } else if (command === 'Correct') {
            if (product.includes(item)) {
                let index = product.indexOf(item);
                product[index] = newItem;
            }
        } else if (command === 'Rearrange') {
            if (product.includes(item)) {
                let index = product.indexOf(item);
                let productToMove = product[index];
                product.splice(index, 1);
                product.push(productToMove);
            }
        }

        
    }
    console.log(product.join(', '));

}



// solve((["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"])
// );

solve((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
);