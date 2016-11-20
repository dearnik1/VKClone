$(document).ready(
	function() {
		//init here
		var leftPanel = $(".panel-left");
		var activeClass = "active";
		
		leftPanel.find("a").click(function(e) {
			e.preventDefault();
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
		$("#navbar-sign-in").click(function() {
			loadCentralPage("html/login.html");
		});
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


