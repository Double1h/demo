function Dust () {
	this.x=[];
	this.y=[];
	this.type4shape=[];
	this.angle;
	this.amp=[];  
}
Dust.prototype.images=[];
Dust.prototype.num=30;
Dust.prototype.init=function () {
	this.angle=0;
	 for(var i=0;i<7;i++)
	 {
	 	this.images[i]=new Image();
	 	this.images[i].src="src/dust"+i+".png";
	 }
	 for(var i=0;i<this.num;i++)
	 {
	 	this.x[i]=Math.random()*cavWidth;
	 	this.y[i]=Math.random()*cavHeight;
	 	this.type4shape[i]=Math.floor(Math.random()*7);
	 	this.amp=Math.random()*20+10;
	 }
}
Dust.prototype.draw = function(){
	for(var i=0;i<this.num;i++)
	{
		this.angle+=deltaTime*0.00002;
		var alpha=Math.sin(this.angle);
		console.log()
		ctx1.drawImage(this.images[this.type4shape[i]],this.x[i]+alpha*this.amp,this.y[i]);
	}
};