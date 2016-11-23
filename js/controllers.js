VK_CLONE.controllers = {
	home: function() {
		var message = $("#greeting");
		if (VK_CLONE.user) {
			message.text("Welcome, " + VK_CLONE.user.getFullName() + "!");
		} else {
			message.text("Please, sing in.");
		}
	},
	friends: function() {
	    var message = $("#friends");
        if (VK_CLONE.user) {
            message.text(VK_CLONE.user.getFriends());
        } else {
       			message.text("Please, sing in.");
       		}
	}
};