//获取游戏容器
var container = document.getElementById('container');
//创建外斗射手


function plantPosition(plant){
	var top = plant.offsetTop;
	var left = plant.offsetLeft;
	
	if(top<0||top>495||left<24||left>780){
		container.removeChild(plant);
		return;
	}
	if(top>=0 && top<=95){
		plant.style.top = '90px';
		
		plant.route = 0;//第一条道
	}
	else if(top>95 && top<=195){
		plant.style.top = '190px';
		plant.route = 1;//第二条道
	}
	else if(top>195 && top<=295){
		plant.style.top = '290px';
		plant.route = 2;//第三条道
	}
	else if(top>295 && top<=395){
		plant.style.top = '390px';
		plant.route = 3;//第四条道
	}
	else if(top>395 && top<=495){
		plant.style.top = '490px';
		plant.route = 4;//第五条道
	}
	if(left>=24+33 && left <128+33){//87
		plant.style.left = '120px';//第一列
	}
	if(left>=128+33 && left <196+33){
		plant.style.left = '197px';
	}
	if(left>=196+33 && left <276+33){
		plant.style.left = '282px';
	}
	if(left>=276+33 && left <361+33){
		plant.style.left = '361px';
	}
	if(left>=361+33 && left <446+33){
		plant.style.left = '436px';
	}
	if(left>=446+33 && left <528+33){
		plant.style.left = '519px';
	}
	if(left>=528+33 && left <601+33){
		plant.style.left = '599px';
	}
	if(left>=601+33 && left <681+33){
		plant.style.left = '680px';
	}
	if(left>=681+33 && left <774+33){
		plant.style.left = '766px';
	}
}


	

function createnut(type,onclick){
	var nut = document.createElement('img');
	nut.route = 0;
	
	
	nut.type = type;
	nut.style.position = 'absolute';
	
	nut.attack = [];//一群僵尸吃
		
		document.oncontextmenu = function(e){
			e.preventDefault();//阻止默认效果
		}
		
		
		document.onmousemove = function(e){
			//当前事件e
			nut.style.left = e.x - 37 +'px';
			nut.style.top = e.y - 57 +'px';
		}
	
		
		document.onmousedown = function(e){//放置植物
			document.onmousedown = null;//去掉按键 
			document.onmousemove = null;//去掉跟随效果
			
			if(e.button == 2){//0是左键,1是中健，2是右键
			
			
					container.removeChild(nut);
					
					
			}
			else if(e.button == 0){
				
				
				plantPosition(nut);//判断位置能否种植
				
				onclick(nut);//nut是回调参数
			}
		}
		
		
		container.appendChild(nut);
		return nut;
}


function createBomb(type,onclick){
	var bomb = document.createElement('img');
	bomb.route = 0;
	if(type==5){
		bomb.src = 'images/Jalapeno.gif'
		bomb.blood = 5000;
	}
	if(type==6){
		bomb.src = 'images/CherryBomb.gif'
		bomb.blood = 5000;
	}
	
	bomb.type = type;
	bomb.style.position = 'absolute';
	
	bomb.attack = [];//一群僵尸吃
		
		document.oncontextmenu = function(e){
			e.preventDefault();//阻止默认效果
		}
		
		
		document.onmousemove = function(e){
			//当前事件e
			bomb.style.left = e.x - 37 +'px';
			bomb.style.top = e.y - 57 +'px';
		}
	
		
		document.onmousedown = function(e){//放置植物
			document.onmousedown = null;//去掉按键 
			document.onmousemove = null;//去掉跟随效果
			
			if(e.button == 2){//0是左键,1是中健，2是右键
			
			
					container.removeChild(bomb);
					
					
			}
			else if(e.button == 0){
				
				
				plantPosition(bomb);//判断位置能否种植
				
				onclick(bomb);//bomb是回调参数
			}
		}
		
		
		container.appendChild(bomb);
		return bomb;
}


function createPeashooter(type,onclick){
	var peashooter = document.createElement('img');
	if(type == 1){
		peashooter.src='images/Peashooter.gif';
		peashooter.blood = 500;
	}
	else if(type == 2){
		peashooter.src='images/Repeater.gif';
		peashooter.blood = 500;
	}
	
	else if(type == 3){
		peashooter.src='images/SnowPea.gif';
		peashooter.blood = 500;
	}
	
	else if(type == 4){
		peashooter.src='images/SunFlower.gif';
		peashooter.blood = 500;
	}
	else if(type == 7){
		peashooter.src='images/TallNut.gif';
		peashooter.blood = 15000;
	}
	peashooter.type = type;
	
	
	peashooter.style.position = 'absolute';
	
	peashooter.attack = [];//一群僵尸吃
	
	document.oncontextmenu = function(e){
		e.preventDefault();//阻止默认效果
	}
	
	
	document.onmousemove = function(e){
		//当前事件e
		peashooter.style.left = e.x - 37 +'px';
		peashooter.style.top = e.y - 57 +'px';
	}

	
	document.onmousedown = function(e){//放置植物
		document.onmousedown = null;//去掉按键 
		document.onmousemove = null;//去掉跟随效果
		
		if(e.button == 2){//0是左键,1是中健，2是右键
		
		
				container.removeChild(peashooter);
				
				
		}
		else if(e.button == 0){
			
			plantPosition(peashooter)
			
			onclick(peashooter);//peashooter是回调参数
		}
	}
	
	
	container.appendChild(peashooter);
	return peashooter;
}

