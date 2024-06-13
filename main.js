const form = document.querySelector('form');
const table = document.querySelector('table').querySelector('tbody');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;

    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.textContent = name;
    cell2.textContent = phone;
});