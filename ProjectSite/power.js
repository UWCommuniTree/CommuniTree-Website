$(document).ready(function() {
		$('#wipe').fadeTo(300,.5);
		$('#header').fadeIn(2000);
		$('#logo').fadeIn(2000);
		$('#menu').fadeIn(1000, function(){
		$('#text').fadeIn(1000);
		$('#main').fadeIn(1000);
		});
});
$('.type1').hover(function(){
	$(this).fadeTo(2000,.1)
});
$('#interaction').ready(function(e) {
    $('#wipe').fadeTo(2500,.7);
});

