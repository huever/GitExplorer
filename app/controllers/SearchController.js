var args = arguments[0];

$.titleLabel.text = '"' + args.searchText + '"';
var url = "https://api.github.com/search/repositories?q=" + args.searchText + "&order=desc";

var xhr = Ti.Network.createHTTPClient({
	onload : function(e) {
		var json = JSON.parse(this.responseText);
		if (json.items.lenght == 0)
			alert(L('noResults'));

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
	barColor : '#6f8896',
	showCancel : false
});

function addTable(JSONdata) {
	var tableData = new Array();
	var data = JSONdata;
	for (var i = 0; i < data.items.length; i++) {
		var row = Ti.UI.createTableViewRow({
			data : data.items[i].name,
			test : "DetailController",
			info : data.items[i],
			height : 80,
			favorite : false
		});

		var isFavorite = FavoritesHandler.checkProjectFavorite(data.items[i].id);
		// Create the favorite Star button
		var favoriteButton = Ti.UI.createButton({
			favoriteButton : true
		});

		$.addClass(favoriteButton, 'not-favorite');

		if (isFavorite) {
			$.addClass(favoriteButton, 'favorite');
			row.favorite = true;
		}

		row.add(favoriteButton);

		// View that contains the title and description of the project
		var view = Ti.UI.createView({
			left : 40,
			height : 80,
			width : Ti.UI.SIZE,
			layout : "vertical"
		});

		var title = Ti.UI.createLabel({
			left : 5,
			font : {
				fontSize : 16
			},
			text : data.items[i].name,
			color: "#070707"
		});

		var subtitleText = data.items[i].description;

		if (subtitleText !== "" && subtitleText !== null) {
			if (subtitleText.length >= 50)
				subtitleText.substring(0, 50);
		}

		var subtitle = Ti.UI.createLabel({
			left : 5,
			font : {
				fontSize : 12
			},
			text : subtitleText,
			color: "#727272"
		});

		view.add(title);
		view.add(subtitle);
		row.add(view);

		row.hasDetail = true;

		tableData.push(row);
	};

	var table = Titanium.UI.createTableView({
		filterAttribute : "data",
		search : searchbar,
		hideSearchOnSelection : true,
		data : tableData
	});

	// create table view event listener
	table.addEventListener('click', function(e) {
		if (e.source.favoriteButton) {
			if (e.rowData.favorite == false) {
				e.rowData.favorite = true;
				$.addClass(e.source, 'favorite');
				FavoritesHandler.saveProject(e.rowData.info);
			} else {
				e.rowData.favorite = false;
				$.removeClass(e.source, 'favorite');
				FavoritesHandler.removeProject(e.rowData.info.id);
			}
		} else if (e.rowData.test) {
			var detailController = Alloy.createController(e.rowData.test, {
				info : e.rowData.info
			});
			if (OS_IOS) {
				detailController.getView().open({
					transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
				});
			} else {
				detailController.getView().open();
			}
		}
	});

	// now assign that array to the table's data property to add those objects as rows
	$.tableView.add(table);
}

$.mainContainer.addEventListener('android:back', function() {
	backToHome();
});

if (OS_ANDROID) {
	$.backButton.visible = false;
}

