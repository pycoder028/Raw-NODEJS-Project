/*
 * Title: Sample Handler
 * Description: Sample handler
 * Author: Forhad Hossain ( callbackMind )
 * Date: 12/11/23 
*/

// module sacffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200,{
        message: 'This is a sample url',
    });
};

module.exports = handler;