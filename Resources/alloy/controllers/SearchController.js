function Controller() {
    function backToHome() {
        $.mainContainer.close();
    }
    function addTable(JSONdata) {
        var tableData = new Array();
        var data = JSONdata;
        for (var i = 0; data.items.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                data: data.items[i].name,
                test: "DetailController",
                info: data.items[i]
            });
            var title = Ti.UI.createLabel({
                left: 15,
                font: {
                    fontSize: 22
                },
                text: data.items[i].name
            });
            var subtitleText = data.items[i].description;
            "" !== subtitleText && null !== subtitleText && subtitleText.length >= 50 && subtitleText.substring(0, 50);
            var subtitle = Ti.UI.createLabel({
                left: 15,
                font: {
                    fontSize: 14
                },
                text: subtitleText
            });
            row.hasDetail = true;
            row.add(title);
            row.add(subtitle);
            row.setLayout("vertical");
            row.setHeight(80);
            tableData.push(row);
        }
        var table = Titanium.UI.createTableView({
            filterAttribute: "data",
            search: searchbar,
            hideSearchOnSelection: true,
            data: tableData
        });
        table.addEventListener("click", function(e) {
            if (e.rowData.test) {
                var detailController = Alloy.createController(e.rowData.test, {
                    info: e.rowData.info
                });
                detailController.getView().open();
            }
        });
        $.tableView.add(table);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SearchController";
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
    var args = arguments[0];
    $.titleLabel.text = '"' + args.searchText + '"';
    var url = "https://api.github.com/search/repositories?q=" + args.searchText + "&order=desc";
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            var json = JSON.parse(this.responseText);
            0 == json.items.lenght && alert("No hay resultados");
            addTable(json);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    xhr.open("GET", url);
    xhr.send();
    var searchbar = Ti.UI.createSearchBar({
        barColor: "#6f8896",
        showCancel: false
    });
    __defers["$.__views.backButton!click!backToHome"] && $.__views.backButton.addEventListener("click", backToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;