function createSun(sunflower,code,disapper){
	var sun = document.createElement('img'); 
	sun.src = 'images/Sun.gif';
	sun.style.position = 'absolute';
	sun.style.left = sunflower.offsetLeft +'px';
	sun.style.top = sunflower.offsetTop + 'px';
	
	
	sun.code = new Date().getTime()+'sun'+code;//时间戳使code不重复
	sun.step = function(){
		if(sun.offsetTop>20&&sun.offsetLeft>20){
			sun.style.top = sun.offsetTop-4*(sun.offsetTop/100)+'px';
			sun.style.left = sun.offsetLeft-4*(sun.offsetLeft/100)+'px';
			
			
		}
		else{//太阳消失
			disapper(sun);
		}
		/*	
		setTimeout(function(){
			disapper(sun);
		},500);	*/
		
	}
	container.appendChild(sun);
	return sun;
}


//创建子弹精灵
function createBullet(peashooter,code,disapper){
	var bullet = document.createElement('img'); 
	if(peashooter.type == 1||peashooter.type == 2){
		bullet.src = 'images/Bullet.gif';
	}
	//不同类型的子弹
	else if(peashooter.type == 3){
		bullet.src = 'images/SnowBullet.gif';
	}
	
	
	
	bullet.type = peashooter.type;
	bullet.route = peashooter.route;
	bullet.code = new Date().getTime()+'bullet'+code;//时间戳使code不重复
	bullet.style.position = 'absolute';
	bullet.style.left = peashooter.offsetLeft + 35 +'px';
	bullet.style.top = peashooter.offsetTop + 'px';
	
	
	bullet.step = function(){
		if(bullet.offsetLeft<1000 && bullet.src.endsWith('Bullet.gif'))
		{
			bullet.style.left = bullet.offsetLeft + 4 + 'px';
		}
		else{
			disapper(bullet);
		}
	}
	
	
	container.appendChild(bullet);
	return bullet;
}


function createCar(id){
	var car = document.createElement('img');
	
	car.src = 'LawnCleaner.png';
	
	car.id = id;
	car.style.position = 'absolute';
	car.style.left = '0px';
	car.style.top = '0px';
	
}


//创建zombie
function createZombie(id,gameover){
	var zombie = document.createElement('img');//创建僵尸的图片
	
	
	//随机僵尸类型
	zombie.status = parseInt(Math.random()*6);
	if(zombie.status == 0||zombie.status == 1||zombie.status == 2){
		zombie.src = 'images/Zombie.gif';
		zombie.blood = 200;
	}
	else if(zombie.status == 3||zombie.status == 4){
		zombie.src = 'images/ConeheadZombie.gif';
		zombie.blood = 400;
	}
	else{
		zombie.src = 'images/BucketheadZombie.gif';
		zombie.blood = 600;
	}
	
	
	//zombie.src='images/Zombie.gif';	//僵尸图片的路径
	//zombie.blood = 200;
	
	
	zombie.id = id;
	zombie.style.position = 'absolute';//定位
	zombie.route = parseInt(Math.random()*5);
	zombie.style.top = [30,130,230,330,430][zombie.route] + 'px';
	zombie.style.left = '760px';
	zombie.counter = 0;//计数器
	zombie.speed = 2;//速度
	
	zombie.step = function(){//调用走步
		zombie.counter++;
		if(zombie.counter < 10){
			return;
		}
		zombie.counter = 0;
		if(zombie.src.endsWith('Zombie.gif') && zombie.offsetLeft > -80){
			zombie.style.left = zombie.offsetLeft - zombie.speed + 'px';
		}
		else if(zombie.src.endsWith('ZombieLostHead.gif') && zombie.offsetLeft > -80){
			zombie.style.left = zombie.offsetLeft - zombie.speed + 'px';
		}
		
		if(zombie.offsetLeft <= -80){
			gameover();
		}
		
		
	}
	container.appendChild(zombie);//游戏容器添加孩子
	return zombie;//返回僵尸
}


function createHead(zombie){
	var head = document.createElement('img');
	head.src = 'images/ZombieHead.gif';
	head.style.position = 'absolute';
	head.style.left = zombie.offsetLeft+ 40 + 'px';
	head.style.top = zombie.offsetTop+'px';
	container.appendChild(head);
	return head;
}
