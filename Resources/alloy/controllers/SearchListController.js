function Controller() {
    function __alloyId16() {
        __alloyId16.opts || {};
        var models = __alloyId15.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId6 = Ti.UI.createTableViewRow({
                height: 80,
                hasDetail: true,
                info: "undefined" != typeof __alloyId5.__transform["info"] ? __alloyId5.__transform["info"] : __alloyId5.get("info"),
                test: "DetailController",
                favorite: "undefined" != typeof __alloyId5.__transform["favorite"] ? __alloyId5.__transform["favorite"] : __alloyId5.get("favorite"),
                data: "undefined" != typeof __alloyId5.__transform["name"] ? __alloyId5.__transform["name"] : __alloyId5.get("name")
            });
            rows.push(__alloyId6);
            var __alloyId8 = Ti.UI.createButton({
                backgroundImage: "/images/favorite0.png",
                left: 5,
                top: 25,
                bottom: 25,
                height: 30,
                width: 30,
                favoriteButton: "true"
            });
            __alloyId6.add(__alloyId8);
            var __alloyId10 = Ti.UI.createView({
                top: 5,
                left: 40,
                height: 80,
                width: Ti.UI.FILL,
                layout: "vertical"
            });
            __alloyId6.add(__alloyId10);
            var __alloyId12 = Ti.UI.createLabel({
                left: 5,
                font: {
                    fontSize: 16
                },
                text: "undefined" != typeof __alloyId5.__transform["name"] ? __alloyId5.__transform["name"] : __alloyId5.get("name")
            });
            __alloyId10.add(__alloyId12);
            var __alloyId14 = Ti.UI.createLabel({
                left: 5,
                font: {
                    fontSize: 12
                },
                text: "undefined" != typeof __alloyId5.__transform["description"] ? __alloyId5.__transform["description"] : __alloyId5.get("description")
            });
            __alloyId10.add(__alloyId14);
        }
        $.__views.projectSearchTable.setData(rows);
    }
    function backToHome() {
        $.mainContainer.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SearchListController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("projectSearch");
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
    $.__views.projectSearchTable = Ti.UI.createTableView({
        id: "projectSearchTable"
    });
    $.__views.mainContainer.add($.__views.projectSearchTable);
    var __alloyId15 = Alloy.Collections["projectSearch"] || projectSearch;
    __alloyId15.on("fetch destroy change add remove reset", __alloyId16);
    exports.destroy = function() {
        __alloyId15.off("fetch destroy change add remove reset", __alloyId16);
    };
    _.extend($, $.__views);
    var args = arguments[0];
    $.titleLabel.text = '"' + args.searchText + '"';
    var projectSearch = Alloy.Collections.projectSearch;
    projectSearch.fetch({
        urlparams: {
            q: args.searchText,
            order: "desc"
        }
    });
    __defers["$.__views.backButton!click!backToHome"] && $.__views.backButton.addEventListener("click", backToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;