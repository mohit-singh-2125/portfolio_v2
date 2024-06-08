const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv =require('dotenv');
dotenv.config('.env')
const { VERSION, PORT } = process.env;
const routes = require('./routes')
const dbConnect = require('./models/index');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

dbConnect.bootstrap()

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});


app.use(`/api/`, routes);


