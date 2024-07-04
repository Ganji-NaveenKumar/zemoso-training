document.addEventListener("DOMContentLoaded", function () {
    fetch('app_basic.json')
        .then(response => response.json())
        .then(data => {
            const searchResultUl = document.getElementById('searchresult');
            // Iterate over each category in data
            Object.keys(data.allitmes).forEach(category => {
                // Iterate over items in each category
                data.allitmes[category].forEach(item => {
                    // Create a new list item element
                    const li = document.createElement('li');
                    // Assign data to the list item
                    let itemName = document.createElement('div');
                    itemName.textContent = item.name;
                    itemName.id = 'name';
                    li.appendChild(itemName);
                    let itemPrice = document.createElement('div');
                    itemPrice.textContent = `Price: ${item.price}`;
                    itemPrice.id = 'price';
                    li.appendChild(itemPrice);

                    // Enable dragging for the list item
                    li.draggable = true;
                    // Set the data transfer when starting the drag
                    li.addEventListener('dragstart', function (event) {
                        event.dataTransfer.setData('text/plain', JSON.stringify({
                            name: item.name,
                            price: item.price,
                            quantity: 1
                        }));
                    });

                    // Append the new list item to the UL element
                    searchResultUl.appendChild(li);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
async function fetchdata() {
    try {
        const response = await fetch('app_basic.json');
        if (!response.ok) {
            throw new Error("Error fetching data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}
// const data = fetchdata();
// document.addEventListener("DOMContentLoaded",populateSearchResults(data));
const search = document.getElementById("searchbar");
search.addEventListener('input', () => getItem(search));

async function getItem(search) {
    const values = search.value.toLowerCase();
    var data = await fetchdata();
    // filtering
    const searchResults = document.getElementById('searchresult');
    searchResults.innerHTML = '';
    for (let category in data.allitmes) {
        // Checking here if the current category matches the search
        if (category.toLowerCase().includes(values)) {
            data.allitmes[category].forEach(item => {
                // if (item.name.toLowerCase().includes(values)) { // Corrected 'item.allitems' to 'item.name'
                const li = document.createElement('li');
                // Assign data to the list item
                let itemName = document.createElement('div');
                itemName.textContent = item.name;
                itemName.id = 'name';
                li.appendChild(itemName);
                // Create a span element for the price with id="price"
                let itemPrice = document.createElement('div');
                itemPrice.textContent = `Price: ${item.price}`;
                itemPrice.id = 'price';
                li.appendChild(itemPrice);

                // Enable dragging for the list item
                li.draggable = true;
                // Set the data transfer payload when starting the drag
                li.addEventListener('dragstart', function (event) {
                    event.dataTransfer.setData('text/plain', JSON.stringify({
                        name: item.name,
                        price: item.price,
                        quantity: 1
                    }));
                });

                // Append the new list item to the UL element
                searchResults.appendChild(li);
                // searchResults.appendChild(li);
            }
            );
        }
        else {
            data.allitmes[category].forEach(item => {
                // Check if the item name contains the search value
                if (item.name.toLowerCase().includes(values)) {
                    // Create a list item for the search result
                    const li = document.createElement('li');
                    // Assign data to the list item
                    let itemName = document.createElement('div');
                    itemName.textContent = item.name;
                    itemName.id = 'name';
                    li.appendChild(itemName);
                    // Create a span element for the price with id="price"
                    let itemPrice = document.createElement('div');
                    itemPrice.textContent = `Price: ${item.price}`;
                    itemPrice.id = 'price';
                    li.appendChild(itemPrice);

                    // Enable dragging for the list item
                    li.draggable = true;
                    // Set the data transfer payload when starting the drag
                    li.addEventListener('dragstart', function (event) {
                        event.dataTransfer.setData('text/plain', JSON.stringify({
                            name: item.name,
                            price: item.price,
                            quantity: 1
                        }));
                    });

                    // Append the new list item to the UL element
                    searchResults.appendChild(li);
                    // searchResults.appendChild(li);
                }
            });
        }
    }
}

document.addEventListener("DOMContentLoaded",function(){
    var tables=document.getElementById('alltables');
    tableStore.forEach(items=>{
        const tablesInDiv=document.createElement('div');
        tablesInDiv.classList.add('table-item');
        tablesInDiv.id = items.id;
        addDataTable(tablesInDiv,items);
        tablesInDiv.addEventListener('dragover', e => {
            e.preventDefault();
        });
        tablesInDiv.addEventListener('drop', function(event) {
            event.preventDefault();
            const itemId = JSON.parse(event.dataTransfer.getData('text/plain'));
            // items.totalcost+=itemId.price;
            // items.itemsId+=1;
            // items.itemsArray.push(itemId);
            const itemsArray1 = items.itemsArray;
            // Check if item already exists in itemsArray
            let itemFound = false;
            itemsArray1.forEach(item => {
                // console.log(item+" "+item.name+" "+itemId.name);
                if (item.name == itemId.name) {
                    itemFound = true;
                    item.quantity+=1;
                }
            });

            // If item is not found, add it to the itemsArray
            if (!itemFound) {
                items.itemsArray.push({
                    name: itemId.name,
                    price: itemId.price,
                    quantity: itemId.quantity
                });
            }
            // console.log(tableStore);
            // console.log(tableStore);
            addDataTable(tablesInDiv,items);
        });
        tablesInDiv.addEventListener('click',function(){
            showpopup(tablesInDiv);
        });
        tables.appendChild(tablesInDiv);
    });
});
function addDataTable(tableDiv,table){
    // console.log("table");
    // console.log(table);
    // console.log(tableDiv);
    if(table.itemsArray.length==0){
        table.totalcost=0;
        table.itemsId=0;
    }
    
    else{
        // console.log(table.itemsArray);
        table.totalcost=0;
        table.itemsId=0;
        table.itemsArray.forEach(data=>{
            // console.log(data);
            table.totalcost+=data.price*data.quantity;
            table.itemsId+=data.quantity;
        });
    }
    // <h2>${table.id}</h2>
    tableDiv.innerHTML=`
    <div id="table-info">
    <h2>${table.id}</h2>
    <p>TotalCost: ${table.totalcost} <br> Items: ${table.itemsId}</p>
    </div>
    `;
}
var tableStore = [{
        id:"Table-1",
        totalcost: 0,
        itemsId: 0,
        itemsArray: []
    },
     {
        id:"Table-2",
        totalcost: 0,
        itemsId: 0,
        itemsArray: []
    },
     {
        id:"Table-3",
        totalcost: 0,
        itemsId:0,
        itemsArray: []
    }
]
// console.log(tableStore[0])

document.getElementById('table-search').addEventListener('input', function(){
    const searchdata=document.getElementById('table-search').value.toLowerCase();
    // console.log(searchdata);
    const allTables=document.querySelectorAll('.table-item');
    allTables.forEach(table=>{
        // console.log(table);
        const findname=table.querySelector('h2').textContent.toLowerCase();
        // console.log(findname);
        if(findname.includes(searchdata)){
            table.style.display='block';
        }
        else table.style.display='none';
    });
});

// console.log(data);
function showpopup(tableIndiv){
    // console.log(tableIndiv);
    const div=document.getElementById('popup');
    div.innerHTML='';
    // console.log(tableIndiv.id);
    const closeButton = document.createElement('span');
    closeButton.textContent = '✖'; // Close symbol or text
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function () {
        div.style.display = 'none'; // Hide the popup on close button click
    });
    div.appendChild(closeButton);
    // console.log(dataArray);
    const h3=document.createElement('h3');
    h3.id="pop-table-heading";
    h3.textContent=`${tableIndiv.id}`;
    div.appendChild(h3);
    const modaltable=document.createElement('table');
    modaltable.id="table-id";
    const headerRow = document.createElement('tr');
    headerRow.id='table-row';
    modaltable.appendChild(headerRow);

    // Table headers
    const headers = ['Items', 'Price', 'Quantity','Cost', 'Delete'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        header.id='table-row-data';
        headerRow.appendChild(header);
    });
    tableStore.forEach(data=>{
        // console.log(data)
        if(tableIndiv.id==data.id){
            const dataset=data.itemsArray;
            dataset.forEach((item, index)=>{
                const tr=document.createElement('tr');
                tr.id='table-row';
                const tdname=document.createElement('td');
                tdname.id='table-row-data';
                tdname.innerHTML=`${item.name}`;
                tr.appendChild(tdname);
                const tdprice=document.createElement('td');
                tdname.id='table-row-data';
                tdprice.id='table-row-data';
                tdprice.innerHTML=`${item.price}`;
                tr.appendChild(tdprice);
                const tdquantity=document.createElement('td');
                tdname.id='table-row-data';
                const quantitys=document.createElement('input');
                quantitys.type='number';
                quantitys.classList.add('input-id');
                quantitys.value=item.quantity;
                tdquantity.id='table-row-data';
                quantitys.min='1';
                quantitys.addEventListener('input',function(){
                    item.quantity = parseInt(quantitys.value);
                    addDataTable(tableIndiv,data);
                    totalCostCell.textContent = `Total Cost:${calsum(tableIndiv)}`;
                    itemPriceCell.textContent = item.price.toFixed(2)*item.quantity;
                });
                tr.appendChild(tdquantity);
                tdquantity.appendChild(quantitys);
                const itemPriceCell = document.createElement('td');
                itemPriceCell.id='table-row-data';
                itemPriceCell.textContent = item.price.toFixed(2)*item.quantity; // Assuming price is a number
                itemPriceCell.classList.add('cell-padding');
                tr.appendChild(itemPriceCell);

                const deleteButtonCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = '\u2716';
                deleteButtonCell.id='table-row-data';
                deleteButton.classList.add('delete-button');
                deleteButton.addEventListener('click', function () {
                    // Remove the item from itemsArray and update the popup
                    data.itemsArray.splice(index, 1);
                    addDataTable(tableIndiv,data);
                    // console.log(data);
                    totalCostCell.textContent = `Total Cost:${calsum(tableIndiv)}`;
                    showpopup(tableIndiv); // Refresh the popup content after deletion
                });
                deleteButtonCell.appendChild(deleteButton);
                tr.appendChild(deleteButtonCell);
                modaltable.append(tr);
            });
          
        }
    });
    const footerRow = document.createElement('tr');
    footerRow.classList.add('table-footer');
    var totalCostCell = document.createElement('td');
    totalCostCell.classList.add('total-sum-cell');
    totalCostCell.id='table-row-data';
    // console.log(calsum(tableIndiv));
    totalCostCell.textContent = `Total Cost:${calsum(tableIndiv)}`;
    totalCostCell.classList.add('total-cost-cell');
    totalCostCell.setAttribute('colspan', '3'); // Span 2 columns
    footerRow.appendChild(totalCostCell);
    modaltable.appendChild(footerRow);
    div.appendChild(modaltable);

    const div1=document.createElement('div');
    // div1.appendChild(sumCost);
    const printButton = document.createElement('button');
    printButton.textContent = 'Print';
    printButton.classList.add('print-button');
    printButton.addEventListener('click', function () {
        // Create a new window to print only the content of the popup
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(tableIndiv.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    });
    div1.appendChild(printButton);
    // console.log(data);
    div.style.display='block';
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Close Session';
    clearButton.classList.add('clear-button');
    div1.appendChild(clearButton);
    div.appendChild(div1);
    clearButton.addEventListener('click', function () {
        tableStore.forEach(itemsdata=>{
            if(itemsdata.id==tableIndiv.id){
                itemsdata.totalcost=0;
                itemsdata.itemsId=0;
                itemsdata.itemsArray=[];
                addDataTable(tableIndiv,itemsdata);
            }
        });
        // addDataTable(tableIndiv,table);
        div.innerHTML = ''; // Clear popup content
        div.style.display = 'none'; // Hide the popup
        alert(`closing the table: \n
            ${tableIndiv.id}\n
            ${totalCostCell.textContent}\n`);
        
    });
    // console.log(data);
    
}
function calsum(tableIndiv) {
    let total = 0;
    tableStore.forEach(table => {
        if (table.id === tableIndiv.id) {
            table.itemsArray.forEach(item => {
                total += item.price * item.quantity;
            });
        }
    });
    return total.toFixed(2); // Ensure the total cost is formatted to 2 decimal places
}