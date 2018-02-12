var timeInterval = 100,
	currentPosition = null,
	lastPosition = 0,
	timeout = null,
	currentElement = 0,
	iter = 0;


$(document).ready(function() {
	// scroll recognition
	$(window).scroll(function(){
		if(!timeout){
			timeout = setTimeout(function(){
				clearTimeout(timeout);
				timeout = null;
				
				currentPosition = $(window).scrollTop();
				if (currentPosition > lastPosition){
					iter = 0;
					$("main").children().each(function(){
						if (iter <= currentElement){
							iter++;
							return true;
						}
						var nextOffset = $(this).offset().top - 75;
						if (nextOffset > currentPosition)
							return false;
						else{
							currentElement = iter;
							console.log($(this).attr('id'));
							$(".react-nav").children().removeClass("active");
							mystring = 'a[data-id="' + $(this).attr("id") + '"]';
							$(".react-nav li " + mystring).parent().addClass("active");
						}
					});
				}
				else if (currentPosition < lastPosition){
					iter = 0;
					newSection = null;
					$("main").children().each(function(){
						if (iter < currentElement - 1){
							iter++;
							return true;
						}
						else if (iter == currentElement - 1){
							newSection = $(this);
							iter++;
							return true;
						}
						var nextOffset = $(this).offset().top - 70;
						if (nextOffset < currentPosition)
							return false;
						else{
							currentElement = iter-1;
							console.log(newSection.attr('id'));
							$(".react-nav").children().removeClass("active");
							mystring = 'a[data-id="' + newSection.attr("id") + '"]';
							$(".react-nav li " + mystring).parent().addClass("active");
						}
						
					});
				}
				lastPosition = currentPosition;
			});
		}
	});
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});
// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}