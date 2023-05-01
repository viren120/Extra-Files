function myButton(){
   alert("Data is recorded");
}

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

     function addRow() {
       // Get the table body element in which you want to add row
       let table = document.getElementById('tableBody');

       // Create row element
       let row = document.createElement('tr');

       // Create cells
       let c1 = document.createElement('td');
       let c2 = document.createElement('td');
       let c3 = document.createElement('td');
       let c4 = document.createElement('td');

       // Insert data to cells
       c1.innerText = 'Elon';
       c2.innerText = '42';
       c3.innerText = 'Houston';
       c4.innerText = 'C++';

       // Append cells to row
       row.appendChild(c1);
       row.appendChild(c2);
       row.appendChild(c3);
       row.appendChild(c4);

       // Append row to table body
       table.appendChild(row);
     }



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