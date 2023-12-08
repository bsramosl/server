const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./menu.routes'); 
const cors = require('cors'); 


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/menu', menuRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});