// 做一些全局的准备工作
$(function(){
	var w = window,
        ver = w.opera ? (opera.version().replace(/\d$/, "") - 0) : parseFloat((/(?:IE|fox\/|ome\/|ion\/)(\d+\.\d)/.exec(navigator.userAgent) || [, 0])[1]);
    var ie = !!w.VBArray && Math.max(document.documentMode || 0, ver),
        firefox = !!w.netscape && ver,
        opera = !!w.opera && ver,
        chrome = !!w.chrome && ver,
        safari = /apple/i.test(navigator.vendor) && ver;
    var isIe6 = ie === 6,
        isIe7 = ie === 7,
        isIe8 = ie === 8,
        isIeModern = ie > 8;
    if (!$.browser) {
        $.browser = {
            msie: ie,
            opera: opera,
            chrome: chrome,
            firefox: firefox,
            version: ie
        };
    }
});