
$(document).ready(function(){
	$("#nav-icon3").click(function(){
		$(this).toggleClass("open");
	});
});

$(".top_mnu ul a").click(function() {
	$(".top_mnu").fadeOut(600); 
	$("#nav-icon3").toggleClass("open");
}).append("<span>");  //добавляем тег спан после <a>

$(".toggle_mnu").click(function(){
	if ($(".top_mnu").is(":visible")) {
		$(".top_descr").removeClass("opacify"); // убираем класс при закрытии меню
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated"); // элементы меню выезжают снизу
	} else {
		$(".top_descr").addClass("opacify"); //добавляем класс при открытии меню
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated"); // элементы меню выезжают снизу
	};
});

