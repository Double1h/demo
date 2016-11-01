function Mom () {
	 this.x;//鱼的水平位置
	 this.y;//鱼的垂直位置
	 this.angle;//鱼的角度
	 //鱼的眼睛
	 this.bigEye=[];
	 this.bigEyeTimer=0;
	 this.bigEyeCount=0;
	 this.bigEyeInterval=1;

	 //鱼的身体
	 this.bigBodyOrg=[];
	 this.bigBodyBlue=[];
	 this.bigBodyTimer=0;
	 this.bigBodyCount=0;
	 // 鱼的尾巴
	 this.bigTail=[];
	 this.bigTailTimer=0;
	 this.bigTailCount=0;
}

Mom.prototype.init=function () {
	 this.x=cavWidth/2;
	 this.y=cavHeight/2;
	 this.angle=0;
	 for(var i=0;i<2;i++)
	 {
	 	this.bigEye[i]=new Image();
	 	this.bigEye[i].src="src/bigEye"+i+".png";
	 }
	 
	 for(var i=0;i<8;i++)
	 {
	 	this.bigBodyOrg[i]=new Image();
	 	this.bigBodyBlue[i]=new Image();
	 	this.bigBodyOrg[i].src="src/bigEat"+i+".png";
	 	this.bigBodyBlue[i].src="src/bigEatBlue"+i+".png";
	 }
	 for(var i=0;i<8;i++)
	 {
	 	this.bigTail[i]=new Image();
	 	this.bigTail[i].src="src/bigTail"+i+".png";
	 }

}
Mom.prototype.draw=function () {
	//Lerp x,y  使得一个值趋向于一个目标值
	 this.x=lerpDistance(mousex,this.x,0.9);
	 this.y=lerpDistance(mousey,this.y,0.9);
	 var deltay=mousey-this.y;
	 var deltax=mousex-this.x;
	 var beta=Math.atan2(deltay, deltax) + Math.PI;//[0,2*Math.PI]
	 this.angle=lerpAngle(beta,this.angle,0.7);
	 //设置眨眼睛
	 this.bigEyeTimer+=deltaTime;
	 if(this.bigEyeTimer>this.bigEyeInterval)
	 {
    	this.bigEyeCount++;
    	this.bigEyeCount=this.bigEyeCount%2;
    	this.bigEyeTimer=this.bigEyeTimer%this.bigEyeInterval;
	 }
	 if(this.bigEyeCount==0)
	 {
	 	this.bigEyeInterval=2000+Math.random()*1500;
	 	
	 }else{
	 	this.bigEyeInterval=200;
	 }
	 //设置尾巴的摆动
	 this.bigTailTimer+=deltaTime;
	 if(this.bigTailTimer>50)
	 {
	 	this.bigTailCount++;
	 	this.bigTailTimer=this.bigTailTimer%50;
	 	this.bigTailCount=this.bigTailCount%8;
	 }
	 ctx1.save();
	 ctx1.translate(this.x,this.y);
	 ctx1.rotate(this.angle);
	 ctx1.drawImage(this.bigEye[this.bigEyeCount],-this.bigEye[this.bigEyeCount].width*0.5,-this.bigEye[this.bigEyeCount].height*0.5);
	 if(data.double==1){
	 	ctx1.drawImage(this.bigBodyOrg[this.bigBodyCount],-this.bigBodyOrg[this.bigBodyCount].width*0.5,-this.bigBodyOrg[this.bigBodyCount].height*0.5);
	 }else{
	 	ctx1.drawImage(this.bigBodyBlue[this.bigBodyCount],-this.bigBodyBlue[this.bigBodyCount].width*0.5,-this.bigBodyBlue[this.bigBodyCount].height*0.5);
	 }
	 ctx1.drawImage(this.bigTail[this.bigTailCount],-this.bigTail[this.bigTailCount].width*0.5+30,-this.bigTail[this.bigTailCount].height*0.5);
	 ctx1.restore();
}