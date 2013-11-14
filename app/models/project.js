exports.definition = {
	config : {
		columns : {
			"avatar" : "string",
			"name" : "string",
			"description" : "string",
			"project_url" : "string",
			"projectId" : "integer",
			"login" : "string"
		},
		adapter : {
			type : "sql",
			collection_name : "project"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};