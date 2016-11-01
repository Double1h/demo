DOMReady(main);//页面dom元素加载完成后，立刻执行mian函数
function main () {
     waterfall('Waterfall','box');
     // 假数据，存图片地址
     var path=["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png"];
     window.onscroll=function () {
      var oParent=document.getElementById("Waterfall");
        if(checkScroll('Waterfall','box')){//判断是否符合页面加载条件
          //生成随机图片
          var randomI=Math.floor(Math.random()*8);
          var obox=newBox(path[randomI]);
          // 向页面中插入新的图片盒子
          oParent.appendChild(obox);
          // 重新渲染一遍
          waterfall('Waterfall','box');
        }
     }
  }

  // 返回新加载的盒子
  function newBox (path) {
    var obox=document.createElement("div");
    obox.className="box";
    var img=document.createElement("img");
    img.src=path||"images/1.png";
    obox.appendChild(img);
    var imgDetials=document.createElement("div");
    imgDetials.className="imgDetials";
    imgDetials.innerHTML="<p class='imgName'>。 花。</p><span class='repin'>1415</span><span class='like'>44</span><span class='comment'>1</span>";
    obox.appendChild(imgDetials);
    var imgMessage=document.createElement("div");
    imgMessage.className="imgMessage";
    imgMessage.innerHTML="<ul class='imgMessageList'><li><span class='username'>BunBunBuny</span><span >采集到</span><span class='imgsName'>花间集</span></li><li><img src='images/person.png' alt='用户头像' class='userImg'/><span class='username'>BunBunBuny</span><span>:</span><span class='imgsComment'>非洲菊</span></li></ul>"
    obox.appendChild(imgMessage);
    var addComment=document.createElement("div");
    addComment.className="addComment";
    addComment.innerHTML="<img src='images/person.png' alt='用户头像' class='userImg'/><textarea>添加评论或把采集@给好友</textarea>";
    obox.appendChild(addComment);
    return obox;
  }
  // 判断是否符合加载条件
  function checkScroll (parent,box) {
     var oParent=document.getElementById(parent);
     var obox=getByClass(box,oParent);
     // 最后一张图片在页面中的绝对位置
     var lastBox=getAbsolute(obox[obox.length-1]).top+Math.floor(obox[obox.length-1].offsetHeight/2);
     //参考线
     var windowHeight=document.body.clientHeight||document.documentElement.clientHeight;
     var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
     var checkLine=windowHeight+scrollTop;
     return (lastBox<checkLine)?true:false;

  }
  // 瀑布流布局的实现，parent为父元素的id，box为子元素的类名
  function waterfall (parent,box) {
     var oParent=document.getElementById(parent);
     var obox=getByClass(box,oParent);
     var winWidth=oParent.offsetWidth;
     var oboxW=obox[0].offsetWidth;
     // 获取Box的margin-bottom
     var oboxMargin=parseInt(getAttrStyle(obox[0],'marginBottom'));
     //获取图片显示的列数
     var cols=Math.floor(winWidth/oboxW);
     var hArr=[];//存放每一列的高度
     for(var i=0,oboxLens=obox.length;i<oboxLens;i++){
      if(i<cols){
        hArr[i]=obox[i].offsetHeight;
      }else{
        var minH=Math.min.apply(null, hArr);
        var index=getIndex(hArr,minH);
        // 未定位元素定位
        if(obox[i].style.position==""){
          obox[i].style.position = 'absolute';
          obox[i].style.left=obox[index].offsetLeft-12.5+'px';
          obox[i].style.top=hArr[index]+oboxMargin+'px';
        }
         hArr[index]+=(obox[i].offsetHeight+oboxMargin);
      }
     }

  }

//获取元素ele在数组Arr中的索引，不存在则返回-1；
function getIndex (Arr,ele) {
   for(var i=0,lens=Arr.length;i<lens;i++){
        if(Arr[i]==ele){
          return i;
        }
   }
   return -1;
}

// 获取dom元素的绝对位置
function getAbsolute (obj) {
var width = obj.offsetWidth, 
    height = obj.offsetHeight;  
//从目标元素开始向外遍历，累加top和left值  
for (var t = obj.offsetTop, l = obj.offsetLeft; obj = obj.offsetParent;){  
        t += obj.offsetTop;  
        l += obj.offsetLeft;  
    }
    return {top:t,left:l};
}
//获取父元素parent下的类名为clsName的所有元素，若parent为空，则为document下的类名为clsName的所有元素
function getByClass (clsName,parent) {
  var clsArr=[];
      if(!parent){
           parent=document;
      }
      children=parent.getElementsByTagName("*");
      for(var i=0,lens=children.length;i<lens;i++){
        if(children[i].className==clsName){
          clsArr.push(children[i]);
        }
      }
      return clsArr;
}

// 获取obj外联样式表中的attr样式
function getAttrStyle(obj, attr){  
    if(obj.currentStyle){  
        return obj.currentStyle[attr];  //ie
    }else{  
        return document.defaultView.getComputedStyle(obj,false)[attr];  //ff
    }  
}  


//DOMReady实现在浏览器dom树构建完成后执行函数
function DOMReady (fn) {
			if(document.addEventListener){//判断是否为ie浏览器，ie浏览器为attachEvent
				//现代浏览器，直接绑定DOMContentLoaded事件实现DOMReady
				document.addEventListener("DOMContentLoaded", fn,false);
			}else{
				//ie8及以下浏览器
                IEContentLoaded(fn);
			}
            //ie浏览器的DOMReady
           function IEContentLoaded(fn){
           	var done=false;//记录fn是否执行过

           	(function () {
           		try {
           			// DOM树未创建完之前调用doScroll会抛出错误
           		     document.documentElement.doScroll('left');
           		} catch(e) {
           			//延期再执行一次，调用本身，其中arguments.callee在es5严格模式中不能使用
           		    setTimeout(arguments.callee, 50);
           		    return;
           		}
           		//Dom树加载完成后,通过init函数执行一次fn；
           		init(fn);
           	})();

           	function init(fn) { 
           		if(!done){
           			done=true;
           			fn();
           		}
           	}
           	//在IE中如果是frame框架 是使用 onreadystatechange，不是fame用 doSroll,即上方的立刻执行的匿名函数
           	document.onreadystatechange=function () {
           		 if(document.readyState=="complete"){
           		 	document.onreadystatechange=null;//事件执行一次即可
           		 	init();
           		 }
           	}
           }
         }
        
