var cardHeight;
// Sets the height of the back of the card to match the image in front
function setBackHeight() {
  cardHeight = $('.card .front img').height();
  $('.card .back').height(cardHeight);
}
$(document).ready(function() {
  $('.card').addClass('not-flipped');
  //Swap behavior of hover with click on touch devices
	if (Modernizr.touch){
		$('.card .back').prepend('<div class="cancel-card">\X</div>');
		$('.card.not-flipped').on('click', function() {
			$('.card').addClass('not-flipped');
			$(this).removeClass('not-flipped');
		});
		$('.cancel-card').click( function(ev) {
			ev.stopPropagation();
			$('.card').addClass('not-flipped');
		});
	} else {
		$('.card').hover(function() {
			$(this).toggleClass('not-flipped');
		});
	}
});
$(window).load(function() {
  // On window change, recalculate the size of the box
	window.onresize = function(){
		setBackHeight();
	}
	setBackHeight();
});
