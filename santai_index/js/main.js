
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
			  // clear and hide result container when we press close
			  container.find('.result-container').fadeOut(100, function(){$(this).empty();});
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
//		NAV     END


})
