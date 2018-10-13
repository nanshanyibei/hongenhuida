$(function(){
	var $div=$('.slideliu_con')[0];
	var $ul=$('.slideliu');
	var iLeft=0;
	var iSpeed=-2;

	function moving(){
		iLeft+=iSpeed;
		if(iLeft<-950){
			iLeft=0;
		}
		$ul.css({'left':iLeft});
	}

	var timer=setInterval(moving,50);

	// $div.onmouseover=function(){
	// 	iSpeed=0;
	// }

	// $div.onmouseout=function(){
	// 	iSpeed=-2;
	// }
	
	$('.slideliu_con').bind('mouseenter',function(){
		iSpeed=0
	})
	$('.slideliu_con').bind('mouseleave',function(){
		iSpeed=-2
	})
})