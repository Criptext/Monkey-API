# Monkey-API

Criptext node JS library to call to the REST API of the Monkey Protocol.

> Request example to send push notification to a known monkey ID.

```javascript

	let MonkeyApi = require('criptext-monkey-api');

	monkeyApi = new MonkeyApi("<API-ID>","<API-KEY>");


	let dataJSON={
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


> Request example to send a message to a known monkey ID.

```javascript

		let monkeyApi = new MonkeyApi("<API-ID>","<API-KEY>");

    let temporalId=String(Math.round((new Date().getTime() / 1000) * -1));

    const dataJSON={
        messageData:{
	        "app_id":"<API-ID>",
	        "id":temporalId,
	        "sid":"<MonkeyIdSender>",
	        "rid":"<MonkeyIdReceiver>",
	        "type":1, // is a text
	        "msg": new Buffer(payload.text).toString('base64') , // Sending text with special chars and encoding with Base64
	        "props": {encr:0, encoding:"base64" },
	        "datetime":(new Date().getTime() / 1000),
					"push": JSON.stringify({text:"pushText", andData:{alert: "pushText" }})
        }
    }

    monkeyApi.basicRequest("POST", "/message/send", dataJSON, callback);

```
