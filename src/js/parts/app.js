$('.awesome-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	arrows: false
});

// $('#myModal').on('shown.bs.modal',function(e){
// 	console.log('here');
// 	$('.slider').slick('setPosition');
// });

// /*ДОМАШКА ЗАПИЛИТЬ ФОРМУ С ДЖКВЕРИ*/
// $(".register").submit(function(e){
// 	// console.log("ПОГНАЛИ")
// 	var nickname = $("#nick").val();
// 	var email = $("#mail").val();
// 	var password = $("#psw").val();
// 	if ($.trim(nickname) == "" || jquery.trim(email) == "" || jquery.trim(password) == "") {
// 		console.log("А ИНПУТЫ-ТО ПУСТЫЕ!!!")
// 	}
// 	e.preventDefault();
// })

// var element = $('<div>',{
// 	class: 'newdiv',
// 	id: 'element',
// 	data: {
// 		'num':1
// 	},
// 	style: 'color: #eac',
// 	text: 'Хоп новый элемент'
// })

// $('body').append(element)

// var link = $('.elem')
// // аттрибуты
// console.log(link.attr('href'))
// // текст
// console.log(link.text())
// // html
// console.log(link.html())
// // ребенок ссылки
// console.log(link.children())
// // родитель
// console.log(link.children().eq(0).parent())
// // родители
// console.log(link.children().eq(0).parents())
// // конкретный родитель
// console.log(link.children().eq(0).parents('.content'))
// // четные дети
// console.log(link.children(':odd').text())
// // соседи детей
// console.log(link.children().eq(0).siblings())
// // перейти в начало селектора
// console.log(link.children().end().text())

// // задаем стили
// link.css('background-color','#0ea')
// link.css({
// 	'display': 'block',
// 	'transform': 'scale(0.9)'
// })

// // link.html('<div>Brave New Div</div>')
// link.attr('href','http://yandex.ru')

// var elemdiv = $('<div>',{
// 	class: 'newdiv',
// 	id: 'element',
// 	data: {
// 		'num':1
// 	},
// 	style: 'color: #eac',
// 	text: 'Хоп новый элемент'
// }).on('click',function(e){
// 	console.log('here')
// })
// // elemdiv.prependTo(link)
// // link.append(elemdiv)
// // link.prepend(elemdiv)
// // link.children().eq(4).before(elemdiv);

// link.on('click',function(e){
// 	e.preventDefault();
// 	// link.toggleClass('active');
// 	// link.addClass('active')
// 	// link.removeClass('active')
// 	link.fadeOut(300).delay(300).fadeIn(300);
// })
// // клонирование
// var linkClone = link.clone()
// // вырезание
// var linkDetach = link.detach()
// // удаление
// var removed = link.remove()

// var container = $('<div>',{
// 	class: 'elems',
// })

// $.each(fakeData,function(index,element){
// 	// console.log(index,element)
// 	var persona = $('<div>',{
// 		class: 'persona',
// 		text: 'Имя: ' + element.name + ', Возраст: ' + element.age + ', Ник: ' + element.username,
// 		style: "margin-bottom: 30px"
// 	}).appendTo(container)
// })

// container.appendTo('body')


$('.navbar-brand__logo').on('click',function(e){
	// TweenMax.to($('.logo-google'),2,{
	// 	width: 400,
	// 	onComplete:function(){
	// 		console.log('hop hey')
	// 	}
	// })
	// TweenMax.fromTo($('.logo-google'),2,{scale: 0.5, opacity: 0,x:0},{scale:1,opacity:1,x:400})
	// TweenMax.from($('.logo-google'),2,{scale: 0.5, opacity: 0.5})
	var tl = new TimelineMax();
	// tl.to($('.logo-google'),1,{opacity:0})
	// tl.to($('.logo-google'),2,{opacity:1})
	// tl.to($('.logo-google'),4,{scale: 0.1},'+=2')
	// tl.to($('.logo-google'),1,{x: 450})
	// tl.to($('.logo-google'),0.4,{y: 500})
	tl.staggerTo($('.logo-google'),2,{opacity:0},0.5)

})