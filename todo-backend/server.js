require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// LISTENER
app.listen(PORT, () => {
    `Listening on port: ${PORT}`;
});