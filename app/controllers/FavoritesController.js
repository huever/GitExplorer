$.titleLabel.text = L('favoritesTitle');

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

var projects = FavoritesHandler.getAll();

addTable(projects);

function addTable(JSONdata) {
	var tableData = new Array();
	var data = FavoritesHandler.parseData(JSONdata);

	for (var i = 0; i < data.length; i++) {

		var row = Ti.UI.createTableViewRow({
			data : data[i].name,
			test : "DetailController",
			info : data[i],
			favorite : true,
			height : 80
		});

		// Create the favorite Star button
		var favoriteButton = Ti.UI.createButton();
		$.addClass(favoriteButton, 'favorite');
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
			text : data[i].name
		});

		var subtitleText = data[i].description;

		if (subtitleText !== "" && subtitleText !== null) {
			if (subtitleText.length >= 50)
				subtitleText.substring(0, 50);
		}

		var subtitle = Ti.UI.createLabel({
			left : 5,
			font : {
				fontSize : 12
			},
			text : subtitleText
		});

		view.add(title);
		view.add(subtitle);
		row.add(view);

		row.hasDetail = true;

		row.setHeight(100);

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
		if (e.source.toString() == '[object TiUIButton]') {
			if (e.rowData.favorite == true) {
				e.rowData.favorite = false;
				FavoritesHandler.removeProject(e.rowData.info.projectId);
				if (OS_IOS)
					table.deleteRow(e.index, {
						animationStyle : Titanium.UI.iPhone.RowAnimationStyle.FADE
					});
				else
					table.deleteRow(e.index);
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
