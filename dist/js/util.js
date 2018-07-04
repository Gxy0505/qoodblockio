// var angle = 0;
// setInterval(function(){
//     angle -=3;
//     $('.icon4').rotate(angle);
// }, 50);
// var gear1 = 0;
// setInterval(function(){
//     gear1 -=1;
//     $('.gearBig').rotate(gear1);
// }, 50);
// var gear2 = 0;
// setInterval(function(){
//     gear2 +=2;
//     $('.gearSmall').rotate(gear2);
// }, 50);
$(function(){ 
 var $body = $('body');
 var windowHeight = $(window).height();
 var setCoverOpacity = function() {
 	console.log($(window).scrollTop());
 	$('.tm').css({ 
	  opacity: ((($(window).scrollTop() / windowHeight * 1.5) > 0.9) ? 0.9 : ($(window).scrollTop() / windowHeight *1.5)) 
	})
	$('.bgWhite').css({ 
	  opacity: (((($(window).scrollTop() - 3100) / windowHeight) > 0.5) ? 0 : 1 - (($(window).scrollTop() - 3100) / windowHeight)) 
	})
	$('.bgGray').css({ 
	  opacity: (((($(window).scrollTop() - 3100) / windowHeight) > 0.5) ? 1 : (($(window).scrollTop() - 3100) / windowHeight)) 
	})
	$('.bgGray2').css({ 
	  opacity: (((($(window).scrollTop() - 4400) / windowHeight) > 0.9) ? 0 : 1 - (($(window).scrollTop() - 4500) / windowHeight)) 
	}) 
 } 
//初始化设置背景透明度 
 setCoverOpacity(); 
//监听滚动条事件，改变透明度 
 $(window).scroll(function() { 
  setCoverOpacity(); 
 }); 
})