function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchBtn = document.getElementById('searchField');

   function onClick() {
      const searchWord = searchBtn.value;
      const tRow = Array.from(document.querySelectorAll('tbody tr'));

      for (const row of tRow) {

         let text = row.textContent.trim();


         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }

         if (text.includes(searchWord)) {
            row.classList.add('select');
         }
      }

   }
}