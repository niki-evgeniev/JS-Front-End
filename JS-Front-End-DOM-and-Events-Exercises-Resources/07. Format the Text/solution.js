function solve() {
  const output = document.getElementById('output');
  const text = document.getElementById('input');

  let textTrim = text.value.split('.');
  textTrim.pop();

  while (textTrim.length > 0) {
    // debugger;
    let paragraph = textTrim.splice(0, 3)
    .map((p) => p.trimStart());
    
    let addParagraph = document.createElement('p');
    addParagraph.textContent = paragraph.join('.') + '.';
    output.appendChild(addParagraph);

  }
}