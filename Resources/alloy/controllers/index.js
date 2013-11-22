function Controller() {
    function search() {
        "" === $.searchField.value ? alert("Complete") : goToNext($.searchField.value);
    }
    function searchList() {
        "" === $.searchField.value ? alert("Complete") : goToList($.searchField.value);
    }
    function goToNext(searchText) {
        var searchController = Alloy.createController("SearchController", {
            searchText: searchText
        });
        searchController.getView().open();
    }
    function goToList(searchText) {
        var searchListController = Alloy.createController("SearchListController", {
            searchText: searchText
        });
        searchListController.getView().open();
    }
    function goToFavorites() {
        var favoritesController = Alloy.createController("FavoritesController");
        favoritesController.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainContainer = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        navBarHidden: true,
        backgroundImage: "/images/Background.png",
        height: Ti.UI.FILL,
        id: "mainContainer"
    });
    $.__views.mainContainer && $.addTopLevelView($.__views.mainContainer);
    $.__views.title = Ti.UI.createLabel({
        top: 20,
        color: "#070707",
        id: "title"
    });
    $.__views.mainContainer.add($.__views.title);
    $.__views.searchField = Ti.UI.createTextField({
        borderRadius: 5,
        borderColor: "#5a6f7a",
        color: "#336699",
        backgroundColor: "#ccdbe2",
        height: 40,
        width: 300,
        top: 10,
        borderWidth: 2,
        id: "searchField"
    });
    $.__views.mainContainer.add($.__views.searchField);
    $.__views.actionButtonsContainer = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "actionButtonsContainer"
    });
    $.__views.mainContainer.add($.__views.actionButtonsContainer);
    $.__views.actionButtons = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        width: Ti.UI.SIZE,
        textAlign: "center",
        id: "actionButtons"
    });
    $.__views.actionButtonsContainer.add($.__views.actionButtons);
    $.__views.search = Ti.UI.createButton({
        width: 140,
        height: 40,
        backgroundColor: "#6F8896",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#5a6f7a",
        color: "white",
        top: 10,
        right: 8,
        left: 8,
        id: "search"
    });
    $.__views.actionButtons.add($.__views.search);
    search ? $.__views.search.addEventListener("click", search) : __defers["$.__views.search!click!search"] = true;
    $.__views.searchList = Ti.UI.createButton({
        width: 140,
        height: 40,
        backgroundColor: "#6F8896",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#5a6f7a",
        color: "white",
        top: 10,
        right: 8,
        left: 8,
        title: "Search List",
        id: "searchList"
    });
    $.__views.actionButtons.add($.__views.searchList);
    searchList ? $.__views.searchList.addEventListener("click", searchList) : __defers["$.__views.searchList!click!searchList"] = true;
    $.__views.logo = Ti.UI.createImageView({
        image: "/images/github-logo.png",
        top: 10,
        height: 200,
        id: "logo"
    });
    $.__views.mainContainer.add($.__views.logo);
    $.__views.favorites = Ti.UI.createButton({
        width: 300,
        height: 40,
        backgroundColor: "#6F8896",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#5a6f7a",
        color: "white",
        bottom: 5,
        id: "favorites"
    });
    $.__views.mainContainer.add($.__views.favorites);
    goToFavorites ? $.__views.favorites.addEventListener("click", goToFavorites) : __defers["$.__views.favorites!click!goToFavorites"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.title.text = L("indexTitle");
    $.search.title = L("indexSearchButton");
    $.favorites.title = L("indexFavoritesButton");
    $.logo.addEventListener("click", function() {});
    Ti.Gesture.addEventListener("orientationchange", function() {
        if (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT) {
            $.logo.height = 80;
            $.mainContainer.backgroundImage = "/images/Background-land.png";
        } else {
            $.logo.height = 200;
            $.mainContainer.backgroundImage = "/images/Background.png";
        }
    });
    $.mainContainer.open();
    __defers["$.__views.search!click!search"] && $.__views.search.addEventListener("click", search);
    __defers["$.__views.searchList!click!searchList"] && $.__views.searchList.addEventListener("click", searchList);
    __defers["$.__views.favorites!click!goToFavorites"] && $.__views.favorites.addEventListener("click", goToFavorites);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;