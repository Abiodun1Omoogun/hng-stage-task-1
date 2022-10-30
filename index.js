const fs= require('fs');
const data = fs.readFileSync('biodata.json');
const user = JSON.parse(data);
const express = require('express');
const _ = require('lodash');
const { v4: uuid } = require('uuid');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.get('/user', alldata);

function alldata(req, res) {
    res.send(user);
}

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Api Server is running ${PORT}...`));
