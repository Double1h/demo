function momFruitsCollision () {
	 if(!data.gameover){
	 	for(var i=0;i<fruit.num;i++)
	 	{
	 		if(fruit.active[i]){
	 			//计算距离
	 			var length=calLength2(fruit.x[i],fruit.y[i], mom.x, mom.y);
	 			if(length<900){//碰撞
	 				fruit.dead(i);
	 				data.fruitData++;
	 				mom.bigBodyCount++;
	 				if(mom.bigBodyCount>7){
	 					mom.bigBodyCount=7;
	 				}
	 				
	 				if(fruit.type4fruit[i]=="blue"){
	 					data.double++;
	 				}
	 				wave.born(fruit.x[i],fruit.y[i]);
	 			}
	 		}
	 	}
	 }
}

function momBabyCollision () {
	 		if(!data.gameover)
	 		{
	 			//计算距离
	 			var length=calLength2(baby.x,baby.y, mom.x, mom.y);
	 			if(length<900){
	 				if(mom.bigBodyCount>0){
	 					halo.born(baby.x,baby.y);
	 					data.addScore();
	 					baby.babyBodyCount=0;
	 					mom.bigBodyCount=0;
	 				}
	 			}
	 		}

}