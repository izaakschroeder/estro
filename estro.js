$(function() {

	var items = $(".Estro .Slider").find("li:first-child").addClass("Active");

	function next() {
		var current = $(".Estro").find("li.Active"), next = current.next().length > 0 ? current.next() : current.parent().children("li:first-child");
		current.removeClass("Active");
		next.addClass("Active");
	}

	setInterval(function() {
		next();
	}, 7000)

})