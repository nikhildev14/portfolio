
// website open onload

window.onload = function(){

	// loader coding

	$(document).ready(function(){
		$("#loading").fadeOut(1000);

		
	})



	// navbar coding

	$(function(){
		$("#menu").slicknav({
			"label" : "",
			"duration" :200,
			"brand" : "<img src='img/c.JPG' width='100'>"	
			
			
		})
	})

	// hero section coding
		$(function() {
		  $('.skitter-large').skitter({
		  	'navigation':true,
		  	'dots':false,
		  	'label':false
		  	
		  });
		});


	// hero text label animation

	$(".hero-text-label p").delay(1000).slideDown(500,function(){
		$(".hero-text-label h1").delay(500).slideDown(500,function(){
			$(".hero-text-label h4").delay(500).slideDown(500,function(){
				$(".hero-text-label button").delay(500).slideDown(500)
			})
		})
	})



	// slick carsoucel coding

	$(document).ready(function(){
		$(".center").slick({
			  centerMode: true,
			  slidesToShow: 3,
			  arrows:true,
			  dots:false,
			  infinite:true,
			  autoplay:true,
			  autoplayspeed:200,

			   responsive: [
						    {
						      breakpoint: 768,
						      settings: {
						        arrows: true,
						        centerMode: true,
						        centerPadding: '40px',
						        slidesToShow: 1
						      }
   							 },
   							 ]
		})
	})



	$(function(){
		var x = $("#cv");
		$(x).click(function(){	
			var anchor = document.createElement("A");
			anchor.setAttribute("href","../img/slide1.jpg");
			anchor.setAttribute("download","demo");
			anchor.click()

		})
	})


	//start skill coding

	$(document).ready(function(){
		$(".progress-languages").append("<div class='skill-tooltip skill-languages'>70%</div>");
		$(".progress-programming").append("<div class='skill-tooltip skill-programming'>50%</div>");
		$(".progress-tool").append("<div class='skill-tooltip skill-tool'>80%</div>");

	})
	$(document).ready(function(){
		$(".progress-languages").animate({"width":"70%"},1000,function(){
			$(".skill-languages").fadeIn(1000);
			$(".skill-languages").css("display","flex");

			$(".progress-programming").animate({"width":"50%"},1000,function(){
				$(".skill-programming").fadeIn(1000);
				$(".skill-programming").css("display","flex");

				$(".progress-tool").animate({"width":"80%"},1000,function(){
					$(".skill-tool").fadeIn(1000);
					$(".skill-tool").css("display","flex");
			})
			})
		})
	})

	//blog coding

	$(document).ready(function(){
		$(".btn-sub").on("mouseover",function(){
			$(this).css("background","darkred")
			$("#sub-input").css("borderColor","darkred")
			$(this).on("mouseout",function(){
				$(this).css("background","#24816e")
				$("#sub-input").css("borderColor","#24816e")
			})
		})
	})


	//testimonial coding

	$(document).ready(function() {
	 	 $(".owl-carousel").owlCarousel({
	 	 	autoplay : 1,
	 	 	autoplayTimeout : 3000,
	 	 	goToFirst : true,
    		goToFirstSpeed : 5000,
    		loop:true,
    		autoplayHoverPause:true,
    		smartSpeed:800,
    		autoplaySpeed:1000,
    		responsive:{
			        0:{
			            items:1,
			            center:true
			        },
			        768:{
			            items:2,
			            center:true		            
			        },
			        1024:{
			        	items:3,
			        	margin:18,
			        	center:true
			        }


    		},

    	

	 	 });
	 
	});

	//scrollbar coding
		$(document).ready(function(){

			$(window).scroll(function(e){
				var scr_value = $(window).scrollTop();
				
				if(scr_value != 0){
					$("#arrow").css({"display":"flex"});
					$("#arrow").attr("display","flex");

				}
				else{
					$("#arrow").css({"display":"none"});
					$("#arrow").attr("display","none");

				}
			})

			
			$("#arrow").click(function(){
				$(window).scrollTop(0);
				
			})

		})



	$(document).ready(function(){
		$("#arrow").on("mouseover",function(){
			$(this).css("background","darkred")
			$(this).on("mouseout",function(){
				$(this).css("background","#24816e")
				
			})
		})
	})


	//over lay menu coding
	$(document).ready(function(){
		$(".over-btn").on("mouseover",function(){
			
		})
	})

}





