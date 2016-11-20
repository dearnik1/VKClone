VK_CLONE.user = null;

function User(vkUser) {
	var user = vkUser;
	
	this.getFullName = function() {
		return user.first_name + " " + user.last_name;
	};
};