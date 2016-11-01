var cav1,cav2,ctx1,ctx2,cavWidth,cavHeight,bgImg,ane,fruit,lastTime,deltaTime,mom,mousex,mousey,wave,halo,dust;
document.body.onload=game;
function game () {
	lastTime = Date.now();
	deltaTime = 0;
	init();  
	gameloop();

}

function init () {
	   cav1=document.getElementById("canvas1"),//fish,ui,
	   cav2=document.getElementById("canvas2"),//ane
	   ctx1=cav1.getContext("2d"),
	   ctx2=cav2.getContext("2d"),
	   cavWidth=cav1.width,
	   cavHeight=cav1.height;
	   mousex=cavWidth*0.5;
	   mousey=cavHeight*0.5;
	   cav1.addEventListener('mousemove',onMouseMove);
	   //绘制背景
       bgImg=new Image();
	   bgImg.src="src/background.jpg"; //路径得是相对于html文件的
	   ane =new Ane();
	   fruit=new Fruit();
	   fruit.init();//绘制果实
	   mom=new Mom();
	   mom.init();
	   baby=new Baby();
	   baby.init();
	   data=new Data();
	   wave=new Wave();
	   halo=new Halo();
	   dust=new Dust();
	   dust.init();
}

function gameloop () {
	 window.requestAnimationFrame(gameloop);
	 //获取两帧时间差
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	ctx2.drawImage(bgImg,0,0,cavWidth,cavHeight);//绘制背景
	ane.drawAne();//绘制海葵
	fruit.draw();//绘制第一波果实
	fruit.fruitMonitor();//补充绘制果实
	//清空画布
	ctx1.clearRect(0,0,cavWidth,cavHeight);
	mom.draw();
	baby.draw();
	data.draw();
	momFruitsCollision();//碰撞检测
	momBabyCollision();//喂食检测
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove (e) {
	 if(!data.gameover)
	 {
	 	mousex=e.offsetX||e.layerX;
	 	mousey=e.offsetY||e.layerX;
	 }
}