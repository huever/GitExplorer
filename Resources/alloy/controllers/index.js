function Controller() {
    function search() {
        "" === $.searchField.value ? alert("Complete") : goToNext($.searchField.value);
    }
    function goToNext(searchText) {
        var searchController = Alloy.createController("SearchController", {
            searchText: searchText
        });
        searchController.getView().open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
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
    $.__views.__alloyId1 = Ti.UI.createLabel({
        top: 20,
        text: "Busqueda",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.searchField = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        height: 40,
        width: 300,
        top: 10,
        id: "searchField"
    });
    $.__views.index.add($.__views.searchField);
    $.__views.search = Ti.UI.createButton({
        width: 300,
        height: 40,
        backgroundColor: "white",
        borderRadius: 5,
        borderColor: "#a5d686",
        color: "black",
        top: 10,
        title: "Buscar",
        id: "search"
    });
    $.__views.index.add($.__views.search);
    search ? $.__views.search.addEventListener("click", search) : __defers["$.__views.search!click!search"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.search!click!search"] && $.__views.search.addEventListener("click", search);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;