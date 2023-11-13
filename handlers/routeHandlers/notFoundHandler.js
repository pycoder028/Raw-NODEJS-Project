/*
 * Title: Not found Handler
 * Description: 404 Not Found! handler.
 * Author: Forhad Hossain ( callbackMind )
 * Date: 12/11/23 
*/

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was NOT FOUND!',
    });
};

module.exports = handler;