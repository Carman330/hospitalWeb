$(function(){
	var data = [
		['头颈科','胸科','肝胆科','胃胰科'],
		['乳腺科','内科','放疗科','鼻咽科'],
		['血液肿瘤科','儿童肿瘤科','重症医学科','麻醉手术科'],
		['超声心电科','内镜激光科','肿瘤预防研究室','临床试验研究中心'],
		['核医学科','医院感染管理科','职工保健科','老专家门诊'],
		['核医学科','检查科','病理科','肺功能室'],
		['生物治疗中心','综合科','中医科','影像与微创介入中心'],
		['神经外科','泌尿科','妇科','结直肠科']
	]

	var tableTpl = '<table class="deptList" boder="0" cellpadding="0" cellspacing="0">\
                		<tbody>\
                			<%_.each(data,function(trData,trIndex){%>\
                				<tr class="<%=trIndex%2?"odd":"even"%>">\
                					<%_.each(trData,function(tdData,tdIndex){%>\
                						<td class="<%=(tdIndex==trData.length-1)?"last":""%>"><div class="<%=trIndex%2?"mask":""%>"></div><a href="../page51/index.html"><%=tdData%></a></td>\
                					<%})%>\
			                    </tr>\
                			<%})%>\
		                </tbody>\
		            </table>'


	function initPage(){
		var tableStr = _.template(tableTpl,{data:data})

		$("div.listBox").html(tableStr);

		initScroll($("div.listBox"))
	}


	function initScroll($tar){
		//加滚动条
			$tar.jScrollPane({
				showArrows : false,
				verticalDragMinHeight: 20,
				verticalDragMaxHeight: 200,
			});
			// 然后当内容发生变化时，重新初始化滚动条
			var Scrollbar = $tar.data('jsp');
			if(Scrollbar)Scrollbar.reinitialise();
	}


	initPage();
})