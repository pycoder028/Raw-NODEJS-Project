/*
 * Title: Handle Request Response
 * Description: Handle request and response
 * Author: Forhad Hossain ( callbackMind )
 * Date: 12/11/23 
*/

// dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler');

// module scaffolding
const handler = {};

handler.handleReqRes = (req,res) => {
    // request handleing
    // get the url and parse it
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const choseHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    choseHandler(requestProperties, (statusCode, payload) =>{
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) =>{
        realData += decoder.write(buffer);
    });
    req.on('end', () =>{
        realData += decoder.end();

        console.log(realData);
        // response handle
        res.end('Hello JavaScript');
    });
};

module.exports = handler;