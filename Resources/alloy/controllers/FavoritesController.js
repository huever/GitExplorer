function Controller() {
    function backToHome() {
        $.mainContainer.close({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
    }
    function addTable(JSONdata) {
        var tableData = new Array();
        var data = FavoritesHandler.parseData(JSONdata);
        for (var i = 0; data.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                data: data[i].name,
                test: "DetailController",
                info: data[i],
                favorite: true,
                height: 80
            });
            var favoriteButton = Ti.UI.createButton({
                favoriteButton: true
            });
            $.addClass(favoriteButton, "favorite");
            row.add(favoriteButton);
            var view = Ti.UI.createView({
                left: 40,
                height: 80,
                width: Ti.UI.SIZE,
                layout: "vertical"
            });
            var title = Ti.UI.createLabel({
                left: 5,
                font: {
                    fontSize: 16
                },
                text: data[i].name
            });
            var subtitleText = data[i].description;
            "" !== subtitleText && null !== subtitleText && subtitleText.length >= 50 && subtitleText.substring(0, 50);
            var subtitle = Ti.UI.createLabel({
                left: 5,
                font: {
                    fontSize: 12
                },
                text: subtitleText
            });
            view.add(title);
            view.add(subtitle);
            row.add(view);
            row.hasDetail = true;
            row.setHeight(100);
            tableData.push(row);
        }
        var table = Titanium.UI.createTableView({
            filterAttribute: "data",
            search: searchbar,
            hideSearchOnSelection: true,
            data: tableData
        });
        table.addEventListener("click", function(e) {
            if (e.source.favoriteButton) {
                if (true == e.rowData.favorite) {
                    e.rowData.favorite = false;
                    FavoritesHandler.removeProject(e.rowData.info.projectId);
                    table.deleteRow(e.index, {
                        animationStyle: Titanium.UI.iPhone.RowAnimationStyle.FADE
                    });
                }
            } else if (e.rowData.test) {
                var detailController = Alloy.createController(e.rowData.test, {
                    info: e.rowData.info
                });
                detailController.getView().open({
                    transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
                });
            }
        });
        $.tableView.add(table);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FavoritesController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainContainer = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "mainContainer"
    });
    $.__views.mainContainer && $.addTopLevelView($.__views.mainContainer);
    $.__views.header = Ti.UI.createView({
        backgroundColor: "F1F1F1",
        id: "header",
        height: Ti.UI.SIZE
    });
    $.__views.mainContainer.add($.__views.header);
    $.__views.backButton = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        top: 15,
        left: 10,
        title: L("backButton"),
        id: "backButton"
    });
    $.__views.header.add($.__views.backButton);
    backToHome ? $.__views.backButton.addEventListener("click", backToHome) : __defers["$.__views.backButton!click!backToHome"] = true;
    $.__views.titleLabel = Ti.UI.createLabel({
        top: 18,
        width: Ti.UI.FILL,
        textAlign: "center",
        id: "titleLabel"
    });
    $.__views.header.add($.__views.titleLabel);
    $.__views.border = Ti.UI.createView({
        borderColor: "#536570",
        height: 1,
        id: "border"
    });
    $.__views.mainContainer.add($.__views.border);
    $.__views.tableView = Ti.UI.createView({
        id: "tableView"
    });
    $.__views.mainContainer.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.titleLabel.text = L("favoritesTitle");
    var searchbar = Ti.UI.createSearchBar({
        barColor: "#6f8896",
        showCancel: false
    });
    var projects = FavoritesHandler.getAll();
    addTable(projects);
    __defers["$.__views.backButton!click!backToHome"] && $.__views.backButton.addEventListener("click", backToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;