'use strict';
  module.exports.any = async (event) => {
    console.log('lambda PATCH entered')
    const response = {
        statusCode: 200,
        body: JSON.stringify('Any method lambda!'),
    };
    return response;
  };