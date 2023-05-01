debugger;

var count = 1;
var id = Math.random().toFixed(1) * 314;
let l;


var selectedtr = null;

var list = [];

//search user array
var serachdatalist = [];
//active user array
var activedatalist = [];
//inactive user array
var inactivedatalist = [];


// used for add record or update the row ------------------------------------------------------------------------------------------------------------------
function myFunction() {
  if (selectedtr == null) {
    addRecord();
    console.log('addRecord');
    console.log(list);
  } else {
    update();
    console.log('update');
  }
}
// addRecord used for adding the record in the Table----------------------------------------------------------------------------------------------------------
function addRecord() {
  const data = readFormData();
  list.push(data);

  l = document.getElementById('table').rows.length;

  document.getElementById('section').style.display = 'block';

  document.getElementById('form').style.display = 'none';

  var tbl = document.getElementById('table');
  var tableBody = document.getElementById('table-body');
  var row = tbl.insertRow(tbl.length);
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  var cell4 = row.insertCell();
  var cell5 = row.insertCell();
  var cell6 = row.insertCell();

  row.classList.add('data');

  cell1.innerHTML = tableBody.children.length;
  // tbl.rows.length                when the 1st data  is not available used this 
  cell2.innerHTML = tableBody.children.length;
  cell3.innerHTML = data.id_name_textarea;
  cell4.innerHTML = data.id_description_textarea;
  cell5.innerHTML = data.status;
  cell6.innerHTML = `
  <button style="color: blue;border: none;"  class="view" onClick="viw(this)"><i class="fa-solid fa-eye fa-1x" ></i>View</button>
  <button style="color: green;border: none;" class="edt" onClick="editInfo(this)"><i class="fa-regular fa-pen-to-square"></i>Edit</button>
  <button id="delete" style="color: red;border: none;"  class="dlt" onClick="dlt(this)"><i class="fa-solid fa-circle-xmark"></i>Delete</button>

  `;
}
// popup function ----------------------------------------------------------------------------------------------------------------------------------------------
function popup() {
  reset();
  document.getElementById('section').style.display = 'none';
  document.getElementById('form').style.display = 'block';
}
// View button Functionality------------------------------------------------------------------------------------------------------------------------------
function viw(y) {
  selectedtr = y.parentElement.parentElement;
  document.getElementById('id_name_textarea').value =
    selectedtr.cells[2].innerHTML;
  document.getElementById('id_description_textarea').value =
    selectedtr.cells[3].innerHTML;

  document.getElementById('form').style.display = 'block';
  document.getElementById('section').style.display = 'none';
  document.getElementById('btn-table').style.display = 'none';
}
// Edit button Functionality-------------------------------------------------------------------------------------------------------
function editInfo(uD) {
  selectedtr = uD.parentElement.parentElement;
  console.log(selectedtr, uD.parentElement.parentElement);

  document.getElementById('form').style.display = 'block';
  document.getElementById('btn-table').style.display = 'block';
  document.getElementById('section').style.display = 'none';

  document.getElementById('id_name_textarea').value =
    selectedtr.cells[2].innerHTML;
  document.getElementById('id_description_textarea').value =
    selectedtr.cells[3].innerHTML;
  // document.getElementById('btn-table').innerHTML = 'Save';
}
//It's used for the update the values for Edit button-------------------------------------------------------------------------------
function readFormData() {
    let status = "Active" ;
  var uP = {};
  uP['id_name_textarea'] = document.getElementById('id_name_textarea').value;
  uP['id_description_textarea'] = document.getElementById('id_description_textarea').value;
  if(document.getElementById('active').checked){
        uP.status = status ;
  }
  else{
    status = 'Inactive';
         uP.status = status;
  }
//   uP['status'] = document.getElementById('status').value;

  return uP;
}
function update() {
  const data = readFormData();
  selectedtr.cells[2].innerHTML = data.id_name_textarea;
  selectedtr.cells[3].innerHTML = data.id_description_textarea;

  selectedtr = null;
  document.getElementById('form').style.display = 'none';
  document.getElementById('section').style.display = 'block';
}

// Delete button Functionality-----------------------------------------------------------------------------------------------------
function dlt(del) {
  if (confirm('Are you sure to delete this record ?')) {
    var dltRow = del.parentElement.parentElement;
    dltRow.remove();
  }
}

// Table Button for closing the Form----------------------------------------------------------------------------------------------
function closeForm() {
  document.getElementById('section').style.display = 'block';

  document.getElementById('form').style.display = 'none';
}

// after Submitting Form the reset() used for clear the value in Textarea...------------------------------------------------
function reset() {
  document.getElementById('id_name_textarea').value = ' ';
  document.getElementById('id_description_textarea').value = ' ';
}

