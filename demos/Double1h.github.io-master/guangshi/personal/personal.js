$(function(){$(".personalMes ul li.btn").click(function(){$(this).addClass("current").siblings().removeClass("current");var a=$(this).index()-6;$(".content div").eq(a).show().siblings().hide()});$(".friends ul li").hover(function(){$(this).addClass("current").siblings().removeClass("current")},function(){$(this).removeClass("current")});$(".cards table tr td").hover(function(){$(this).addClass("current").siblings().removeClass("current")},function(){$(this).removeClass("current")});$(".MesChange .formrow .btn").click(function(){$(".MesChange input#submit").click()})});