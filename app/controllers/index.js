function search(e) {
	if ($.searchField.value === "" ) {
		alert("Complete");
	} else {
		goToNext($.searchField.value);
	}
}

function goToNext(searchText) {
	var searchController = Alloy.createController('SearchController', {
		searchText : searchText
	});
	if (OS_IOS) {
		searchController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		searchController.getView().open();
	}
}

$.index.open();