//Search-------------------------------------------------------------------------------------------------------------------------------------------------------------
function search() {
  var input, filter, table, tr, td, td2, i, txtValue, txtValue2;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  table = document.getElementById('section'); // ahiya table nu id
  tr = table.getElementsByTagName('tr');

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[2];
    td2 = tr[i].getElementsByTagName('td')[3];
    if (td2) {
      txtValue = td.textContent || td.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else if (txtValue2.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

// Filter--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Filter Active user-------------------------------------------------------------------------------------
function activeRadio(){
    serachdatalist = [];
    var activedata = document.getElementById('activestatus');
    console.log(activedata);

  filterstatusvalue = document.getElementById('activestatus').value;
  console.log(filterstatusvalue);
  var data = list.map((obj) => obj.name);
  list.filter((obj) => {
      if (obj.status == filterstatusvalue) {
          console.log(obj);
      var mylocation = obj.location;
      const uniqactive = activedatalist.filter(
          (objitem) => objitem.location == mylocation
          );
      if (uniqactive.length) {
        return (uniqactive.length = 0);
      } else {
          console.log(uniqactive.length);
        activedatalist.push(obj);
    }
}
  });
  console.log(activedatalist);
  document.getElementById("table-body").innerHTML = "";
  activedatalist.map((obj, i) => {
      document.getElementById('table-body').innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${i + 1}</td>
    <td>${obj.id_name_textarea}</td>
    <td>${obj.id_description_textarea}</td>
    <td>${obj.status}</td>
    <td>
  <button style="color: blue;border: none;"  class="view" onClick="viw(this)"><i class="fa-solid fa-eye fa-1x" ></i>View</button>
  <button style="color: green;border: none;" class="edt" onClick="editInfo(this)"><i class="fa-regular fa-pen-to-square"></i>Edit</button>
  <button id="delete" style="color: red;border: none;"  class="dlt" onClick="dlt(this)"><i class="fa-solid fa-circle-xmark"></i>Delete</button>
    </td>
  </tr>`;
  });


 document.getElementById('table-body').classList.add('data');


};




// Filter InActive user---------------------------------------------------------------------------------------------------------------------------
function inactiveRadio(){

    serachdatalist = [];
    var inactivedata = document.getElementById('inactivestatus');
    document.getElementById('activestatus').checked == false;
    document.getElementById("inactivestatus").checked == true;

  filterstatusvalue = document.getElementById('inactivestatus').value;
  console.log(filterstatusvalue);
  var data = list.map((obj) => obj.name);
  list.filter((obj) => {
    if (obj.status == filterstatusvalue) {
      console.log(obj);
      var mylocation = obj.location;
      const uniqinactive = inactivedatalist.filter(
        (objitem) => objitem.location == mylocation
      );
      if (uniqinactive.length) {
        return (uniqinactive.length = 0);
      } else {
          console.log(uniqinactive.length);
          inactivedatalist.push(obj);
        }
    }
  });
  console.log(inactivedatalist);
  document.getElementById("table-body").innerHTML = "";
   inactivedatalist.map((obj, i) => {
      document.getElementById('table-body').innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${i + 1}</td>
    <td>${obj.id_name_textarea}</td>
    <td>${obj.id_description_textarea}</td>
    <td>${obj.status}</td>
    <td>
  <button style="color: blue;border: none;"  class="view" onClick="viw(this)"><i class="fa-solid fa-eye fa-1x" ></i>View</button>
  <button style="color: green;border: none;" class="edt" onClick="editInfo(this)"><i class="fa-regular fa-pen-to-square"></i>Edit</button>
  <button id="delete" style="color: red;border: none;"  class="dlt" onClick="dlt(this)"><i class="fa-solid fa-circle-xmark"></i>Delete</button>
    </td>
  </tr>`;
  });

 document.getElementById('table-body').classList.add('data');

}

// pagination---------------------------------------------------------------------------------------------------------------------------------------------------------
var current_page = 1;
var records_per_page = 9;
// pagination fucntion starts

// previous button
function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

// next button
function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);

    document.getElementById('data').style.display = 'none';

  }
}

function changePage(page) {
  var btn_next = document.getElementById('btn_next');
  var btn_prev = document.getElementById('btn_prev');
  var listing_table = document.getElementById('table-body');
  var page_span = document.getElementById('page');

  // Validate page
  if (page < 1) page = 1; // if page index number less then 1 it will change it to 1
  if (page > numPages()) page = numPages();

  [...listing_table.getElementsByTagName('tr')].forEach((tr) => {
    tr.style.display = 'none'; // more than 10 rows will not be displayed
  });
  listing_table.rows[0].style.display = ''; // display the title row

  for (
    var i = (page - 1) * records_per_page + 1;
    i < page * records_per_page + 1;
    i++
  ) {
    if (listing_table.rows[i]) {
      listing_table.rows[i].style.display = '';
    } else {
      continue;
    }
  }

  // pagination numbers
  page_span.innerHTML = page + '/' + numPages();

  if (page == 1) {
    btn_prev.style.visibility = 'hidden';
  } else {
    btn_prev.style.visibility = 'visible';
  }

  if (page == numPages()) {
    btn_next.style.visibility = 'hidden';
  } else {
    btn_next.style.visibility = 'visible';
  }
}

function numPages() {
  return Math.ceil((l - 1) / records_per_page);
}

window.onload = function () {
  changePage(current_page);
};
