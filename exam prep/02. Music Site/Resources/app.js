window.addEventListener('load', solve);

function solve() {
    let inputDom = {
        genre: document.getElementById('genre'),
        nameSong: document.getElementById('name'),
        song: document.getElementById('author'),
        date: document.getElementById('date')
    }

    const addSongBtn = document.getElementById('add-btn');
    const allHitsContainer = document.querySelector('.all-hits-container');
    const totalLikeParagraph = document.querySelector('.likes > p');
    const btnLike = document.querySelector('.like-btn');

    const saveConteiner = document.querySelector('.saved-container');

    let totalLike = 0;

    addSongBtn.addEventListener('click', addSong);


    function addSong(e) {
        e.preventDefault();
        let emptyString = Object.values(inputDom)
            .every((ins) => ins.value !== '');

        if (!emptyString) {
            return
        }

        let { genre, nameSong, song, date } = inputDom;

        const divHitsInfo = document.createElement('div');
        divHitsInfo.classList.add('hits-info');

        const image = document.createElement('img');
        image.src = './static/img/img.png';
        divHitsInfo.appendChild(image);

        const h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genre.value}`;
        divHitsInfo.appendChild(h2Genre);

        const h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${nameSong.value}`;
        divHitsInfo.appendChild(h2Name);

        const h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${song.value}`;
        divHitsInfo.appendChild(h2Author);

        const h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${date.value}`;
        divHitsInfo.appendChild(h3Date);

        const btnSave = document.createElement('button');
        btnSave.classList.add('save-btn');
        btnSave.textContent = 'Save song';
        divHitsInfo.appendChild(btnSave);

        const btnLike = document.createElement('button');
        btnLike.classList.add('like-btn');
        btnLike.textContent = 'Like song';
        divHitsInfo.appendChild(btnLike);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('delete-btn');
        btnDelete.textContent = 'Delete';
        divHitsInfo.appendChild(btnDelete);

        allHitsContainer.appendChild(divHitsInfo);

        btnLike.addEventListener('click', likeFunctions);
        btnSave.addEventListener('click', saveFunctions);
        btnDelete.addEventListener('click', deleteFunctions);
        genre.value = '';
        nameSong.value = '';
        song.value  = '';
        date.value = '';
        function likeFunctions() {
            totalLike++;
            totalLikeParagraph.textContent = 'Total Likes: ' + totalLike;
            this.setAttribute('disabled', true);
            
        }
    
        function saveFunctions() {
            const container = this.parentNode;
    
            const saveBtnn = container.querySelector('.save-btn');
            const lineBtnn = container.querySelector('.like-btn');
            saveConteiner.appendChild(container);
            saveBtnn.remove();
            lineBtnn.remove();
        }
    
        function deleteFunctions() {
            this.parentNode.remove();
        }

    }





}
