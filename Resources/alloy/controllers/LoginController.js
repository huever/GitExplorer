function Controller() {
    function login() {
        var url = "https://api.github.com/" + $.userField.value;
        var username = "huever";
        var password = $.passwordField.value;
        var parameters = {
            user: username,
            password: password
        };
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                Ti.API.debug(e);
                alert(this.responseText);
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5e3
        });
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(parameters);
    }
    function close() {
        $.LoginController.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "LoginController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.LoginController = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        navBarHidden: true,
        backgroundImage: "/images/cloud2.png",
        id: "LoginController"
    });
    $.__views.LoginController && $.addTopLevelView($.__views.LoginController);
    $.__views.user = Ti.UI.createLabel({
        top: 20,
        color: "#070707",
        text: "Usuario",
        id: "user"
    });
    $.__views.LoginController.add($.__views.user);
    $.__views.userField = Ti.UI.createTextField({
        borderRadius: 5,
        borderColor: "#5a6f7a",
        color: "#336699",
        backgroundColor: "#ccdbe2",
        height: 40,
        width: 300,
        top: 10,
        borderWidth: 2,
        id: "userField"
    });
    $.__views.LoginController.add($.__views.userField);
    $.__views.password = Ti.UI.createLabel({
        top: 20,
        color: "#070707",
        text: "Contraseña",
        id: "password"
    });
    $.__views.LoginController.add($.__views.password);
    $.__views.passwordField = Ti.UI.createTextField({
        borderRadius: 5,
        borderColor: "#5a6f7a",
        color: "#336699",
        backgroundColor: "#ccdbe2",
        height: 40,
        width: 300,
        top: 10,
        borderWidth: 2,
        passwordMask: "true",
        id: "passwordField"
    });
    $.__views.LoginController.add($.__views.passwordField);
    $.__views.__alloyId0 = Ti.UI.createButton({
        width: 300,
        height: 40,
        backgroundColor: "#6F8896",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#5a6f7a",
        color: "white",
        title: "Close",
        id: "__alloyId0"
    });
    $.__views.LoginController.add($.__views.__alloyId0);
    close ? $.__views.__alloyId0.addEventListener("click", close) : __defers["$.__views.__alloyId0!click!close"] = true;
    $.__views.__alloyId1 = Ti.UI.createButton({
        width: 300,
        height: 40,
        backgroundColor: "#6F8896",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#5a6f7a",
        color: "white",
        title: "Login",
        id: "__alloyId1"
    });
    $.__views.LoginController.add($.__views.__alloyId1);
    login ? $.__views.__alloyId1.addEventListener("click", login) : __defers["$.__views.__alloyId1!click!login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId0!click!close"] && $.__views.__alloyId0.addEventListener("click", close);
    __defers["$.__views.__alloyId1!click!login"] && $.__views.__alloyId1.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;