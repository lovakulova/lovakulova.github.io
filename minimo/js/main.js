$(function() {

	$('.load-more').on('click', function() {
		const btn = $(this);
		const loader = bnt.find('span');
		$.ajax({
			url: '/data.html', 
			type: 'GET',
			beforeSend: function() {
				btn.attr('disabled', true);
				loader.addClass('d-inline-block');
			},
			success: function(responce) {
				setTimeout(function() {
					loader.removeClass('d-inline-block');
					btn.attr('disabled', false);
					$('.after-post').before(responce);
				}, 1000);
			},
			error: function() {
				alert('Error!');
				loader.removeClass('d-inline-block');
				btn.attr('disabled', false);
			}
		});
	});
});

	
