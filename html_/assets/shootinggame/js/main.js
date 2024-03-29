//캔버스 세팅
let canvas;
let ctx; 
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width=400;
canvas.height=700;
document.body.appendChild(canvas);

let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;
let gameOver =false//게임의 상태값 true이면 게임이 끝남, false이면 게임 진행

let score=0;

//우주선 좌표(따로 빼는 이유 : 계속 바뀜)
let spaceshipX = canvas.width/2 -32
let spaceshipY = canvas.height-64

//총알들을 저장하는 리스트
let bulletList = [] 
function Bullet(){ 
  this.x=0;
  this.y=0;
  this.init = function(){
    this.x=spaceshipX + 20;
    this.y=spaceshipY
    this.alive=true //true면 살아있는 총알 false면 죽은 총알
    bulletList.push(this)
  };
  //총알 발사 (y좌표가 줄어든다)
  this.update=function(){
    this.y -= 7;
  };
  this.checkHit = function(){
    for(let i=0; i< enemyList.length; i++){
      if(this.y <= enemyList[i].y && this.x >= enemyList[i].x && this.x <= enemyList[i].x+32){
      //총알이 죽게됨 적군의 우주선이 없어짐, 점수 획득
      score++;
      this.alive = false //죽은 총알
      enemyList.splice(i,1);
    }
  }
}
}


function generateRandomValue(min, max){
  let randomNum = Math.floor(Math.random()*(max-min+1))+min
  return randomNum
}

let enemyList=[]
function Enemy(){
  this.x=0;
  this.y=0;
  this.init= function(){
    this.y=0
    this.x=generateRandomValue(0,canvas.width-32)
    enemyList.push(this)
  };
  this.update=function(){
    this.y +=2; //적군의 속도 조절

    if(this.y >= canvas.height-32){
      gameOver=true;
      // console.log("gameover");
      
    }
  }
 
}


function loadImage(){
  backgroundImage = new Image();
  backgroundImage.src="img/spacebg.jpg"

  spaceshipImage = new Image();
  spaceshipImage.src="img/spaceship.jpg"

  bulletImage= new Image();
  bulletImage.src="img/bullet.jpg"


  enemyImage = new Image();
  enemyImage.src="img/enemy.jpg"

  gameOverImage=new Image();
  gameOverImage.src="img/gameover.jpg"

}

let keysDown={};
function setupKeyboardListener(){
  document.addEventListener('keydown',function(event){
    // console.log("무슨 키가 눌렸어?", event.keyCode)
    keysDown[event.keyCode] = true;
    // console.log("키다운객체에 들어간 값은?" ,keysDown);
  });
  document.addEventListener('keyup',function(event){
    delete keysDown[event.keyCode]
    // console.log("버튼 클릭후",keysDown);
    if(event.keyCode == 32){
      createBullet() // 총알 생성

    }
  });
}

function createBullet(){
  // console.log('총알생성');
  let b = new Bullet(); //총알 하나 생성
  b.init()
  // console.log("새로운 총알 리스트",bulletList);

}

//1초마다 적군 생성
function createEnemy(){
  const interval = setInterval(function(){
    let e = new Enemy()
    e.init()
  },1000)
}


function update(){
  if(39 in keysDown){
    spaceshipX +=5; //우주선의 속도
  }//right

  if(37 in keysDown){
    spaceshipX -=5;
  } //left
  if(spaceshipX <= 0){
    spaceshipX = 0
  }
  if(spaceshipX >= canvas.width-64){
    spaceshipX = canvas.width-64;
  }
  //우주선의 좌표값이 무한대로 업데이트가 되는게 아닌! 경기장 안에서만 있게하려면

  //총알의 y좌표 없데이트하는 함수 호출
  //총알 적군을 쳤느냐 안쳤느냐
  for(let i =0; i< bulletList.length; i++){
    if(bulletList[i].alive){
      bulletList[i].update();
      bulletList[i].checkHit();
    } 
  }
 
  for(let i=0; i<enemyList.length;i++){
    enemyList[i].update(); 
  }

}

function render(){
  //배경
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  //우주선
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
  //score
  ctx.fillText(`Score: ${score}`,20,20);
  ctx.fillStyle="white";
  ctx.font="20px Arial";

  //총알
  for(let i = 0; i< bulletList.length; i++){
    if(bulletList[i].alive){
      ctx.drawImage(bulletImage,bulletList[i].x, bulletList[i].y)
    }
  }
  //적군
  for(let i=0; i<enemyList.length; i++){
    ctx.drawImage(enemyImage,enemyList[i].x, enemyList[i].y);
  }
}

function main(){
  if(!gameOver){
    update(); //좌표값을 업데이트하고
    render(); //그려주고
    // console.log("animation calls main function")
    requestAnimationFrame(main)
  } else{
    ctx.drawImage(gameOverImage, 10, 100, 380,380)
  }

}


loadImage();
setupKeyboardListener();
createEnemy();
main();





//우주선이 오른쪽으로 간다 : x좌표의 값이 증가한다.
//우주선이 왼쪽 간다 : x좌표의 값이 감소한다.


//방향키를 누르면
//우주선의 xy좌표가 바뀌고
//다시 render 그려준다

//총알만들기
//1.스페이스바를 누르면 총알 발사
//2. 총알이 발사 = 총알의 y값이 --, 총알의 x값은? 스페이스를 누른 순간의 우주선의 x좌표
//3. 발사된 총알들은 총알 배열에 저장을 한다
//4. 총알들은 x,y좌표값이 있어야한다.
//5. 총알 배열을 가지고 render 그려준다.



//적군만들기
// x,y,init, update
//적군은 위치가 랜덤
//적군은 밑으로 내려온다= y좌표가 증가
//1초마다 하나씩 적군이 나온다
//적군의 우주선이 바닥에 닿으면 게임 오버
//적군과 총알이 만나면 우주선이 사라진다 점수 1점 획득


//총알.y <= 적군.y And
//총알.x >= 적군.x And 총알.x <= 적군.x + 적군의 넓이
//->닿았다
//총알이 죽게됨 적군의 우주선이 없어짐, 점수 획득
