const path = require('path');
/*

* @param {Object} res - Express response object
* @param {String} service - Service name
* @param {String} view - View name
* @param {Object} data - Data to be passed to the view
* @returns {Object} - Rendered view

*/
module.exports = (res, service, view, data = {}) => {
  return res.render(path.join(__dirname, `../services/${service}/views/${view}.ejs`), data);
}