$(function(){
	function showBigger($click){
		var top = parseFloat($click.css('top'),10),
			left = parseFloat($click.css('left'),10),
			w = $click.width(),
			h = $click.height(),
			addWidth = 230,
			newHeight = (w+addWidth) * h/w;
		($click.is(':animated') || parseFloat($click.css('width'),10) > 400) || $click.animate({
			width:w+addWidth,
			height:newHeight,
			top:top-(newHeight-h)/2,
			left:left-addWidth/2
		},'fast','swing');
	}
	jQuery(document).ready(function($){
		$('#carousel').carousel({
			itemWidth:300, 
			horizontalRadius:450, 
			verticalRadius:150, 
			resize:true, 
			mouseScroll:false, 
			mouseDrag:true, 
			scaleRatio:0.6, 
			scrollbar:false, 
			tooltip:false, 
			mouseWheel:false, 
			mouseWheelReverse:true,
			scrollComplete:function(){
				showBigger($('.click:first'));
			},
			scrollStart:function(){}
		});
		setTimeout(function(){
			$('.carousel-item:first').trigger('click');
		});
	});
});