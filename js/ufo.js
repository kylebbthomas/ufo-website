$(function() {
	
	$('#feature').hide().slideDown();
	$('#patterns').hide().slideDown();
	$('#people').hide().slideDown();
	$('#resources').hide().slideDown();
	
	var currentLocation=location.href; /*keeps track of which page we have loaded */
	
	/*var $feature = $('#main-container');
	$feature.animate({
		opacity: 0.6
	}, 1000);
	
	var $article = $('.article');
	$article.animate({
		opacity: 0.6
	}, 1000);*/
	
	var $outer = $('#outer-container');
	$outer.opacity = 0;
	$outer.animate({
		opacity: 0.6
	}, 2000);
	
	
	$('#nav a').on('click', function(e) {
		e.preventDefault();
		var url = e.target.href;
		alert('URL: ' + url);
		if (currentLocation == url) return; /* do nothing if the link points to the current page */
		
		/*$nav.animate({
			opacity: 0
		}, 2000);*/
		
		/*alert("opacity: 0");*/
		
		
				
		/*$('#main-container').load(url + ' #main-container').hide().fadeIn('slow');*/
		if (url) {
			try {
				alert('URL: ' + url);
				$('#content').remove();
				$('#main-container').load(url + ' #main-container').hide().fadeIn('slow');
				currentLocation = url;
			}
			catch (e) {}
			finally {
				url="";
				
			}
		}
		
	});
	
	
	/*var $triangleBullets = $('.triangle-bullets li');
	$triangleBullets.hide().each(function(index) {
		$(this).delay(200 * index).fadeIn(400);
	});
	
	var $linkBullets = $('.link-bullets li');
	$linkBullets.hide().each(function(index) {
		$(this).delay(500 * index).fadeIn(700);
	});*/
	
	
});