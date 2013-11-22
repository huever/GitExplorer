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

$.mainContainer.addEventListener('android:back', function() {
	back();
}); 

if (OS_ANDROID) {
	$.backButton.visible = false;
}

Ti.Gesture.addEventListener('orientationchange', function(e) {
	if (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT) {
		$.mainContainer.backgroundImage = "/images/Background-land.png";
	} else {
		$.mainContainer.backgroundImage = "/images/Background.png";
	}
});