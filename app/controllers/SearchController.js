var args = arguments[0];

//var url = "https://api.github.com/search/repositories?q=" + args.searchText + "+language:assembly&sort=stars&order=desc";
var url = "https://api.github.com/search/repositories?q=" + args.searchText + "&order=desc";
var xhr = Ti.Network.createHTTPClient({
	onload : function(e) {
		var json = JSON.parse(this.responseText);
		if(json.items.lenght == 0)
			alert('No hay resultados');
			
		addTable(json);
	},
	onerror : function(e) {
		// this function is called when an error occurs, including a timeout
		Ti.API.debug(e.error);
		alert('error');
	},
	timeout : 5000 /* in milliseconds */
});

xhr.open("GET", url);
xhr.send();
// request is actually sent with this statement

function backToHome() {
	if (OS_IOS) {
		$.mainContainer.close({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
		});
	} else {
		$.mainContainer.close();
	}
}

var searchbar = Ti.UI.createSearchBar({
	barColor : '#dddddd',
	showCancel : false
});

function addTable(JSONdata) {
	var tableData = new Array();
	var data = JSONdata;
	for (var i = 0; i < data.items.length; i++) {
		var row = Ti.UI.createTableViewRow({
			data : data.items[i].name
		});

		var title = Ti.UI.createLabel({
			left : 15,
			font : {
				fontSize : 22
			},
			text : data.items[i].name
		});

		var subtitleText = data.items[i].description;

		if (subtitleText !== "" && subtitleText !== null) {
			if (subtitleText.length >= 50)
				subtitleText.substring(0, 50);
		}

		var subtitle = Ti.UI.createLabel({
			left : 15,
			font : {
				fontSize : 14
			},
			text : subtitleText
		});

		row.add(title);
		row.add(subtitle);
		row.setLayout('vertical');
		row.setHeight(80);

		tableData.push(row);
	};

	var table = Titanium.UI.createTableView({
		filterAttribute : "data",
		search : searchbar,
		hideSearchOnSelection : true,
		data : tableData
	});

	// now assign that array to the table's data property to add those objects as rows
	$.tableView.add(table);
}