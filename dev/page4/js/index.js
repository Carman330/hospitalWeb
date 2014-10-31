$(function(){
	$('div.right_con:first').jScrollPane({
		autoReinitialise: true
	});
	
	// 渲染年份
	var yearGap = 120,
		itemWidth = 100;
	
	var $yearsRendArea = $('div.yearsRendArea:first');
	var rendData = {
		1972:['1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件'],
		1973:['1973事件1972事件1973事件1973事件1973事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件'],
		1974:['1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件','1972事件1972事件1972事件1972事件1972事件'],
		1977:['1977事件1977事件1972事件1972事件1972事件','1972事件1972事件1977事件1972事件1972事件','1972事件1977事件1972事件1972事件1972事件'],
		1979:['1977事件1977事件1972事件1972事件1972事件','1972事件1972事件1977事件1972事件1972事件','1972事件1977事件1972事件1972事件1972事件'],
		1983:['1983事件1977事件1972事件1972事件1972事件','1972事件1972事件1977事件1972事件1972事件','1972事件1977事件1972事件1972事件1972事件'],
		1985:['1985事件1977事件1972事件1972事件1972事件','1972事件1972事件1977事件1972事件1972事件','1972事件1977事件1972事件1972事件1972事件'],
		1986:['1986事件1977事件1972事件1972事件1972事件','1972事件1972事件1977事件1972事件1972事件','1972事件1977事件1972事件1972事件1972事件'],
		1988:['1988事件1977事件1972事件1972事件1972事件','1972事件1972事件1977事件1972事件1972事件','1972事件1977事件1972事件1972事件1972事件']
	};
	
	var rendYears = function(){
		var itemTpl = '<div class="yearItem" style="<%=curItemStyle%>" year="<%=year%>"><div class="circle"></div><p class="yearText"><%=showYear%></p></div>';
		return function(years){
			var allYears = _.keys(rendData),
				max = Math.max.apply(Math,allYears),
				min = Math.min.apply(Math,allYears),
				gap = max-min,
				length = (itemWidth+yearGap)*gap-yearGap;
			$yearsRendArea.css({
				'width':length+'px',
				'left':'0px'
			});
			var rendStr = '';
			_.each(allYears,function(year){
				var theGap = year-min,
					left = theGap*(yearGap+itemWidth);
				var rd = {
					curItemStyle:'left:'+left+'px',
					year:year,
					showYear:year+'年'
				};
				rendStr += _.template(itemTpl)(rd);
			});
		
			$yearsRendArea.html(rendStr);
			$yearsRendArea.find('div.yearItem:first').addClass('active');
		};
	}();
	
	rendYears(rendData);
	
	var $leftArrow = $('div.leftArrow:first'),
		$rightArrow = $('div.rightArrow:first'),
		$listConShow = $('div.listConShow:first');
	var move = $('div.timeLine  div.yearsRendAreaContainer:first').width(),
		$yearsRendArea = $('div.yearsRendArea:first'),
		lineWidth = $yearsRendArea.width(),
		minLeft = 0,
		maxLeft = lineWidth - lineWidth%move;
	$leftArrow.on('click',function(e){
		var curLeft = parseFloat($yearsRendArea.css('left'),10);
		if(-curLeft >= maxLeft){
			alert('已经是最左侧！');
			return;
		}
		curLeft -= move;
		$yearsRendArea.animate({
			left:curLeft+'px'
		},'slow','swing',function(){
			findFirShowItem(-curLeft);
		});
	});
	$rightArrow.on('click',function(e){
		var curLeft = parseFloat($yearsRendArea.css('left'),10);
		if(-curLeft <= minLeft){
			alert('已经是最右侧！');
			return;
		}
		curLeft += move;
		$yearsRendArea.animate({
			left:curLeft+'px'
		},'slow','swing',function(){
			findFirShowItem(-curLeft);
		});
	});
	$('div.circle').on('click',function(e){
		var $tar = $(this),
			$yearItem = $tar.parents('div.yearItem:first');
		selItem($yearItem);		
	});
	function findFirShowItem(movedLeft){
		var $firShowItem;
		$('div.yearItem').each(function(ind,item){
			var $item = $(item);
			if(parseFloat($item.css('left'),10) >= movedLeft){
				$firShowItem || ($firShowItem=$item);
				return true;
			}
		});
		selItem($firShowItem);
	}
	function selItem($yearItem){
		$('div.active').removeClass('active');
		$yearItem.addClass('active');
		var year = $yearItem.attr('year');
		var yData = rendData[year];
		var str = '';
		_.each(yData,function(item,ind){
			str += '<div class="'+(ind%2 === 0?'evenLine':'oddLine')+'">'+item+'</div>';
		});
		$listConShow.html(str);
	}
});