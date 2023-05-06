const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const routes = require('../routers');
const config = require('../configs');
const redisClient  = require('../configs/cache/instance');

const app = express();

app.locals.baseUrl = config.BASE_URL;
// global.redis = cache;
app.set('view engine', 'ejs');
app.set('redis', redisClient);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(morgan('dev'))
app.use(routes);

// app.set('cache' ,)
module.exports = app;
