$.title.text = L('indexTitle');
$.search.title = L('indexSearchButton');

function search(e) {
	if ($.searchField.value === "") {
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

$.logo.addEventListener("click", function() {
	if (OS_IOS)
		$.searchField.blur();
	else
		Ti.Android.hideSoftKeyboard();
});

$.index.open();
