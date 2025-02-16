'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../src')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src', 'index.html'));
});

app.listen(8001, () => {
    console.log(`Server is running at http://localhost:${8001}`);
});
