// 首页index.html私有的JS

//页面载入事件
$(function(){
	var box_top=$('.search-box').offset().top;
	//当鼠标单击某个搜索选项的时候，让它处于当前状态（加on类），其他都不处于当前状态（去掉on类）
	//当鼠标单击某个搜索选项的时候，判断：如果用户单击的baobei，那么就给它的爷爷.search-center添加类名baobei-on
	//如果用户单击的tmall，那么就给它的爷爷.search-center添加类名tmall-on
	//如果用户单击的dianpu，那么就给它的爷爷.search-center添加类名dianpu-on
	//当鼠标单击某个搜索选项的时候,搜索框中的#q的placeholder为该选项的data-placeholder
	//当鼠标单击某个搜索选项的时候,吸顶移到最前面
	$('.search-select li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.search-center').attr('class','search-center '+$(this).attr('id')+'-on');
		$('#q').prop('placeholder',$(this).attr('data-placeholder'));
		//吸顶时单击成为父母的第一个孩子
		if($('.search>div').hasClass('search-fixed')){
			$(this).prependTo($(this).parent());
		}
		

	});

	//当窗口滚动是,如果窗口滚动纵坐标>search-box文档纵坐标.吸顶
	$(window).scroll(function(){
		if($(this).scrollTop()>=box_top){
			$('.search>div').addClass('search-fixed');
			//吸顶时下拉菜单选中未吸顶时的当前选项
			$('.search-select li.on').click();
		}else{
			$('.search>div').removeClass('search-fixed');
		}
	});

	//当search-select鼠标移上时,显示下拉菜单,移开时,隐藏下拉菜单
	$('.search-select').hover(function(){
			$(this).toggleClass('on');
		
		
	});
	//点击相机,触发上传文件
	$('.search-box em').click(function(){
		$('.search-box .file').click();
	});

	// 主题部分
	// 鼠标移上.market-list li时,背景色改变(加on类)
	// 鼠标离开.market-list li时,背景色改变(去on类)
	$('.market-list li').mouseenter(function(){
		$(this).addClass('on');
	});
	$('.market-list li').mouseleave(function(){
		$(this).removeClass('on');
	});

	//鼠标移上.market-list 时,.market-list li.on 改变透明度0-1
	$('.market-list').mouseenter(function(e){
		//console.log(e.target);
		$(e.target).children('.market-submenu').css({opacity:0}).animate({opacity:1},500);
		
	});
	
});
//焦点图1
$(function(){
	var idx=0;
	var timer;
	var length=$('#banner1 ol li').length;
	var $banner1_span=$('#banner1 span');
	var $banner1_ul=$('#banner1 ul');
	var $banner1_ol_li=$('#banner1 ol li');
	//console.log($('#banner1 ol li'));
	//console.log($('#banner1 ol li').length);
	/*$('#banner1').bind('mouseenter',function(){
		$('#banner1 span').show();
		clearInterval(timer);
	});
	$('#banner1').bind('mouseleave',function(){
		$('#banner1 span').hide();
		timer=setInterval(function(){
			$('#banner1 span').eq(1).click();
		},3000);
		
	});
	$('#banner1').mouseleave();*/
	$('#banner1').bind({
		mouseenter:function(){
		$banner1_span.show();
		clearInterval(timer);
	},
		mouseleave:	function(){
		$banner1_span.hide();
		timer=setInterval(function(){
			$banner1_span.eq(1).click();
		},3000);
		
	}
	}).mouseleave();
	$banner1_span.eq(1).bind('click',function(){
		if($banner1_ul.is(':animated')){
			return;
		}
		idx++;

		if(idx<length){
			$banner1_ol_li.eq(idx).addClass('cur').siblings().removeClass('cur');
			$banner1_ul.animate({left:'-'+idx+'00%'},1000);
		}else{
			idx=0;
			$banner1_ol_li.eq(idx).addClass('cur').siblings().removeClass('cur');
			$banner1_ul.animate({left:'-'+length+'00%'},1000,function(){
				$(this).css({'left':0});
			});
		}
	});
	$banner1_span.eq(0).bind('click',function(){
		if($banner1_ul.is(':animated')){
			return;
		}
		idx--;
		if(idx>=0){
			$banner1_ol_li.eq(idx).addClass('cur').siblings().removeClass('cur');
			$banner1_ul.animate({left:'-'+idx+'00%'},1000);
		}else{
			idx=length-1;
			$banner1_ol_li.eq(idx).addClass('cur').siblings().removeClass('cur');
			$banner1_ul.css({left:'-'+length+'00%'}).animate({left:'-'+idx+'00%'},1000);
		}
	});
	$banner1_ol_li.bind('click',function(){
		//console.log(idx);
		if(idx==0&&$(this).index()==4){
			$banner1_span.eq(0).click();
		}else if(idx==4&&$(this).index()==0){
			$banner1_span.eq(1).click();
		}else{
			$(this).addClass('cur').siblings().removeClass('cur');
			idx=$(this).index();
			$banner1_ul.animate({left:'-'+idx+'00%'},1000);
		}
	});

});
/*焦点图2start*/
$(function(){
		var timer;
		//鼠标移上显示按钮
		$('#banner2').on('mouseenter',function(){
			$('#banner2 span').show();
			clearInterval(timer);
		});
		$('#banner2').on('mouseleave',function(){
			$('#banner2 span').hide();
			timer=setInterval(function(){
				$('#banner2 span').eq(1).click();

			},3000);
		});
		$('#banner2').mouseleave();
		//点击向右按钮,图片向左移
		//对应的ol li加cur类
		//span中的内容改变
		var idx=0;

		$('#banner2 span').eq(1).bind('click',function(){
			if($('#banner2 ul').is(':animated')==false){
				idx++;
				if(idx<$('#banner2 ol li').length){
					$('#banner2 ol li').eq(idx).addClass('cur').siblings().removeClass('cur');
					$('#banner2 ul').animate({left:'-'+idx+'00%'},500);
					
					$('#banner2-header strong').html('<span>'+(idx+1)+'</span>/'+$('#banner2 ol li').length);
				}else{
					idx=0;
					$('#banner2 ol li').eq(idx).addClass('cur').siblings().removeClass('cur');
					$('#banner2 ul').animate({left:'-'+$('#banner2 ol li').length+'00%'},500,function(){
						$(this).css('left','0');
					});
					$('#banner2-header strong').html('<span>'+(idx+1)+'</span>/'+$('#banner2 ol li').length);
				}
			}
			
			
		});
		//点击向左按钮,图片向右移
		//对应的ol li加cur类
		$('#banner2 span').eq(0).bind('click',function(){
			if($('#banner2 ul').is(':animated')==false){
				idx--;
				if(idx>=0){
					$('#banner2 ol li').eq(idx).addClass('cur').siblings().removeClass('cur');
					$('#banner2 ul').animate({left:'-'+idx+'00%'},500);
					$('#banner2-header strong').html('<span>'+(idx+1)+'</span>/'+$('#banner2 ol li').length);
				}else{
					idx=$('#banner2 ol li').length-1;
					$('#banner2 ol li').eq(idx).addClass('cur').siblings().removeClass('cur');
					$('#banner2 ul').css('left','-'+$('#banner2 ol li').length+'00%').animate({left:'-'+($('#banner2 ol li').length-1)+'00%'});
					$('#banner2-header strong').html('<span>'+(idx+1)+'</span>/'+$('#banner2 ol li').length);
					
				}
			}
			
			
		});
		//鼠标点击灰色圈,图片移动,自己加cur类
		$('#banner2 ol li').bind('click',function(){
			if(idx==0 && $(this).index()==$('#banner2 ol li').length-1){
				$('#banner2 span').eq(0).click();
			}else if(idx==$('#banner2 ol li').length-1 && $(this).index()==0){
				$('#banner2 span').eq(1).click();
			}else{
				idx=$(this).index();
				$(this).addClass('cur').siblings().removeClass('cur');
				$('#banner2 ul').animate({left:'-'+idx+'00%'},500);
				$('#banner2-header strong').html('<span>'+(idx+1)+'</span>/'+$('#banner2 ol li').length);
			}
			
		});
	});
