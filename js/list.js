// 列表页list.html私有的JS
$(function(){
	//鼠标移上select时,下拉列表显示
	//离开时,隐藏
	$('.select').on('mouseenter',function(){
		$('.select').addClass('on');
	});
	$('.select').on('mouseleave',function(){
		$('.select').removeClass('on');
	});


	//鼠标移上搜索框ul时，显示下拉列表加on
	//鼠标离开搜索框ul时，隐藏下拉列表去掉on
	$('.search-box div ul').mouseenter(function(){
		$(this).addClass('on');
	});
	$('.search-box div ul').mouseleave(function(){
		$(this).removeClass('on');
	});

	//点击哪个li ,那个li 放到父母的第一个孩子
	$('.search-box div ul li').click(function(){
		$(this).prependTo($('.search-box div ul'));
	});

	//点击搜女装,提交表单
	$('.nvzhuang').click(function(){
		$('#search-type').val('nvzhuang');
		$('#search-frm').submit();
		return false;
	});
	//点击搜全站,回到首页
	$('.all').click(function(e){
		$('#search-type').val('all');
		$('#search-frm').submit();
		e.preventDefault();
	});


	//鼠标移上导航li 时,span移上
	//鼠标离开导航li 时,span移下
	$('.nav ul li').mouseenter(function(){
		$(this).children('span').stop(true).animate({top:0},300);
	});
	$('.nav ul li').mouseleave(function(){
		$(this).children('span').stop(true).animate({top:35},300);
	});

	//鼠标移上首页时,显示二级菜单加on类
	$('.nav ul li.home').mouseenter(function(){
		$(this).addClass('on');
	});
	$('.nav ul li.home').mouseleave(function(){
		$(this).removeClass('on');
	});
});
$(function(){
	var idx=0;
	var timer;
	//移上焦点图时span显示
	$('.banner').mouseenter(function(){
		$('.banner span').show();
		clearInterval(timer);
	});
	$('.banner').mouseleave(function(){
		$('.banner span').hide();
		timer=setInterval(function(){
			$('.banner span').eq(1).click();
		},3000);
	});
	$('.banner').mouseleave();
	//点击ol li对应的变色,图片显现
	$('.banner ol li').click(function(){
		idx=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.banner ul li').eq(idx).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
	});
	//点击右侧按钮
	$('.banner span').eq(1).click(function(){
		idx++;
		if(idx>=3){
			idx=0;
		}
		$('.banner ol li').eq(idx).addClass('cur').siblings().removeClass('cur');
		$('.banner ul li').eq(idx).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
	});
	//点击左侧按钮
	$('.banner span').eq(0).click(function(){
		idx--;
		if(idx<0){
			idx=2;
		}
		$('.banner ol li').eq(idx).addClass('cur').siblings().removeClass('cur');
		$('.banner ul li').eq(idx).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
	});
});