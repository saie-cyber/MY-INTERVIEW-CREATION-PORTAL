const express = require ('express');
const path = require ('path');
const db = require ('./db'); 

const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./Routes/Api').route);

app.listen('8000', () => console.log("Server started at http://localhost:8000"));