/*焦点图2end*/


$(function(){
	//主要服务的精灵图一一对应
	$('.main-services li span').each(function(index,el){
		$(this).css({'background-position':'0px '+(-44*index)+'px'});
	});
	//鼠标移上时显示二级菜单
	$('.main-services li:lt(4)').mouseenter(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	//点击二级菜单的叉号关闭二级菜单
	$('.main-services em').click(function(){
		$(this).parent().parent().removeClass('on');
	});
});

/*侧边栏导航start*/
$(function(){
	// var colors=['#f40','#ff3779','#8d7afb','#bfc413','#ad849b','#f40'];
	// $('.section').each(function(index,el){
	// 	$(this).css('background-color',colors[index]);
	// });
	var $aside_nav=$('#aside-nav');
	var $aside_nav_li=$('#aside-nav li');
	//鼠标移上去aside-nav li时,改变背景(加hover)
	//鼠标离开aside-nav li时,改变背景(去hover)
	/*$('#aside-nav li').mouseenter(function(){
		if($(this).hasClass('click')==false){
			$(this).addClass('hover').css({opacity:0}).stop(true).animate({opacity:1},500);
		}
		
	});
	$('#aside-nav li').mouseleave(function(){
		$(this).removeClass('hover');
	});*/
	$aside_nav_li.on({
		mouseenter:function(){
			if($(this).hasClass('click')==false){
				$(this).addClass('hover').css({opacity:0}).stop(true).animate({opacity:1},500);
			}
		
		},
		mouseleave:function(){
			$(this).removeClass('hover');
		}
	});



	var section_tops = [
		$('.section').eq(0).offset().top-49,
		$('.section').eq(1).offset().top-49,
		$('.section').eq(2).offset().top-49,
		$('.section').eq(3).offset().top-49,
		$('.section').eq(4).offset().top-49,
		$('.section').eq(5).offset().top-49
	];
	//点击aside-nav li时,(加click)
	
	
	$aside_nav_li.click(function(){
		$(this).addClass('click').siblings().removeClass('click');
	});
	//点击每个li,跳到相应位置
	$aside_nav_li.filter(':lt(6)').click(function(){
		$('html,body').animate({scrollTop:section_tops[$(this).index()]},500);
	});

	var $aside_nav_top=$aside_nav.offset().top;
	//窗口滚动吸顶
	$(window).scroll(function(){
		if($(window).scrollTop()+49>=$aside_nav_top){
			$aside_nav.css({position:'fixed',top:49});
		}else{
			$aside_nav.css({position:'absolute',top:400});
		}

		//滚动大于一屏高度时toTop显示,否则隐藏
		if($(window).scrollTop()>=$(window).height()){
			$aside_nav_li.eq(6).show();
		}else{
			$aside_nav_li.eq(6).hide();
		}
		var which=0;
		//滚动值分别为section_tops时,对应的aside-nav li处于当前状态(加click)
		/*if($(window).scrollTop()>=section_tops[0]){
			which=0;
		}
		if($(window).scrollTop()>=section_tops[1]){
			which=1;
		}
		if($(window).scrollTop()>=section_tops[2]){
			which=2;
		}
		if($(window).scrollTop()>=section_tops[3]){
			which=3;
		}
		if($(window).scrollTop()>=section_tops[4]){
			which=4;
		}
		if($(window).scrollTop()>=section_tops[5]){
			which=5;
		}*/
		for(var i=0;i<section_tops.length;i++){
			if($(window).scrollTop()>=section_tops[i]){
			which=i;
			}
		}

		$aside_nav_li.eq(which).addClass('click').siblings().removeClass('click');
		//console.log($('#aside-nav li').eq(which));
	});


	//点击aside-nav li.toTop时,返回顶部
	$aside_nav_li.eq(6).click(function(){
		$('html,body').animate({scrollTop:0},500);
	});
});
/*侧边栏导航end*/