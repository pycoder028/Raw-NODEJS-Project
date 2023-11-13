/*
 * Title: Routes
 * Description: Application Routes.
 * Author: Forhad Hossain ( callbackMind )
 * Date: 12/11/23 
*/

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;