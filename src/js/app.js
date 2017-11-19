
function searchToggle(obj, evt){
		var container = $(obj).closest('.search-wrapper');

		if(!container.hasClass('active')){
			  container.addClass('active');
			  evt.preventDefault();
		}
		else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
			  container.removeClass('active');
			  // clear input
			  container.find('.search-input').val('');
			
		}
	}
	function submitFn(obj, evt){
		value = $(obj).find('.search-input').val().trim();

		_html = "Yup yup! Your search text sounds like this: ";
		if(!value.length){
			_html = "Yup yup! Add some text friend :D";
		}
		else{
			_html += "<b>" + value + "</b>";
		}

		$(obj).find('.result-container').html('<span>' + _html + '</span>');
		$(obj).find('.result-container').fadeIn(100);

		evt.preventDefault();
	}

	
	
//	search        END

$(function(){
	
	$(".search-input").focus(function(){
		$(this).val('');
	});
//	search>768    END    
	

	var i=0;
	$(".search_xs").click(function(){
		i++;
		var b=i%2;
		if(b==1){
			$(".input_xs").animate({"left":"0"},500);
			$(".input_xs").css("display","block");
		}
		else{
			$(".input_xs").animate({"left":"75%"},500);
			$(".input_xs").css("display","none");
			$(".input_xs").val('');
		}
	});
//	search<768     END

//	search     END
	
	var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay : 3000,
		    autoplayDisableOnInteraction : false,
		    keyboardControl : true,
		    // 如果需要分页器
		    pagination : '.swiper-pagination',
			paginationClickable :true,
		    
		  
		  
		  });  
		
		//	banner   END
		
		$(".mod").click(function(){
			$("section").toggleClass("model-6");
			$(".nav-menu").slideToggle(1000);
		});
//		NAV_xs     END

		$(".nav ul .nav_h").hover(
			function(){
				$(".subnav").css("display","block");
				$(".nav").css("padding-bottom","0px")
				$(".nav_bar").addClass("nav_bar_h");
			},
			function(){
				$(".subnav").css("display","none");
				$(".nav").css("padding-bottom","20px")
				$(".nav_bar").removeClass("nav_bar_h");
			}
		);
//		subnav    END


		var a=true;
		$(".pic").click(function(){
			if(a==true){
				$(".service_an").animate({left:"0px"},500);
				a=false;
			}else{
				$(".service_an").animate({left:"-173px"},500);
				a=true;	
			}
		});
//		客服               END		
		
		
	
		
});


$(function(){
//	无缝滚动
	var oul = $('.text_pic ul');
	var oulHtml = oul.html();
	oul.html(oulHtml+oulHtml)
	var timeId = null;

	var ali = $('.text_pic ul li');
	var aliWidth = ali.eq(0).width();
	var aliSize = ali.size();
	var ulWidth = aliWidth*aliSize;
	oul.width(ulWidth);	//1600px
	
	var speed = 2;

	function slider(){

		if(speed<0){
			if(oul.css('left')==-ulWidth/2+'px'){
	 		oul.css('left',0);
		 	}
		 	oul.css('left','+=-2px');
		}

	 	
		if(speed>0){
			if(oul.css('left')=='0px'){
	 		oul.css('left',-ulWidth/2+'px');
		 	}
		 	oul.css('left','+='+speed+'px');
		}
	 	
	 }
	
	// setInterval()函数的作用是：每隔一段时间，执行该函数里的代码
	 timeId = setInterval(slider,30);

	$('.text_pic').mouseover(function(){
		// clearInterval()函数的作用是用来清除定时器
		clearInterval(timeId);
	});

	$('.text_pic').mouseout(function(){
		timeId = setInterval(slider,30);
	});

//	$('.goLeft').click(function(){
//		speed=-2;
//	});
//
//	$('.goRight').click(function(){
//		speed=2;
//	});
});
//	无缝滚动      END



