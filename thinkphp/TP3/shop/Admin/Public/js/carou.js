$(function() {
	$('.pro_tuijian_box .j-product-scroll').carouFredSel({
		responsive: true,
		direction :	"left",
		prev: '.j-prev-1',
		next: '.j-next-1',
		width: '100%',
		pagination:'.caropage',
		auto:{
			play:true,
			pauseOnHover:true,
			timeoutDuration:3000
			},
		pause:3000,
		scroll: 1,
		items: {
			visible: {
				min: 4,
				max: 4
			}
		}
	});
});