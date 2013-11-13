var args = arguments[0];

$.titleLabel.text = args.info.name;
$.descriptionText.text = args.info.description;
$.urlText.text = args.info.html_url;
$.avatar.image = args.info.owner.avatar_url;
$.owner.text = args.info.owner.login;
$.description.text = L('detailDescription');
$.url.text = L('detailURL');

function back() {
	if (OS_IOS) {
		$.mainContainer.close({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
		});
	} else {
		$.mainContainer.close();
	}
}