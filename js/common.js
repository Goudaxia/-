// 公用的JS

//页面载入事件
$(function(){
	//当鼠标移上用户导航右侧菜单的时候，显示它下方的二级菜单(给它加on类)
	//当鼠标离开用户导航右侧菜单的时候，隐藏它下方的二级菜单(给它去掉on类)
	$('.user-nav-right li .user-nav-submenu').parent().hover(function(){
		$(this).toggleClass('on');
	});
});