const table = document.getElementById('table');

function sendValues() {
  let row = table.insertRow();
  let name = row.insertCell(0);
  let surname = row.insertCell(1);
  let email = row.insertCell(2);
  let date = row.insertCell(3);
  name.innerHTML = document.getElementById('name').value;
  surname.innerHTML = document.getElementById('surname').value;
  email.innerHTML = document.getElementById('email').value;

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;

  date.innerHTML = today;

  selectRow();
}

function selectRow() {
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      index = this.rowIndex;
      document.getElementById('name').value = this.cells[0].innerHTML;
      document.getElementById('surname').value = this.cells[1].innerHTML;
      document.getElementById('email').value = this.cells[2].innerHTML;
    };
  }
}

selectRow();

function editSelectedRow() {
  table.rows[index].cells[0].innerHTML = document.getElementById('name').value;
  table.rows[index].cells[1].innerHTML = document.getElementById(
    'surname'
  ).value;
  table.rows[index].cells[2].innerHTML = document.getElementById('email').value;
}

function deleteSelectedRow() {
  table.deleteRow(index);
}
