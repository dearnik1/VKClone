VK_CLONE.controllers = {
	home: function() {
		var message = $("#greeting");
		if (VK_CLONE.user.isUserLogged()) {
			message.text("Welcome, " + VK_CLONE.user.getUserName() + "!");
		} else {
			message.text("Please, sing in.");
		}
	}
};