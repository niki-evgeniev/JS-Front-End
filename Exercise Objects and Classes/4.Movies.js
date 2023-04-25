function movie(input) {
    let movies = [];

    for (let index = 0; index < input.length; index++) {
        let data = input[index].split(' ');
        if (data[0] === 'addMovie') {
            let name = data.slice(1).join(' ');
            movies.push({ name });
        } else if (data.includes('directedBy')) {
            let indexOfCommand = data.indexOf('directedBy');
            let movieName = data.slice(0, indexOfCommand).join(' ');
            let director = data.slice(indexOfCommand + 1, input.length).join(' ');
            // movies[name] = {director: director};
            let movie = movies.find((m) => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (data.includes('onDate')) {
            let data = input[index].split('onDate ');
            let movieName = data[0].trim();
            let date = data[1].trim();
            let movie = movies.find((m) => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    for (const movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }

    }
}

movie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)

movie([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
)