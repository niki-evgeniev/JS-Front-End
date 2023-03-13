function city(city){
    let info = Object.keys(city);

    for (const cit of info) {
        console.log(`${cit} -> ${city[cit]}`);
    }
};

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)