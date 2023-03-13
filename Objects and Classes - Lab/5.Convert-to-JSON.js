function toJson(name, lastName, haircolor){
    let data = {
        name: name,
        lastName: lastName,
        hairColor: haircolor
    };
    console.log(JSON.stringify(data));
}

toJson('George', 'Jones', 'Brown')