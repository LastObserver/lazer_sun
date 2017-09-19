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

var i = 1;
var j = 1;
var k = 1;
var clockOn = false;
$('.navbar-brand__logo').on('click',function(e){
	// TweenMax.to($('.logo-google'),2,{
	// 	width: 400,
	// 	onComplete:function(){
	// 		console.log('hop hey')
	// 	}
	// })
	// TweenMax.fromTo($('.logo-google'),2,{scale: 0.5, opacity: 0,x:0},{scale:1,opacity:1,x:400})
	// TweenMax.from($('.logo-google'),2,{scale: 0.5, opacity: 0.5})
	// var tl = new TimelineMax();
	// tl.to($('.logo-google'),1,{opacity:0})
	// tl.to($('.logo-google'),2,{opacity:1})
	// tl.to($('.logo-google'),4,{scale: 0.1},'+=2')
	// tl.to($('.logo-google'),1,{x: 450})
	// tl.to($('.logo-google'),0.4,{y: 500})
	// tl.staggerTo($('.logo-google'),2,{opacity:0},0.5)
	var rightnow = new Date();
	var k = rightnow.getHours();
	var j = rightnow.getMinutes();
	var i = rightnow.getSeconds();
	if (k > 11) {
		k = (k - 12);
	};
	j = i + j*60;
	k = k*3600 + j;
	var myclock = new TimelineMax();
	if (clockOn) {
		clearInterval(mytimer);
	}
	clockOn = !clockOn;
	if (clockOn) {
		var mytimer = setInterval(function(){
			myclock.to($('.secondarrow'),0.99,{rotation:6*i,transformOrigin:"50% 95%",
				onComplete: function(){
					console.log(i);
					i++;
					if (i == 60) {
						i = 0;
						myclock.to($('.secondarrow'),0,{rotation: i,transformOrigin: "50% 95%"});
					}
				}
			});
			myclock.to($('.minutearrow'),0.99,{rotation:0.1*j,transformOrigin:"50% 95%",delay: 0,
				onComplete: function(){
					console.log(j);
					j++;
					if (j == 3600) {
						j = 0;
						myclock.to($('.secondarrow'),0,{rotation: i,transformOrigin: "50% 95%"});
					}
				}
			},'-=0.99');
			myclock.to($('.hourarrow'),0.99,{rotation:0.00833*k,transformOrigin:"50% 93%",
				onComplete: function(){
					console.log(k);
					k++;
					if (k == 43200) {
						k = 0;
						myclock.to($('.secondarrow'),0,{rotation: k,transformOrigin: "50% 93%"});
					}
				}
			},'-=0.99');
		},1000)
	};
})

// if (window.addEventListener) {
//   window.addEventListener("storage", handle_storage, false);
// } else {
//   window.attachEvent("onstorage", handle_storage);
// };

// function handle_storage(e) {
//   if (!e) { e = window.event; }
//   console.log(e);
// }

// $('#form-storage [name]').on('change input',function(e){
// 	var formData = JSON.stringify($('#form-storage').serializeArray());
// 	localStorage.setItem("formData",formData);
// })


// $(window).on('load',function(){
// 	var formData = localStorage.getItem("formData");
// 	if (!formData)
// 		return;
// 	formData = JSON.parse(formData);
// 	$.each(formData,function(index,element){
// 		var key = element.name;
// 		var value = element.value;
// 		$('#form-storage').find('[name='+key+']').val(value);
// 	})
	
// })



$.fn.serializeObject = function(){ 
	var o = {}; 
	var a = this.serializeArray(); 
	$.each(a, function() { 
		if (o[this.name]) { 
			if (!o[this.name].push) { 
				o[this.name] = [o[this.name]]; 
			} 
			o[this.name].push(this.value || ''); 
		} 
		else { 
			o[this.name] = this.value || ''; 
		} 
	}); 
	return o; 
};


function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
	options = options || {};

	var expires = options.expires;

	if (typeof expires == "number" && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	}
	if (expires && expires.toUTCString) {
		options.expires = expires.toUTCString();
	}

	value = encodeURIComponent(value);

	var updatedCookie = name + "=" + value;

	for (var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];
		if (propValue !== true) {
			updatedCookie += "=" + propValue;
		}
	}

	document.cookie = updatedCookie;
}

var timer = new Date(new Date().getTime() + (365 * 24 * 3600 * 1000));
timer = timer.toUTCString();
var directory = "/";
var domainName = location.hostname;
var security = false;
var settings = {expires:timer, path:directory, domain: domainName};
var test = false;

$('button').on('click',function(){
	test = !test;
	setCookie('hello',test,settings);
})

$('.navbar-brand').on('click',function(){
	console.log(getCookie('hello'));
})