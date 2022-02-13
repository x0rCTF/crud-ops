'use strict';
  module.exports.put = async (event) => {
    console.log('lambda PATCH entered')
    const response = {
        statusCode: 200,
        body: JSON.stringify('Book updated!'),
    };
    return response;
  };