$(function(){
	var data = [
		{
			bigImg:'../images/bigImg1.png',
			smallImg:'../images/smallImg1.png',
			txt:'1964.院首长教授与前来参加华南肿瘤医院开幕的国内专家合影2'
		},
		{
			bigImg:'../images/bigImg2.png',
			smallImg:'../images/smallImg2.png',
			txt:'1994年梁灵光省长与中心领导在我院建院三十周年庆典大会上的合照留念'
		},
		{
			bigImg:'../images/bigImg3.png',
			smallImg:'../images/smallImg3.png',
			txt:'2004年1月李长春来院观察，与我院领导热情握手'
		},
		{
			bigImg:'../images/bigImg4.png',
			smallImg:'../images/smallImg4.png',
			txt:'2006年1月前卫生部部长张文康来访，与中心领导及医护人员在大楼前合影'
		},
		{
			bigImg:'../images/bigImg5.png',
			smallImg:'../images/smallImg5.png',
			txt:'2007年7月香港原特首曾荫权到我院参观'
		},
		{
			bigImg:'../images/bigImg6.png',
			smallImg:'../images/smallImg6.png',
			txt:'2007年8月张德江来院，与中心领导进行交流讨论'
		},
		{
			bigImg:'../images/bigImg7.png',
			smallImg:'../images/smallImg7.png',
			txt:'卫生部陈竺部长来院'
		}

	]

	var slideTpl = '<div>\
				        <div class="slideBigImg slideBox">\
				        	<%_.each(data,function(imgData,imgIndex){%>\
								<div class="bigImgBox">\
					                <div class="bigImg" index="<%=imgIndex%>">\
					                    <img class="bigImgUnit" data-lazy="<%=imgData.bigImg%>" alt="<%=imgData.txt%>" />\
					                </div>\
					                <div class="imgTxt">\
					                    <p><%=imgData.txt%></p>\
					                </div>\
					            </div>\
							<%})%>\
				        </div>\
				        <div class="slideBottom">\
					        <div class="slideSmallImg slideBox">\
					        	<%_.each(data,function(imgData,imgIndex){%>\
						            <div class="smallImgBox">\
						                <img class="smallImgUnit" data-lazy="<%=imgData.smallImg%>" alt="<%=imgData.txt%>" />\
						            </div>\
					            <%})%>\
					        </div>\
				        </div>\
				    </div>'


	function initPage(){
		var slideStr = _.template(slideTpl,{data:data})

		$("div#container").html(slideStr);

		initSlide();
		
	}


	function initSlide(){
		$('.slideBigImg').slick({
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true,
		    fade: true,
		    asNavFor: '.slideSmallImg'
		});
		$('.slideSmallImg').slick({
		    slidesToShow: 5,
		    slidesToScroll: 1,
		    asNavFor: '.slideBigImg',
		    dots: false,
		    // centerMode: true,
		    focusOnSelect: true
		});
	}


	initPage();
})