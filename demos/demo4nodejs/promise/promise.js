<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>promise小动画</title>
	<style>
	.ball{
		width: 40px;
		height: 40px;
		border-radius: 20px;
	}
	.ball1{
		background: #10C1D3;
	}
	.ball2{
		background: #C510D3;
	}
	.ball3{
		background: #14D310;
	}
	</style>
	<script src="bluebird/js/browser/bluebird.js"></script>
</head>
<body>
	<div class="ball ball1" style="margin-left: 0;"></div>
	<div class="ball ball2" style="margin-left: 0;"></div>
	<div class="ball ball3" style="margin-left: 0;"></div>
</body>
<script>
	var ball1 = document.getElementsByClassName("ball1")[0];
	var ball2 = document.getElementsByClassName("ball2")[0];
	var ball3 = document.getElementsByClassName("ball3")[0];

	var promise = window.Promise;
	var promise = new Promise(function (resolve, reject) {

	});
	
	function promiseAnimate (ele,marginLeft) {
		 return new Promise(function (resolve, reject) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
		});
	}





	function animate (ele,marginLeft) {
		 var nowMarginLeft = parseInt(ele.style.marginLeft, 10);
		 if( nowMarginLeft != marginLeft ) {
		 	if ( nowMarginLeft > marginLeft ) {
		 		nowMarginLeft--;
		 		ele.style.marginLeft = nowMarginLeft + "px";
		 	} else if( nowMarginLeft < marginLeft ){
		 		nowMarginLeft++;
		 		ele.style.marginLeft = nowMarginLeft + "px";
		 	}
		 	setTimeout(function () {
		 		 animate (ele,marginLeft);
		 	}, 16);
		 }	 
	}


</script>
</html>

new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest;
        xhr.addEventListener("error", reject);
        xhr.addEventListener("load", resolve);
        xhr.open("GET", url);
        xhr.send(null);
    });