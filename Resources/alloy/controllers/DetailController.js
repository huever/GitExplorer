function Controller() {
    function back() {
        $.mainContainer.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "DetailController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainContainer = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/images/detail.png",
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
    back ? $.__views.backButton.addEventListener("click", back) : __defers["$.__views.backButton!click!back"] = true;
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
    $.__views.owner = Ti.UI.createLabel({
        id: "owner"
    });
    $.__views.mainContainer.add($.__views.owner);
    $.__views.avatar = Ti.UI.createImageView({
        width: 100,
        height: 100,
        top: 15,
        id: "avatar"
    });
    $.__views.mainContainer.add($.__views.avatar);
    $.__views.description = Ti.UI.createLabel({
        left: 5,
        font: {
            fontSize: 18
        },
        top: 10,
        id: "description"
    });
    $.__views.mainContainer.add($.__views.description);
    $.__views.descriptionText = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 14
        },
        id: "descriptionText"
    });
    $.__views.mainContainer.add($.__views.descriptionText);
    $.__views.url = Ti.UI.createLabel({
        left: 5,
        font: {
            fontSize: 18
        },
        top: 10,
        id: "url"
    });
    $.__views.mainContainer.add($.__views.url);
    $.__views.urlText = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 14
        },
        id: "urlText"
    });
    $.__views.mainContainer.add($.__views.urlText);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0];
    $.titleLabel.text = args.info.name;
    $.descriptionText.text = args.info.description;
    $.urlText.text = args.info.html_url;
    $.avatar.image = args.info.owner.avatar_url;
    $.owner.text = args.info.owner.login;
    $.description.text = L("detailDescription");
    $.url.text = L("detailURL");
    __defers["$.__views.backButton!click!back"] && $.__views.backButton.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;