
function myFunction() {
  var tbl = document.getElementById('table');
  var row = tbl.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  var cell4 = row.insertCell();
  var cell5 = row.insertCell();

  cell1.innerHTML = cell2.innerHTML = '1';
  cell3.innerHTML = document.getElementById('id-name-textarea').value;
  cell4.innerHTML = document.getElementById('id-description-textarea').value;
  cell5.innerHTML = `
            <td onClick="onEdit(this)" style="color: blue; class="view"><i class="fa-solid fa-eye fa-1x" ></i>View</td>
            <td style="color: green;"><i class="fa-regular fa-pen-to-square"></i>Edit</td>
            <td onClick = "onDelete(this)" style="color: red;"><i class="fa-solid fa-circle-xmark"></i>Delete</td>
            `;
}
  // document.getElementById('action').innerHTML += `
  //        <tr>

  //           <td>
  //             <div>
  //               <button Onclick = "view(${
  //                 data.ID
  //               })"><i class="fa-regular fa-eye"></i>view</button>
  //               <button Onclick= "deletePop(${
  //                 data.ID
  //               })"><i class="fa-solid fa-trash"></i>Delete</button>
  //               <button Onclick= "editPopUpdate(${
  //                 index + 1
  //               },${ID})"><i class="fa-solid fa-pen-to-square"></i>edit</button>
  //             </div>
  //           </td>
  //         </tr>`;

  // var srNo = localStorage.setItem("cell1" ,cell1 );
  // var ids =  localStorage.setItem("cell2" ,cell2 );
  // var name = localStorage.setItem("cell3" ,cell3 );
  // var desc = localStorage.setItem('cell4', cell4);
  // var desc = localStorage.setItem('cell5', cell5);


document.getElementById('view').style.color = 'blue';
document.getElementById('edit').style.color = 'green';
document.getElementById('delete').style.color = 'red';

// function addNum() {

//      cell5.innerHTML = { for(var i = 0; i < form.length; i++) {
//       newData[i] = form.elements[i].value;
//   }
//   } ;

function fullwindowpopup() {
  window.open('form-day2.html', 'bfs', 'width=500,height=650');
}

function onDelete(td) {
  if (confirm('Are you sure you want to delete?')) {
    row = td.parentElement.parentElement;
    document.getElementById('id-name-textarea').deleteItem(row.rowIndex);
    resetForm();
  }
}

const addData = () => {
  cell3.innerHTML = document.getElementById('id-name-textarea').value;
  cell4.innerHTML = document.getElementById('id-description-textarea').value;

  if (locationName && Address) {
    // let erro = document.getElementById('total-error');
    // erro.innerText = '';
    if (localStorage) {
      if (localStorage.getItem('TABLE')) {
        let tableData = localStorage.getItem('TABLE');
        tableData = JSON.parse(tableData);
        var data = {
          srn: tableData.length,
          ID: ID,
          LocationName: locationName,
          address: Address,
        };
        tableData.push(data);
        localStorage.removeItem('TABLE');
        localStorage.setItem('TABLE', JSON.stringify(tableData));
        tableRefres();
        alert('Data added successfully');
        addRecordPop();
      } else {
        var data = {
          srn: 0,
          ID: ID,
          LocationName: locationName,
          address: Address,
        };
        localStorage.setItem('TABLE', JSON.stringify([{ ...data }]));
        tableRefres();
        location.reload(true);
        addRecordPop();
      }
    }
  }
  // else if (locationName == '' || Address == '') {
  //   let erro = document.querySelector('#total-error');
  //   erro.innerHTML = 'Invalid data';
  // } else if (locationName == '' && Address == '') {
  //   let erro = document.querySelector('#total-error');
  //   erro.innerHTML = 'Invalid data';
  // }
};
tableRefres();

//  function addRow() {
//       // Get the table element in which you want to add row
//       let table = document.getElementById("table");

//       // Create a row using the inserRow() method and
//       // specify the index where you want to add the row
//       let row = table.insertRow(-1); // We are adding at the end

//       // Create table cells
//       let c1 = row.insertCell(0);
//       let c2 = row.insertCell(1);
//       let c3 = row.insertCell(2);

//       // Add data to c1 and c2
//       c1.innerText = "Elon"
//       c2.innerText = 45
//       c3.innerText = "Houston"
//    }

//  function addRow() {
//    // Get the table body element in which you want to add row
//    let table = document.getElementById('tableBody');

//    // Create row element
//    let row = document.createElement('tr');

//    // Create cells
//    let c1 = document.createElement('td');
//    let c2 = document.createElement('td');
//    let c3 = document.createElement('td');
//    let c4 = document.createElement('td');

//    // Insert data to cells
//    c1.innerText = 'Elon';
//    c2.innerText = '42';
//    c3.innerText = 'Houston';
//    c4.innerText = 'C++';

//    // Append cells to row
//    row.appendChild(c1);
//    row.appendChild(c2);
//    row.appendChild(c3);
//    row.appendChild(c4);

//    // Append row to table body
//    table.appendChild(row);
//  }

//

// table {
//   display: none;
// }
// <h1>Expense Tracker</h1>

// <form action="">
//   <label id="date">Date: </label>
//   <input type="date" id="date">
//   <br>

//   <label id="desc">Description: </label>
//   <input type="text" id="desc">
//   <br>

//   <label id="amount">Amount: </label>
//   <input type="text" id="amount">
//   <br>

//   <input type="button" id="submit" value="Submit">
//   <br>
// </form>

// <table id="table">
//   <tr>
//     <th>Date</th>
//     <th>Description</th>
//     <th>Amount</th>
//   </tr>
// </table>
