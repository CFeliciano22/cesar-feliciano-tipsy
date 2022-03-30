const express = require('express');
require('dotenv').config();
const cors =require('cors');
const restaurantRoutes = require('./routes/restaurants');


const app = express();

app.use(cors());

app.use(express.json());

app.use('/restaurants', restaurantRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));