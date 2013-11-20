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
	}
};