const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./config/dbConnector');
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
