const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use(bodyParser.json());

let storedData = {
    passwords: [],
    usernames: [],
    notes: [],
};

app.get('/api/data', (req, res) => {
    res.json(storedData);
});

app.post('/api/save', (req, res) => {
    const { type, value } = req.body;

    if (type && value) {
        storedData[type].push(value);
        res.json({ success: true, message: 'Data saved successfully.' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid request parameters.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
