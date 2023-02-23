const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('../routes');
const db = require('../configs/database/instance');
const path = require('path');
const config = require('../configs');
const app = express();

app.locals.baseUrl =config.BASE_URL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.set('views', path.join(__dirname, '../views/pages'));
app.use(express.static(path.join(__dirname, '../public')));

db();

app.use(routes);

module.exports = app;