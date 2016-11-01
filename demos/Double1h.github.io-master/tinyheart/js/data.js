function Data () {
	 this.fruitData=0;
	 this.double=1;  
	 this.score=0;
	 this.gameover=false;
	 this.alpha=0;
}

Data.prototype.draw = function(){
	ctx1.save();
	ctx1.fillStyle = "#fff";
	ctx1.shadowBlur = 5;
	ctx1.shadowColor = "#fff";
	ctx1.font="20px Georgia";
	ctx1.textAlign="center";
	ctx1.fillText("Score:"+this.score,cavWidth*0.5,cavHeight-30);
	
	if(this.gameover){
	ctx1.font="30px Georgia";
	this.alpha+=deltaTime*0.0005;
	ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
    ctx1.fillText("GAMEOVER",cavWidth*0.5,cavHeight*0.5);
	}
	ctx1.restore();
}

Data.prototype.addScore = function(){
    this.score+=this.fruitData*this.double*100;
    this.fruitData=0;
    this.double=1; 
}

