const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu.routes'); 
const authRoutes = require('./routes/auth.routes'); 
const reservaRoutes = require('./routes/reserva.routes'); 
const cors = require('cors'); 


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/menu', menuRoutes);
app.use('/api/reserva', reservaRoutes);

app.use('/api/auth', authRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});