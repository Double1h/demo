function Fruit () {
	 this.active=[]; //果实的状态
	 this.x=[];//果实的水平位置
	 this.y=[];//果实的垂直位置
	 this.l=[];//果实的大小比例
	 this.spd=[];//果实的速度
	 this.type4fruit=[];//果实的种类
	 this.orange=new Image();//橙色果实
	 this.orange.src="src/fruit.png";
	 this.blue=new Image();//蓝色果实
     this.blue.src="src/blue.png";
     this.ane=[];//对应的海葵
     
}
Fruit.prototype.num=30;
Fruit.prototype.init=function () {
	 for(var i=0;i<this.num;i++){
	 	  this.active[i]=false;
	 	  if(i<15){
	 	  	this.born(i);
	 	  }
	 }
	
}
Fruit.prototype.draw=function () {
	 for(var i=0;i<this.num;i++)
	 {
	 	if(this.active[i]){//如果活跃
	 		if(this.l[i]<14){//果实开始长大
	 			this.l[i] += this.spd[i] * deltaTime;
	 			this.x[i]=ane.headx[this.ane[i]]-this.l[i]*0.5;
	 			ctx2.drawImage(this[this.type4fruit[i]],this.x[i],this.y[i],this.l[i],this.l[i]);
	 	  }else{//果实长大完成
	 	  	if(this.y[i]>=0){//果实上升
	 	  		this.y[i]-=(this.spd[i]*300);
	 	  		ctx2.drawImage(this[this.type4fruit[i]],this.x[i],this.y[i],this.l[i],this.l[i]);
	 	  		}else{//果实离开画面
	 	  		this.active[i]=false;
	 	  	}
	 	  }
	 	}
	 }
}
Fruit.prototype.born=function (i) {
	 	var random=Math.floor(Math.random()*50);//出生的位置
        this.spd[i] = Math.random() * 0.02 + 0.005;//每个果实自己的速度
        this.l[i]=0;
        this.active[i]=true;
        this.x[i]=ane.rootx[random]-this.l[i]*0.5;
        this.y[i]=ane.heady[random]-this.l[i]*0.5;
        this.ane[i]=random;
        var random4type=Math.random();
        if(random4type<0.3){
        	this.type4fruit[i]="blue";
        }else{
        	this.type4fruit[i]="orange";
        }
}

//果实监听函数，保证画面只有15个果实
Fruit.prototype.fruitMonitor=function () {
	 var count=0;
	 for(var i=0;i<this.num;i++)
	 {
	 	if(this.active[i]){
	 		count++;
	 	}
	 }
	 if(count<15){
	 	this.sendFruit();
	 	return ;
	 }
}

Fruit.prototype.sendFruit=function () {
    for(var i=0;i<this.num;i++)
    {
    	if(!this.active[i])
    	{
    		this.born(i);
    		return ;
    	}
    }
	
}

Fruit.prototype.dead=function  (i) {
	 this.active[i]=false;
}