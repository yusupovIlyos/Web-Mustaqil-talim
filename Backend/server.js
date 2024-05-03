const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/index'))
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server ishga tushdi port: ${PORT}`);
});