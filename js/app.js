$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
    	{'left': '1020px'}, 500,
    	function() {
    		$(this).hide();
    		$(this).css('left', '600px');
    	}
    	);
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  $('body').on('keydown keyup',function(e){
      var show = e.type=="keydown" ? 'show' : 'hide' ;
      if(e.which==88){
          $(this).css(
          	$('.ryu-ready').hide();
  			$('.ryu-still').hide();
			$('.ryu-cool').show(););  
      }
    });

  /*$('body').keydown(function() {
  	//console.log('keydown');
  	$('.ryu-ready').hide();
  	$('.ryu-still').hide();
	$('.ryu-cool').show();
  	//hide other ryus on keydown
  	//show ryu cool on keydown
  	//show ryu cool on keydown id=88
  })
  	$('body').keyup(function() {
  	//console.log('keydown');
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
	$('.ryu-cool').hide();
  });
*/

});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}