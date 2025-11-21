const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bugRoutes = require('./routes/bugs');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));
