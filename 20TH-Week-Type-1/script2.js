let data = [];

function read() {
  const formData = {};
  formData['location'] = document.getElementById('location').value;
  formData['desc'] = document.getElementById('desc').value;
  formData['country'] = document.getElementById('country').value;
  formData['state'] = document.getElementById('state').value;
  formData['city'] = document.getElementById('city').value;
  formData['tag'] = ' ';
  return formData;
}
function submitForm() {
  const formData = read();
  data.push(formData);
  updateTable();
  saveToLocalStorage();
  document.getElementById('form').reset();
}
function updateTable() {
  document.getElementById('tableBody').innerHTML = '';
  data.forEach((obj) => {
    document.getElementById('tableBody').innerHTML += `
      <tr>
        <td><input type="checkbox" class="select-checkbox"></td>
        <td>${obj.location}</td>
        <td>${obj.desc}</td>
        <td>${obj.country}</td>
        <td>${obj.state}</td>
        <td>${obj.city}</td>
        <td>${obj.tag}</td>
      </tr>`;
  });
}
function filterTable() {
  const countryFilter = document.getElementById('table-country').value;
  const stateFilter = document.getElementById('table-state').value;
  const cityFilter = document.getElementById('table-city').value;
  const tagFilter = document.getElementById('tags').value;
  const filteredData = data.filter((obj) => {
    return (
      (countryFilter === 'Country' || obj.country === countryFilter) &&
      (stateFilter === 'State' || obj.state === stateFilter) &&
      (cityFilter === 'City' || obj.city === cityFilter) &&
      (tagFilter === '' || obj.tag === tagFilter)
    );
  });
  document.getElementById('tableBody').innerHTML = '';
  filteredData.forEach((obj) => {
    document.getElementById('tableBody').innerHTML += `
      <tr>
        <td><input type="checkbox" class="select-checkbox"></td>
        <td>${obj.location}</td>
        <td>${obj.desc}</td>
        <td>${obj.country}</td>
        <td>${obj.state}</td>
        <td>${obj.city}</td>
        <td>${obj.tag}</td>
      </tr>`;
  });
};
document.getElementById('table-country').addEventListener('change', filterTable);
document.getElementById('table-state').addEventListener('change', filterTable);
document.getElementById('table-city').addEventListener('change', filterTable);

function saveToLocalStorage() {
  localStorage.setItem('formData', JSON.stringify(data));
};
function loadFromLocalStorage() {
  const formData = localStorage.getItem('formData');
  if (formData) {
    data = JSON.parse(formData);
    updateTable();
  }
};
// asign Tag form DropDown-------------------------------------------------------------------------------------------------------------------
const selectCheckboxElements = document.getElementsByClassName('select-checkbox');
const tagSelectElement = document.getElementById('tags');
const submitBtnElement = document.getElementById('submit-btn');

submitBtnElement.addEventListener('click', () => {
  const selectedTag = tagSelectElement.value;

  for (let i = 0; i < selectCheckboxElements.length; i++) {
    const selectCheckbox = selectCheckboxElements[i];

    if (selectCheckbox.checked) {
      const selectedRow = selectCheckbox.parentNode.parentNode;
      const tagColumn = selectedRow.querySelector('td:last-child');
      tagColumn.textContent = selectedTag;
      const rowIndex = selectedRow.rowIndex - 1;
      data[rowIndex]['tag'] = selectedTag;
      saveToLocalStorage();
      selectCheckbox.checked = false;
    }
  }
});
// remove Tag -------------------------------------------------------------------------------------------------------------------------------
const removeBtnElement = document.getElementById('remove-btn');
removeBtnElement.addEventListener('click', () => {
  for (let i = 0; i < selectCheckboxElements.length; i++) {
    const selectCheckbox = selectCheckboxElements[i];
    
    if (selectCheckbox.checked) {
      const selectedRow = selectCheckbox.parentNode.parentNode;
      const tagColumn = selectedRow.querySelector('td:last-child');
      tagColumn.textContent = '';
      selectCheckbox.checked = false;
    }
  }
});
loadFromLocalStorage();
// Create Tag -------------------------------------------------------------------------------------------------------------------------------
// Array to store tags
const tags = ['Home', 'Office', 'Others'];

function addTag() {
  const newTag = prompt('Enter a new tag:');
  if (newTag) {
    tags.push(newTag);
    const tagSelectElement = document.getElementById('tags');
    // Clear current options
    tagSelectElement.innerHTML = '';
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = '-- Select --';
    tagSelectElement.add(defaultOption);
    tags.forEach((tag) => {
      const option = document.createElement('option');
      option.value = tag;
      option.text = tag;
      tagSelectElement.add(option);
    });
    // Update the dropdown options
    updateTagOptions(storedTags);
    // Set the new tag as the selected option
    tagSelectElement.value = newTag;
  }
  
};
document.getElementById('add-tag-btn').addEventListener('click', addTag);
saveToLocalStorage();


