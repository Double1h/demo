function Wave () {
	this.x=[];
	this.y=[];
	this.r=[];  
	this.alive=[];
}

Wave.prototype.num=10;
Wave.prototype.init=function () {
	 for(var i=0;i<this.num;i++)
	 {
	 	this.alive[i]=false;
	 }
}
Wave.prototype.born = function(x,y){
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
Wave.prototype.draw=function () {
	ctx1.save();
	ctx1.shadowColor = "#fff";
	ctx1.shadowBlur=2;
	ctx1.lineWidth=2;
	for(var i=0;i<this.num;i++)  
	{
		if(this.alive[i])
		{
			this.r[i]+=deltaTime*0.05;
			if(this.r[i]>60){
				this.alive[i]=false;
				break;
			}
			var alpha=1-this.r[i]/60;
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(255,255,255," + alpha + ")";
			ctx1.stroke(); 			
		}
	}
	ctx1.restore();
}