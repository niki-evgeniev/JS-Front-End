function create(words) {
   let mainDiv = document.getElementById('content');

   for (const word of words) {
      let newD = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = word;
      newP.style.display = 'none';
      newD.appendChild(newP);
      mainDiv.appendChild(newD);

      newD.addEventListener('click',() => {
         newP.style.display = 'block';
      })
   }
}