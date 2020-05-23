$(document).ready(function(){
	$('.your-class').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
	});
});

$('.modal').on('shown.bs.modal', function (e) {
	$('.your-class').slick('setPosition');
	$('.wrap-modal-slider').addClass('open');
})

