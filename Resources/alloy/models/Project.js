exports.definition = {
    config: {
        columns: {
            avatar: "string",
            name: "string",
            description: "string",
            project_url: "string",
            projectId: "integer",
            login: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "project"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("project", exports.definition, []);

collection = Alloy.C("project", exports.definition, model);

exports.Model = model;

exports.Collection = collection;