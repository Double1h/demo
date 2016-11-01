function Halo () {
	this.x=[];
	this.y=[];
	this.r=[];  
	this.alive=[];
}

Halo.prototype.num=5;
Halo.prototype.init=function () {
	 for(var i=0;i<this.num;i++)
	 {
	 	this.alive[i]=false;
	 }
}
Halo.prototype.born = function(x,y){
	for(var i=0;i<this.num;i++)  
	{
		if(!this.alive[i])
		{

			this.alive[i]=true;
			this.x[i]=x;
			this.y[i]=y;
			this.r[i]=30;
			return;
		}
	}
}
Halo.prototype.draw=function () {
	ctx1.save();
	ctx1.shadowColor = "#fff";
	ctx1.lineWidth=2;
	for(var i=0;i<this.num;i++)  
	{
		if(this.alive[i])
		{
			this.r[i]+=deltaTime*0.1;
			if(this.r[i]>80){
				this.alive[i]=false;
				break;
			}
			var alpha=1-this.r[i]/80;
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(255,88,0," + alpha + ")";
			ctx1.stroke(); 			
		}
	}
	ctx1.restore();
}