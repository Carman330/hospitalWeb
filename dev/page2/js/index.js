$(function(){
	var so = new SWFObject("3d_art_gallery.swf", "albums", "100%", "100%", "9", '#000');
	so.addParam("scale", "noscale");
	so.write("wide-wrapper");
});