function inventory(array) {
    let heroes = [];
    for (let index = 0; index < array.length; index++) {
      [heroName, level, items] = array[index].split(" / ");
      heroObject = {
          name:heroName,
          level:level,
          items:items
      }
      heroes.push(heroObject);
    }
    
    let sortedHeroes = heroes.sort((heroA,heroB)=>heroA.level-heroB.level);
    
    sortedHeroes.forEach((hero)=>{
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items}`);
    })
  }