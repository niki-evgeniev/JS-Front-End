function getInfo() {
    const idInput = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesCon = document.getElementById('buses');
    const URL_BASE = 'http://localhost:3030/jsonstore/bus/businfo/';
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    let idValue = idInput.value;
    console.log(idValue);

    busesCon.innerHTML = '';
    fetch(`${URL_BASE}${idValue}`)
        .then((res) => res.json())
        .then((busInfo) => {
            const { name, buses } = busInfo;
            stopName.textContent = name;
            for (const bus in buses) {
                let li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                busesCon.appendChild(li);
            }
        })
        .catch(() => {
            stopName.textContent = 'Error';
        }

        )
}