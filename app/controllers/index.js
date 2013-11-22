$.title.text = L('indexTitle');
$.search.title = L('indexSearchButton');
$.favorites.title = L('indexFavoritesButton');

function search(e) {
	if ($.searchField.value === "") {
		alert("Complete");
	} else {
		goToNext($.searchField.value);
	}
}

function searchList(e) {
	if ($.searchField.value === "") {
		alert("Complete");
	} else {
		goToList($.searchField.value);
	}
}

function login(e) {
	var loginController = Alloy.createController('LoginController');
	if (OS_IOS) {
		loginController.getView().open({
			modal : true,
			modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
		});
	} else {
		loginController.getView().open();
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

function goToList(searchText) {
	var searchListController = Alloy.createController('SearchListController', {
		searchText : searchText
	});
	if (OS_IOS) {
		searchListController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		searchListController.getView().open();
	}
}

function goToFavorites() {
	var favoritesController = Alloy.createController('FavoritesController');
	if (OS_IOS) {
		favoritesController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		favoritesController.getView().open();
	}
}

$.logo.addEventListener("click", function() {
	if (OS_IOS)
		$.searchField.blur();
});

Ti.Gesture.addEventListener('orientationchange', function(e) {
	if (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT) {
		$.logo.height = 80;
		$.mainContainer.backgroundImage = "/images/Background-land.png";
	} else {
		$.logo.height = 200;
		$.mainContainer.backgroundImage = "/images/Background.png";
	}
});

$.mainContainer.open();
