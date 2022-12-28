export function addToList(){
    
    let name = document.querySelector('#name').value;
    let price =document.querySelector('#price').value;
    let link =document.querySelector('#link').value;
    let description =document.querySelector('#description').value;

    if(name && price && link && description){
        const item = {
            name : name,
            price : price,
            link : link,
            description : description
        }
        saveItem(item);
    }

}

export function printItems(){
    let keys = allStorage();
    keys.forEach(key => {
        if(key.includes('http')){
            let item = localStorage.getItem(key);
            addToTable(item);
        }
    });
}

function saveItem(item){
    localStorage.setItem(item.link, JSON.stringify(item));

}

function allStorage(){
    let keys = Object.keys(localStorage);
    return keys;
}


function addToTable(item){
    const itemObject = JSON.parse(item);

    const table = document.querySelector('#tableBody');
    const row = document.createElement('tr');
    let nameRow = document.createElement('td');
    let priceRow = document.createElement('td');
    let linkRow = document.createElement('td');
    let descriptionRow = document.createElement('td');
    let hideRow = document.createElement('td');

    nameRow.innerText = itemObject.name;
    priceRow.innerText = itemObject.price + " €";
    linkRow.innerHTML = `<a href="${itemObject.link}" target="_blank">Click here</a>`;
    descriptionRow.innerText = itemObject.description;
    hideRow.innerHTML = '<button type="button" class="btn btn-warning btn-sm js-hide-button">Hide</button>'

    row.appendChild(nameRow);
    row.appendChild(priceRow);
    row.appendChild(linkRow);
    row.appendChild(descriptionRow);
    row.appendChild(hideRow);
    row.id = 'itemRow';
    
    table.appendChild(row);
}
