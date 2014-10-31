$(function(){
	var data = [
		['科室1','科室2','科室3','科室4'],
		['科室11','科室12','科室13','科室14'],
		['科室21','科室22','科室23','科室24'],
		['科室31','科室32','科室33','科室34'],
		['科室41','科室42','科室43','科室44'],
		['科室51','科室52','科室53','科室54'],
		['科室61','科室62','科室63','科室64'],
		['科室31','科室32','科室33','科室34'],
		['科室41','科室42','科室43','科室44'],
		['科室51','科室52','科室53','科室54'],
		['科室61','科室62','科室63','科室64'],
		['科室31','科室32','科室33','科室34'],
		['科室41','科室42','科室43','科室44'],
		['科室51','科室52','科室53','科室54'],
		['科室61','科室62','科室63','科室64']
	]

	var tableTpl = '<table class="deptList" boder="0" cellpadding="0" cellspacing="0">\
                		<tbody>\
                			<%_.each(data,function(trData,trIndex){%>\
                				<tr class="<%=trIndex%2?"odd":"even"%>">\
                					<%_.each(trData,function(tdData,tdIndex){%>\
                						<td class="<%=(tdIndex==trData.length-1)?"last":""%>"><div class="<%=trIndex%2?"mask":""%>"></div><a href="../page31/index.html"><%=tdData%></a></td>\
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