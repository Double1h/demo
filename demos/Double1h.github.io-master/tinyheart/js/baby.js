function Baby () {
	 this.x;//鱼的水平位置
	 this.y;//鱼的垂直位置
	 this.angle;//鱼的角度
	 //鱼的眼睛
	 this.babyEye=[];
	 this.babyEyeTimer=0;
	 this.babyEyeCount=0;
	 this.babyEyeInterval=1;
	 //鱼的身体
	 this.babyBody=[];
	 this.babyBodyTimer=0;
	 this.babyBodyCount=0;
     // 鱼的尾巴
	 this.babyTail=[];
	 this.babyTailTimer=0;
	 this.babyTailCount=0;
	 
}

Baby.prototype.init=function () {
	 this.x=cavWidth/2-50;
	 this.y=cavHeight/2+50;
	 this.angle=0;
	 for(var i=0;i<8;i++)
	 {
	 	this.babyTail[i]=new Image();
	 	this.babyTail[i].src="src/babyTail"+i+".png";
	 }
	 for(var i=0;i<2;i++)
	 {
	 	this.babyEye[i]=new Image();
	 	this.babyEye[i].src="src/babyEye"+i+".png";
	 }
	 for(var i=0;i<20;i++)
	 {
	 	this.babyBody[i]=new Image();
	 	this.babyBody[i].src="src/babyFade"+i+".png";
	 }

}
Baby.prototype.draw=function () {
	//Lerp x,y  使得一个值趋向于一个目标值
	 this.x=lerpDistance(mom.x+30,this.x,0.98);
	 this.y=lerpDistance(mom.y+30,this.y,0.98);
	 var deltay=mom.y-this.y;
	 var deltax=mom.x-this.x;
	 var beta=Math.atan2(deltay, deltax) + Math.PI;//[0,2*Math.PI]
	 this.angle=lerpAngle(beta,this.angle,0.7);
	 //设置尾巴的摆动
	 this.babyTailTimer+=deltaTime;
	 if(this.babyTailTimer>50)
	 {
	 	this.babyTailCount++;
	 	this.babyTailTimer=this.babyTailTimer%50;
	 	this.babyTailCount=this.babyTailCount%8;
	 }
	 //设置眨眼睛
	 this.babyEyeTimer+=deltaTime;
	 if(this.babyEyeTimer>this.babyEyeInterval)
	 {
    	this.babyEyeCount++;
    	this.babyEyeCount=this.babyEyeCount%2;
    	this.babyEyeTimer=this.babyEyeTimer%this.babyEyeInterval;
	 }
	 if(this.babyEyeCount==0)
	 {
	 	this.babyEyeInterval=2000+Math.random()*1500;
	 	
	 }else{
	 	this.babyEyeInterval=200;
	 }

	 //设置身体变白
	 this.babyBodyTimer+=deltaTime;
	 if(this.babyBodyTimer>300){
	 	this.babyBodyCount++;
	 	this.babyBodyTimer=this.babyBodyTimer%300;
	 	if(this.babyBodyCount>19)
	 	{
	 		this.babyBodyCount=19;
	 		//gameover
	 		data.gameover=true;
	 	}
	 }

	 ctx1.save();
	 ctx1.translate(this.x,this.y);
	 ctx1.rotate(this.angle);
	 ctx1.drawImage(this.babyBody[this.babyBodyCount],-this.babyBody[this.babyBodyCount].width*0.5,-this.babyBody[this.babyBodyCount].height*0.5);
	 ctx1.drawImage(this.babyEye[this.babyEyeCount],-this.babyEye[this.babyEyeCount].width*0.5,-this.babyEye[this.babyEyeCount].height*0.5);
	 ctx1.drawImage(this.babyTail[this.babyTailCount],-this.babyTail[this.babyTailCount].width*0.5+25,-this.babyTail[this.babyTailCount].height*0.5);
	 ctx1.restore();
}