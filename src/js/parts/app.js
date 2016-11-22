$('.awesome-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	arrows: false
});

$('#myModal').on('shown.bs.modal',function(e){
	console.log('here');
	$('.slider').slick('setPosition');
});

/*ДОМАШКА ЗАПИЛИТЬ ФОРМУ С ДЖКВЕРИ*/
$(".register").submit(function(e){
	// console.log("ПОГНАЛИ")
	var nickname = $("#nick").val();
	var email = $("#mail").val();
	var password = $("#psw").val();
	if ($.trim(nickname) == "" || jquery.trim(email) == "" || jquery.trim(password) == "") {
		console.log("А ИНПУТЫ-ТО ПУСТЫЕ!!!")
	}
	e.preventDefault();
})

