var module =angular.module("APP", []);

//打开一个frame
module.factory('openFrame',function(){
	return function(config){
		config.vScrollBarEnabled = false;
		config.bgColor='#fff';
		var token =api.getPrefs({
				sync: true,
				key:'TOKEN'
			});
			
		if(config.auth && !token){//需要验证登录，并且还没登录的页面
			var newConfig = {
				url : 'widget://html/account/account.html',
				name : "loginWin",
				bgColor:'#fff',
				vScrollBarEnabled : false,
				pageParam:{
					target:config,
					type:"0"
				}
			}
			api.toast({
				msg:'请先登录',
				duration: 1000,
				location: 'middle'
			});
			api.openWin(newConfig);
			return false;
		}else{
			api.openFrame(config);
			return true;
		}
	}
})

module.factory('openWin',function(){
	return function(config){
		config.vScrollBarEnabled = false;
		config.bgColor='#fff';
		
		var token = api.getPrefs({
			sync: true,
			key:'TOKEN'
		});
		
		if(config.auth && !token){		//需要验证登录，并且还没登录的页面
			var newConfig = {
				url:'widget://html/account/account.html',
				name:"loginWin",
				bgColor:'#fff',
				vScrollBarEnabled : false,
				pageParam:{
					target:config,
					type:"1"
				}
			}
			
			api.toast({
				msg:'请先登录',
				duration: 1000,
				location: 'middle'
			});
			
			api.openWin(newConfig);
			return false;
		} else {
			config.animation={
				subType:"from_right",       //动画子类型（详见动画子类型常量）
				duration:500                //动画过渡时间，默认300毫秒
			};
			
			api.openWin(config);
			return true;
		}
	}
})

//统计倒计时的服务
module.factory('countSMS', function() {
	return function(isFresh, $scope) {
		if (isFresh) {
			//记录发送验证码的时间，60十秒内不能再次获取
			api.setPrefs({
			    key: 'sms',
			    value: new Date().getTime()+""
			});
			$scope.SMS = 60;
		} else {
			//上一次发送短信，到现在是否超过了60秒
			$scope.SMS = 60 - parseInt((new Date().getTime() - api.getPrefs({
				sync: true,
				key: 'sms'
			})) / 1000);
			
			$scope.SMS = $scope.SMS > 0 ? $scope.SMS : 0;
		}

		if ($scope.SMS > 0) {
			var count = setInterval(function() {
				$scope.SMS -= 1;
				$scope.$apply();
				if (!$scope.SMS) {
					clearInterval(count);
					api.removePrefs({key: 'sms'});
				}
			}, 1000);
		}
	}
});

//ajax服务
module.factory("ajax", ["$httpParamSerializer", "$rootScope", function($httpParamSerializer,$rootScope){
	var baseUrl ="http://chengfu.landero2o.com/api/app/";
	
	return function(config){
		//加载动画
		var loadId;
		if(!config.isChat){
			api.showProgress({
				style: 'default',
				animationType: 'fade',
				title: '加载中...',
				modal: true
			});
		}
		
		
		var ajaxData;
		var header = {};
		
		var token = api.getPrefs({
				sync: true,
				key: 'TOKEN'
			});
		
		if(token){//统一返回sessionId
			header.Cookie = token;
		}
		
		var method = config.method.toLocaleLowerCase();
		if(method=="post"){
			//post参数
			if(!config.dataType || config.dataType.toLowerCase() == "json"){
				header['content-type'] = "application/json;charset=utf-8";
				ajaxData = { //json传参
					body:JSON.stringify(angular.copy(config.data))
				}
			} else {
				header['content-type'] = "application/x-www-form-urlencoded;charset=UTF-8";
				ajaxData = {
					body:decodeURI($httpParamSerializer(angular.copy(config.data)))
				}
			}
		} else if(method=="get" || method=="put"){
			//get传参
			config.url += ("?"+decodeURI($httpParamSerializer(config.data)));
		}
		
		api.ajax({
			url:baseUrl+config.url, //请求url
			method:config.method,	//请求方法
			dataType:config.responseType?config.responseType:"json",	//数据类型
			timeout:5,       //暂时给5秒
			headers:header,
			returnAll:true,
			cache:false,
			data:ajaxData //post 数据
		}, function(ret, err){
			//关闭加载动画
			api.refreshHeaderLoadDone();
			api.hideProgress();
			if(err){ //网络请求错误
				
				var body = err.body;
				if(body && body.msg){ //业务错误
					api.toast({
						msg:body.msg,
						duration: 1000,
						location: 'bottom'
					});
					
					//登录已过期
					if(body.code == 401 || body.msg=="用户未登录"){
						//服务器说未登录
						
						alert(JSON.stringify(body));
						
						api.removePrefs({key: 'TOKEN'});
						//发送未登录事件
						api.sendEvent({
							name: 'unLogin'
						});
						
						api.openWin({
							name:"account",
							url:'widget://html/account/account.html'
						});
					}
				} else { //笼统提示网络错误
					api.toast({
						msg: '网络错误',
						duration: 1000,
						location: 'bottom'
					});
				}
			} else {
				//判断是否有业务错误
				if(ret.body.result){
					config.success && config.success(ret.body, ret.headers);
					$rootScope.$apply();
				} else {
					//提示业务错误
					api.toast({
						msg:ret.body.msg,
						duration: 1000,
						location: 'bottom'
					});
				}
			}
		});
	}
}]);


//下拉刷新服务
module.factory('refreshHeaderLoadDone', function() {
	return function(callback) {
		api.setCustomRefreshHeaderInfo({
		    bgColor: '#ffffff'
		}, function() {
			//callback();
		});
	}
});


/**
 * 添加本地存储
 */
module.factory("setStorage", function(){
	return function(key, value, eventName, eventData){
		api.setPrefs({
			key: key,
			value: value
		});
		
		if(eventName){
			api.sendEvent({
				name: eventName,
				extra: eventData
			});
		}
	}
})

/**
 * 获取本地存储
 */
module.factory("getStorage", function(){
	return function(key){
		return api.getPrefs({
			sync: true,
			key: key
		});
	}
})

/**
 * 删除本地存储
 */
module.factory("removeStorage", function(){
	return function(key, eventName, eventData){
		api.removePrefs({
			key: key
		});
		
		if(eventName){
			api.sendEvent({
				name: eventName,
				extra: eventData
			});
		}
	}
})

//封装run()
module.run(function(){
	var body =document.querySelector('body');
	body.classList.contains('opacity_0') ? body.classList.remove('opacity_0'):'';
	body.classList.add('opacity_1');  
});