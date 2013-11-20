exports.definition = {
	config : {
		URL : "https://api.github.com/search/repositories",
		columns : {},
		adapter : {
			"type" : "restapi",
			"collection_name" : "projectSearch",
			"idAttribute" : "id"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			set : function(key, value, options) {
				if (key && key.owner) {
					var isFavorite = FavoritesHandler.checkProjectFavorite(key.id);
					
					owner = {
						avatar_url : key.owner.avatar_url,
						login : key.owner.login
					};

					key.info = {
						id : key.id,
						name : key.name,
						description : key.description,
						html_url : key.html_url,
						owner : owner
						
					};
					key.favorite = isFavorite;
				}
				return Backbone.Model.prototype.set.call(this, key, value, options);
			}
		});

		return Model;
	},
};
