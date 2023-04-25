function towns(info) {
    let towns = {};

    for (const iterator of info) {
        let data = iterator.split(" | ");
        towns = {
            town: data[0], latitude: Number(data[1]).toFixed(2),
            longitude: Number(data[2]).toFixed(2)
        };
        console.log(towns);

    }
}

// towns(['Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625']
// );

towns(['Plovdiv | 136.45 | 812.575'])