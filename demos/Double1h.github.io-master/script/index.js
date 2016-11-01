$(function(){
	$('#fullpage').fullpage({
		sectionsColor: ['#ffde00', '#2BB100','#ee566b', '#57bea9'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		navigation:true,
		navigationTooltips:["个人信息","技能展示","作品展示","联系我"],
		scrollingSpeed:500,
		continuousVertical:true,
		resize:false,
		afterLoad: function(anchorLink, index){

					//section 2
					if(index == 2){
						var bars4Evaluate=$('.skillsContent .bar4Evaluate');
						for(var i=0,lens=bars4Evaluate.length;i<lens;i++)
						{
							var barsWidth=bars4Evaluate.eq(i).width();
							bars4Evaluate[i].style.width=0;
                            bars4Evaluate.eq(i).animate({width:barsWidth}, 800);
						}

					}

					//section 3
					if(index == 3){
						var demoList=$('#demo .demoList li');
						demoList.eq(0).animate({
                           	marginLeft:'0',
                           	opacity:'1'
                       }, 600);
						for(var i=1,lens=demoList.length;i<lens;i++){
                           demoList.eq(i).animate({
                           	marginLeft:'60px',
                           	opacity:'1'
                       }, 600);
						}
					}
				},
	    onLeave:function (index,nextIndex,direction) {
	    	 if(index==3){
	    	 	var demoList=$('#demo .demoList li');
						for(var i=0,lens=demoList.length;i<lens;i++){
                           demoList.eq(i).css({
                           	marginLeft: '-190px',
                           	opacity: '0'
                           });
	    	 }
	    }
		}	
	});
	$('.skills_lists li').mouseover(function() {
		var index=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.skills_Detials li').eq(index).addClass('current').siblings().removeClass('current');
	   });
	$('#myphotos').hover(function() {
		$(this).css({opacity: 0.5})
		$(this).attr({
			src: 'images/myphoto2.png'
		});		
		$(this).animate({opacity: 1});
	}, function() {
		$(this).attr({
			src: 'images/myphoto1.png'
		});
		$(this).css({opacity: 0.5}).animate({opacity: 1});
	});
});
