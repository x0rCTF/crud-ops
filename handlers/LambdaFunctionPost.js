'use strict';
  module.exports.post = async (event) => {
    console.log('lambda POST entered')
    const response = {
        statusCode: 200,
        body: JSON.stringify('Book created!'),
    };
    return response;
  };