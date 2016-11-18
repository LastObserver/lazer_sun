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


// // Проверка существования элемента на странице
// if($('.label').first().length){
// 	console.log('hello')
// }

// дата атрибут - это круто, используй .data

// var elementInfo = $('.element').data()

// домашка

// var chrome_logo = $('.responsive-image');
// var fileName = '';

// if (chrome_logo.first().length) {
// 	if (chrome_logo[0].complete) {
// 		fileName = chrome_logo.attr('src');
// 		console.log('Logo is here sir! Name is '+ fileName.substring(7,fileName.length))
// 	}
// 	else{
// 		console.log("Our logo has died a hero's death! MAY HE FINALLY REST IN VALHALLA!")
// 	}
// }
// else {
// 	console.log("Our logo has fled! May he never find his way to Valhalla!")
// }

var breakpoint = 200;
var activeClass = 'active';
var button = $('.up');

$('.element').on('click',function(event){
	event.preventDefault();
	console.log(event);
})

var element = document.getElementsByClassName('.element');
element.onclick = function(event) {
	console.log(event)
}

$(window).on('scroll load',function(event) {
	if($(this).scrollTop()>breakpoint) {
		// button.addClass(activeClass);
		button.css('right','20px')
	}
	else {
		// button.removeClass(activeClass);
		button.css('right','-100px')

	}
	console.log($(window).scrollTop())
});

button.on('click',function(event){
	$('html,body').animate({
		scrollTop: 0
	},500);
})

$('.element').hover(
	function(e){
		console.log("Enter");
	},
	function(e){
		console.log("Goodbye")
	}
)