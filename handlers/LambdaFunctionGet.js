'use strict';
  module.exports.get = async (event) => {
    console.log('lambda GET entered')
    const response = {
        statusCode: 200,
        body: JSON.stringify('Book read!'),
    };
    return response;
  };