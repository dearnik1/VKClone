$(document).ready(
	function() {
		//init here
		var leftPanel = $(".panel-left");
		var activeClass = "active";

		leftPanel.find("a").click(function(e) {
			e.preventDefault();
		});
		
		leftPanel.find("li").click(function(e) {
			var target = $(e.target);
			var href = target.attr('href');
			var parent = target.parent();
			var controllerName = parent.data("controller");
			loadCentralPage(href, controllerName);
			leftPanel.find("." + activeClass).removeClass(activeClass);
			parent.addClass(activeClass);
		});
		//"." + "active" + " > a"
		//".active > a"
		leftPanel.find("." + activeClass + " > a").trigger("click");
		var signOut = $("#navbar-sign-out");
		var signIn = $("#navbar-sign-in");
		signIn.click(function() {
			VK.Auth.login(function(response) {
				if(response.status == "connected") {
					VK_CLONE.user = new User(response.session.user);
					//VK_CLONE.friends = new Friends(response.session.user);
					toggleSignButtons();
					goHome();
				}
			});
		});
		signOut.click(function() {
			VK.Auth.logout(function() {
				VK_CLONE.user = null;
				toggleSignButtons();
				goHome();
			});
			
		});
		
		function goHome() {
			leftPanel.find(".home > a").trigger("click");
		}
		
		function toggleSignButtons() {
			signIn.toggleClass("hidden");
			signOut.toggleClass("hidden");
		}
	}
);



function loadCentralPage(url, controllerName) {
 	if (url != null && url != "") {
 		$("article").load(url, function() {
 			if (controllerName != null && controllerName != "") {
 				VK_CLONE.controllers[controllerName]();
 			}
 		});
 	}
 }


