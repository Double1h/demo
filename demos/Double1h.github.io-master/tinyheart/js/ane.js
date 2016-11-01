function Ane () {
	 this.rootx=[];//生成海葵底部的水平坐标
	 this.headx=[];  //海葵的头部的水平坐标,sin(x)
	 this.heady=[];//海葵的底部的垂直左边
	 this.angle;//摆动角度，用sin转换
	 this.amp=[];//摆动幅度
	 this.init();
}

Ane.prototype.num = 50;//海葵数量
Ane.prototype.init=function  () {//初始化海葵的位置
	this.rootx[0]=10;
	this.angle=0;
	 for(var i=1;i<this.num;i++)
	 {
	 	this.rootx[i]=this.rootx[i-1]+Math.random()*32;
	 	this.heady[i]=cavHeight-200+Math.random()*60;
	 	this.headx[i]=this.rootx[i];
	 	this.amp[i]=Math.random()*50+10;
	 }
}
Ane.prototype.drawAne = function(){//绘制海葵
	ctx2.save();
	ctx2.strokeStyle="#3b154e"; 
	ctx2.lineWidth="20";
	ctx2.lineCap="round";
	ctx2.globalAlpha=0.6;
	 for(var i=0;i<this.num;i++)
	 {
	 	ctx2.beginPath();
	 	ctx2.moveTo(this.rootx[i],cavHeight);
	 	this.angle+=deltaTime*0.00002;
	 	var alpha=Math.sin(this.angle);
	 	this.headx[i]=this.rootx[i]+this.amp[i]*alpha;
	 	ctx2.quadraticCurveTo(this.rootx[i],cavHeight-40,this.headx[i],this.heady[i]);
		ctx2.stroke(); // 进行绘制

	 }
	 ctx2.restore();
};
