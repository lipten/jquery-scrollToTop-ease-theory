$.fn.scrolltotop=function(options){
  var btn=$(this);
  var defaults = {    
    startshow: 100,    
    speed:20
  }; 
  var opts = $.extend(defaults, options);  
  $(window).scroll(function(){
   if($(window).scrollTop()>defaults.startshow){
		  btn.fadeIn();
	  }else{
		  btn.fadeOut();
		  }
   });
   btn.click(function(){
		  var t=$(window).scrollTop();
		  var k=0;
		  
		  timer=setInterval(function(){
				  h=Math.ceil(0.1*(t-k));
				  k=k+h;
				  j=t-k;
				  $(window).scrollTop(j);
				  
		  if(j==0){clearInterval(timer);btn.fadeOut();}
			  },defaults.speed);
	   });
	   
  }