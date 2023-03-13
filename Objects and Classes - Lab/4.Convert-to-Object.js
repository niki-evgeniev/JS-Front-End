function toObj(obj){
    let data = JSON.parse(obj);

    for (const key in data) {
console.log(`${key}: ${data[key]}`)
    }
}

toObj('{"name": "George", "age": 40, "town": "Sofia"}')

toObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}')