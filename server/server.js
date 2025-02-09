'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('/home/chsd/frontend-learning/dist'));
app.use(express.static('/home/chsd/frontend-learning/src'));

app.get('/*', (req, res) => {
    res.sendFile('/home/chsd/frontend-learning/src/index.html');
});

app.listen(8001, () => {
    console.log(`Server is running at http://localhost:${8001}`);
});
