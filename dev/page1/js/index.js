$(function(){
// 	var element = document.getElementById('player');
// 	// Webkit (works in Safari5.1 and Chrome 15)
// element.webkitRequestFullScreen();
// document.webkitCancelFullScreen(); 

// Firefox 10
// element.mozRequestFullScreen();
// document.mozCancelFullScreen(); 

// // W3C 提议
// element.requestFullscreen();
// document.exitFullscreen();

var docElm = document.documentElement;  
if (docElm.requestFullscreen) {  
    docElm.requestFullscreen();  
}  
else if (docElm.mozRequestFullScreen) {  
    docElm.mozRequestFullScreen();  
}  
else if (docElm.webkitRequestFullScreen) {  
    docElm.webkitRequestFullScreen();  
}  
});