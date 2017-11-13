
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
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		  
		  });  
		
		//	banner   END
		
		$(".mod").click(function(){
			$("section").toggleClass("model-6");
			$(".nav-menu").slideToggle(1000);
		});
//		NAV_xs     END

		$(".nav ul li").hover(
			function(){
				$(this).find(".subnav").slideDown();
			},
			function(){
				$(this).find(".subnav").slideUp();
			}
		);
//		subnav    END

		
		
		
});
