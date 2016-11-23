VK_CLONE.user = null;

function User(vkUser) {
	var user = vkUser;
	
	this.getFullName = function() {
		return user.first_name + " " + user.last_name;
	};
	this.getFriends = function() {
	    var friends = friend.get(fields); //get all friends-objects
        return friends.first_name + " " + friends.last_name;
	}
};