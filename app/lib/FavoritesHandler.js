exports.checkProjectFavorite = function(projectId) {
	var project = Alloy.createModel('project');
	project.fetch({
		query : "SELECT * from project WHERE projectId = " + projectId
	});

	if (project.attributes.projectId != undefined)
		return true;
	else
		return false;
};

exports.saveProject = function(projectInfo) {
	var project = Alloy.createModel('project', {
		avatar : projectInfo.owner.avatar_url,
		name : projectInfo.name,
		description : projectInfo.description,
		project_url : projectInfo.html_url,
		projectId : projectInfo.id,
		login : projectInfo.owner.login
	});

	project.save();
};

exports.removeProject = function(projectId) {
	var project = Alloy.createModel('project');

	project.fetch({
		query : "SELECT * from project WHERE projectId = " + projectId
	});

	project.destroy();
}; 

exports.getAll = function() {
	var project = Alloy.createModel('project');

	project.fetch();
	
	return project;
};

exports.parseData = function(data) {
	var dataParsed = new Array();

	for (var i = 0; i < data.length; i++) {
		if (data.length == 1) {
			var owner = {
				avatar_url : data.attributes.avatar,
				login : data.attributes.login
			};

			var item = {
				owner : owner,
				name : data.attributes.name,
				description : data.attributes.description,
				project_url : data.attributes.html_url,
				projectId : data.attributes.projectId
			};
		} else {
			var owner = {
				avatar_url : data.attributes[i].avatar,
				login : data.attributes[i].login
			};

			var item = {
				owner : owner,
				name : data.attributes[i].name,
				description : data.attributes[i].description,
				project_url : data.attributes[i].html_url,
				projectId : data.attributes[i].projectId
			};
		}

		dataParsed.push(item);
	}

	return dataParsed;
};
