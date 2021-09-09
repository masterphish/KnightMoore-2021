// JavaScript Document
$(document).ready(function() {
	//Header changes on scroll
	var scrollTop = 0;
	
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		//console.log(scrollTop);
		if (scrollTop >= 100) {
				$(".pcHeader").addClass("scrolled-nav");
				if($("body").hasClass("Projects")){
					
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-burgundy.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-burgundy.png"
					});
				}
			//console.log($("#pcLogo img").attr("src"));
			} else if (scrollTop < 100) {
				$(".pcHeader").removeClass("scrolled-nav");
				if($("body").hasClass("CrossRoads")){
					
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-indigo.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-indigo.png"
					});
				}else if($("body").hasClass("Day-1")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-black.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-black.png"
					});
				}else if($("body").hasClass("Francis")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-white.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-white.png"
					});
				}else if($("body").hasClass("Lauths")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-white.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-white.png"
					});
				}else if($("body").hasClass("MoveTonic")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-blue.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-blue.png"
					});
				}else if($("body").hasClass("N-Vision")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-black.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-black.png"
					});
				}else if($("body").hasClass("Magnatrol")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-black.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-black.png"
					});
				}else if($("body").hasClass("AHC")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-white.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-white.png"
					});
				}else if($("body").hasClass("TrialStyle")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-white.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-white.png"
					});
				}else if($("body").hasClass("Purple")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-white.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-white.png"
					});
				}else if($("body").hasClass("OneWay-Rentals")){
					$("#pcLogo img").attr({
						src: "../img/knight-moore-logo-versions-black.png"
					});
					$("#pcAltHome img").attr({
						src: "../img/knight-moore-logo-versions-head-black.png"
					});
				}
				
		}
	});   
	
	
	//Smooth Scrolling
	$('.nav-link').click(function(event) {		
		var id =$(this).attr("href");
		var target = $(id).offset().top; //getTargetTop($(this));
		
		//console.log(id);
		//console.log(target);
		//console.log($(id).offset().top);
		$('html, body').animate({scrollTop: target}, 'slow');
		event.preventDefault();
	});
	
	//add back Gray Bar based on window scroll position
	if ($(window).scrollTop() !== 0){
		//console.log("I see You!");
		if($("body").hasClass("Home")){
			$(".pcHeader").addClass("scrolled-nav");	
		}
	}
	
	//Transition Toggle menu
	$("#burgerMenuBtn").click(function(){
		
		if($("#closeIcn").hasClass("hidden")){
			//fadeOut First element and set to hidden
			$("#openIcn").fadeOut(200, function(){
				if($(this).css({"opacity" : "0"})){
					//console.log("True");
					$(this).addClass("hidden",0);
					//UnHide Second class and fadeIn
					$("#closeIcn").fadeIn(100, function(){
					if($(this).css({"opacity" : "1"})){
						//console.log("False");
						$(this).removeClass("hidden",0);
					}
			});
				}
			});
		}else if($("#openIcn").hasClass("hidden")){
			//fadeOut First element and set to hidden
			$("#closeIcn").fadeOut(400, function(){
				if($(this).css({"opacity" : "0"})){
					//console.log("True");
					$(this).addClass("hidden",0);
					//UnHide Second class and fadeIn
					$("#openIcn").fadeIn(400, function(){
					if($(this).css({"opacity" : "1"})){
						//console.log("False");
						$(this).removeClass("hidden",0);
					}
			});
				}
			});
		}
		
	});
		
});
