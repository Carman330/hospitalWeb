$(function(){
	$('img.navImg').on('click',function(){
		location.href = $(this).attr('jump');
	});
});