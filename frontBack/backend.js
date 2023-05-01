const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.post('/api/user', (req, res) => {
  const { name, email, password } = req.body;

  // read existing data from file
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync('data.json'));
  } catch (error) {
    console.error('Error reading data file:', error);
  }

  // add new user to data array
  data.push({ name, email, password });

  // write data back to file
  try {
    fs.writeFileSync('data.json', JSON.stringify(data));
  } catch (error) {
    console.error('Error writing data file:', error);
  }

  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
