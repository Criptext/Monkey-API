# Monkey-API

Criptext node JS library to call to the REST API of the Monkey Protocol.

> Request example to send push notification to a known monkey ID.

```javascript

var MonkeyApi = require('criptext-monkey-api');

monkeyApi = new MonkeyApi("<API-ID>","<API-KEY>");


var dataJSON={
	users_to:"<MonkeyId1>,<MonkeyId2>",
	payload:{"text": "TeXt received in the push"}
}

 monkeyApi.basicRequest("POST", "/push/new", dataJSON, function(error, objResponse){

 	if(error != null){
            
 	 	console.log("DATA ERROR "+error);

 	 	return;
     }

	console.log("DATA SC "+JSON.stringify(jsonObjectRes));
          
          
});

```




