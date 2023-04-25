function inventory(arr) {
    let hero = [];
    for (const her of arr) {

        let data = her.split(' / ');
        let objectHero = {
            name: data[0],
            level: data[1],
            items: data[2]
        }
        hero.push(objectHero);
    }
    let sortedHero = hero.sort((a, b) => a.level - b.level);

    for (const h of sortedHero) {
        console.log(`Hero: ${h.name}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.items}`);
    }

}


// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]
// )

inventory([
    'Batman / 2 / Banana, Gun',
    'Poppy / 28 / Sentinel, Antara',
    'Superman / 18 / Sword'
    
    ]
    )