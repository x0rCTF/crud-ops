'use strict';
  module.exports.delete = async (event) => {
    console.log('lambda DELETE entered')
    const response = {
        statusCode: 200,
        body: JSON.stringify('Book deleted!'),
    };
    return response;
  };