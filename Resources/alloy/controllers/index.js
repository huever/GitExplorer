function Controller() {
    function search() {
        "" === $.searchField.value ? alert("Complete") : goToNext($.searchField.value);
    }
    function goToNext(searchText) {
        var searchController = Alloy.createController("SearchController", {
            searchText: searchText
        });
        searchController.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.title = Ti.UI.createLabel({
        top: 20,
        id: "title"
    });
    $.__views.index.add($.__views.title);
    $.__views.searchField = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        backgroundColor: "#ccdbe2",
        height: 40,
        width: 300,
        top: 10,
        id: "searchField"
    });
    $.__views.index.add($.__views.searchField);
    $.__views.search = Ti.UI.createButton({
        width: 300,
        height: 40,
        backgroundColor: "#6F8896",
        borderRadius: 5,
        borderColor: "#5a6f7a",
        color: "white",
        top: 10,
        id: "search"
    });
    $.__views.index.add($.__views.search);
    search ? $.__views.search.addEventListener("click", search) : __defers["$.__views.search!click!search"] = true;
    $.__views.logo = Ti.UI.createImageView({
        image: "/images/github-logo.png",
        top: 20,
        id: "logo"
    });
    $.__views.index.add($.__views.logo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.title.text = L("indexTitle");
    $.search.title = L("indexSearchButton");
    $.logo.addEventListener("click", function() {
        Ti.Android.hideSoftKeyboard();
    });
    $.index.open();
    __defers["$.__views.search!click!search"] && $.__views.search.addEventListener("click", search);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;