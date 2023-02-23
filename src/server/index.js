const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('../routers');
const path = require('path');
const config = require('../configs');
const morgan = require('morgan');
const app = express();

app.locals.baseUrl =config.BASE_URL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.set('views', path.join(__dirname, '../views/pages'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use(routes);

module.exports = app;
