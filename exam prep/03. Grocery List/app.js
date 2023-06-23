// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

    const btnLoad = document.getElementById('load-product');
    const tbody = document.getElementById('tbody');

    const btnAdd = document.getElementById('add-product');
    const productInput = document.getElementById('product');
    const countInput = document.getElementById('count');
    const priceInput = document.getElementById('price');

    const btnUpdateProduct  = document.getElementById('update-product');
    let id = '';


    btnLoad.addEventListener('click', loadAllProduct);
    btnAdd.addEventListener('click', addProduct);


    async function loadAllProduct(e) {
        if (e) {
            e.preventDefault();
        }
        tbody.innerHTML = '';
        const response = await fetch(BASE_URL);
        const data = await response.json();
        allProducts = Object.values(data);

        for (const key in data) {
            let { product, count, price, _id } = data[key];

            const tr = document.createElement('tr');
            tr.id = _id;

            const tdName = document.createElement('td');
            tdName.classList.add('name');
            tdName.textContent = product;
            tr.appendChild(tdName);

            const tdCount = document.createElement('td');
            tdCount.classList.add('count-product');
            tdCount.textContent = count;
            tr.appendChild(tdCount);

            const tdPrice = document.createElement('td');
            tdPrice.classList.add('product-price');
            tdPrice.textContent = price;
            tr.appendChild(tdPrice);

            const tdBtn = document.createElement('td');
            tdBtn.classList.add('btn');
            btnUpdate = document.createElement('button');
            btnUpdate.classList.add('update');
            btnUpdate.textContent = 'Update';
            tdBtn.appendChild(btnUpdate);

            btnDelete = document.createElement('button');
            btnDelete.classList.add('delete');
            btnDelete.textContent = 'Delete';
            tdBtn.appendChild(btnDelete);

            tr.appendChild(tdBtn);
            tbody.appendChild(tr);

            btnDelete.addEventListener('click', deleteProduct);
            btnUpdate.addEventListener('click', updateProduct);

        }
    }
    async function addProduct(e) {
        e.preventDefault();
        let product = productInput.value;
        let count = countInput.value;
        let price = priceInput.value;
        console.log(product, count, price);
        // debugger;
        const httpHeader = {
            method: 'POST',
            body: JSON.stringify({
                product: product,
                count: count,
                price: price
            }),
        }
        const response = await fetch(BASE_URL, httpHeader);
        productInput.value = '';
        countInput.value = '';
        priceInput.value = '';
        loadAllProduct();

    }

    async function deleteProduct() {
        const id = this.parentNode.parentNode.id;
        console.log(id);

        const httpHeader = {
            method: 'DELETE'
        };
        const response = await fetch(BASE_URL + id, httpHeader);
        loadAllProduct();
    }

    async function updateProduct() {
        let liP = this.parentNode.parentNode;
        id = liP.id;
        const [product, count, price, _id] = Array.from(liP.children);
        
        console.log(product, count, price);
        productInput.value = product.textContent;
        countInput.value = count.textContent;
        priceInput.value = price.textContent;
        btnAdd.setAttribute('disabled', true);
        btnUpdateProduct.removeAttribute('disabled');
        btnUpdateProduct.addEventListener('click',sendProductToDb);
    
    }

    async function sendProductToDb() {
        let liP = this.parentNode;
        const [product, count, price] = Array.from(liP.children);
        console.log(productInput.value, countInput.value, priceInput.value);

        const httpHeader = {
            method: 'PATCH',
            body: JSON.stringify({ 
                product: productInput.value,
                count: countInput.value,
                price: priceInput.value
             })
        };
        const response = await fetch(BASE_URL + id, httpHeader);
        loadAllProduct();
    }


}

attachEvents();