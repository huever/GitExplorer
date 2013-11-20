var args = arguments[0];
$.titleLabel.text = '"' + args.searchText + '"';

var projectSearch = Alloy.Collections.projectSearch;
projectSearch.fetch({
	urlparams : {
		q : args.searchText,
		order : "desc"
	}
});

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

$.projectSearchTable.setFilterAttribute("data");
$.projectSearchTable.setSearch(searchbar);


$.projectSearchTable.addEventListener('click', function(e) {
	if (e.source.favoriteButton) {
		if (e.rowData.favorite == false || e.rowData.favorite == undefined) {
			e.rowData.favorite = true;
			$.addClass(e.source, 'favorite');
			FavoritesHandler.saveProject(e.rowData.info);
		} else {
			e.rowData.favorite = false;
			$.removeClass(e.source, 'favorite');
			$.addClass(e.source, 'not-favorite');
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
