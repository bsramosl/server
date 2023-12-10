const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu.routes'); 
const authRoutes = require('./routes/auth.routes'); 
const reservaRoutes = require('./routes/reserva.routes'); 
const userRoutes = require('./routes/user.routes'); 
const ubicacionRoutes = require('./routes/ubicacion.routes'); 
const barRoutes = require('./routes/bar.routes'); 
const cors = require('cors'); 


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/menu', menuRoutes);
app.use('/api/reserva', reservaRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/auth', userRoutes); 
app.use('/api/location', ubicacionRoutes); 
app.use('/api/bar', barRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});