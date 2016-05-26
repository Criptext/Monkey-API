
var request = require('request');

(function (){
	'use strict';

  function MonkeyApi(appKey, appSecret){

  	if (appKey == null || appSecret == null) {
      throw 'Monkey - To initialize Monkey, you must provide your App Id and App Secret';
      return;
    }

    this.appKey = appKey;
    this.appSecret = appSecret;

    this.domainUrl = 'monkey.criptext.com';

    return this;
  }


  	var proto = MonkeyApi.prototype;
  	var exports = this;
  

   	proto.basicRequest = function basicRequest(methodName, endpointUrl, dataObj, callback){
	    
	    var requestObj={
	        method : methodName,
	        url : 'https://'+this.domainUrl+endpointUrl,
	        json : true,
	        headers : {
	          "Authorization" : "Basic " + new Buffer(this.appKey+":"+this.appSecret).toString("base64")
	        }
	      }

	    if(dataObj)
	    {
	    	requestObj.body= {data: JSON.stringify(dataObj)};
	    }

	    request(requestObj,function (error, response, body) {

	        callback(error, body);
	    });
  	}

  	// Expose the class either via AMD, CommonJS or the global object
	  if (typeof define === 'function' && define.amd) {
	    define(function () {
	      return MonkeyApi;
	    });
	  }
	  else if (typeof module === 'object' && module.exports){
	    module.exports = MonkeyApi;
	  }
	  else {
	    exports.MonkeyApi = MonkeyApi;
	  }

})();




