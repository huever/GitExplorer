function login() {
	var url = "https://api.github.com" + "/" + $.userField.value;

	var username = 'huever';
	var password = $.passwordField.value;
	
	var parameters = {
		user : username,
		password : password
	};

	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			Ti.API.debug(e);
			alert(this.responseText);
			/*
			 var json = JSON.parse(this.responseText);
			 if (json.items.lenght == 0)
			 alert(L('noResults'));

			 addTable(json);*/
		},
		onerror : function(e) {
			// this function is called when an error occurs, including a timeout
			Ti.API.debug(e.error);
			alert('error');
		},
		timeout : 5000 /* in milliseconds */
	});
	
	xhr.open("POST", url);	
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(parameters);
}


function close() {
	$.LoginController.close();
}