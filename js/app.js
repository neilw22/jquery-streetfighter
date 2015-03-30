$(document).ready(function() {

	var isMouseOver = false;
	
    $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    isMouseOver = true;
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
	isMouseOver = false;
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate({
    	'left': '1020px'
    }, 500, function() {
    		$(this).hide();
    		$(this).css('left', '600px');
    });
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  $('body').keydown(function(event) {
  	if(event.which==88) {
  	$('.ryu-ready').hide();
  	$('.ryu-still').hide();
  	$('.ryu-throwing').hide();
	$('.ryu-cool').show();
	}
  })
  	$('body').keyup(function() {
  	//console.log('keydown');
  	if (isMouseOver==true) {
  		$('.ryu-still').hide();
  		$('.ryu-ready').show();
  		$('.ryu-throwing').hide();
  		$('.ryu-cool').hide();
  		}
  	else {
  		$('.ryu-throwing').hide();
  		$('.ryu-still').show();
		$('.ryu-cool').hide();
		$('.ryu-ready').hide();
		}
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}