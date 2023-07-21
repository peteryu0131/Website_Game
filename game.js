var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

// create a object for each 
var ball = {
    
    x : 300,
    y : 300,
    r : 12,
    color : "lime"
}

//foodC1
var foodC1 = {

    x: 50,
    y: 70,
    r: 7,
    color: "blue"
}

var foodC2 = {

    x: 500,
    y: 400,
    r: 7,
    color: "green"
}

var foodC3 = {

    x: 250,
    y: 400,
    r: 7,
    color: "yellow"
}

var foodC4 = {

    x: 50,
    y: 240,
    r: 7,
    color: "cyan"
}

var foodC5 = {

    x: 500,
    y: 500,
    r: 7,
    color: "white"
}



//foodR1
var foodR1 = {

    x: 300,
    y: 200,
    width: 11,
    height: 11,
    color: "orange"
}

var foodR2 = {

    x: 500,
    y: 80,
    width: 11,
    height: 11,
    color: "blue"
}

var foodR3 = {

    x: 200,
    y: 80,
    width: 11,
    height: 11,
    color: "yellow"
}

var foodR4 = {

    x: 400,
    y: 400,
    width: 11,
    height: 11,
    color: "cyan"
}

var foodR5 = {

    x: 50,
    y: 510,
    width: 11,
    height: 11,
    color: "white"
}


var bomb1 = {

    x: 100,
    y: 500,
    r: 15,
    color: "red"
}
var bomb2 = {

    x: 550,
    y: 80,
    r: 15,
    color: "red"
}


function start(){

    timer(); 
}


function restart(){
    ball.r = 12;
    timer();
    draw();
    drawFood();
    drawBomb();
      
}


function draw() {
    var width = 600;
    var height = 600;
    //clean canvas
    ctx.clearRect(0, 0, width, height);
    // draw ball
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fill();
}


function speedOfBall(){

    var speed = document.getElementById("speed").value;
    var speedMove =0;

    switch(speed){

        case"slow":
            speedMove = 5;
            break;

         case"normal":
            speedMove = 7;
            break;

         case"fast":
            speedMove = 11;
            break;

    }
    return speedMove;
}


addEventListener("load", draw, true);

function doKeyDown( event ) {

    var speedMoveBall = speedOfBall();

    var flag = false;

    switch (event.keyCode) {

        //up
        case 38:
        //check the boundary
        if(ball.y <= 0){
            break;
        }
        ball.y -= speedMoveBall;
        draw();
        break;

        //down
        case 40:
        //check the boundary
        if(ball.y >= 600){
            break;
        }
        ball.y += speedMoveBall;
        draw();
        break;

        //left
        case 37:
        //check the boundary
        if(ball.x <= 0){
            break;
        }
        ball.x -= speedMoveBall;
        draw();
        break;

        //right
        case 39:
        //check the boundary
        if(ball.x >= 600){
            break;
        }
        ball.x += speedMoveBall;
        draw();
        break;
    }

//////////////////////////////////////////////////////////////////////////////

        //check red ball and foodC1,2,3,4,5 have touch or not
        if ((ball.x - foodC1.x) * (ball.x - foodC1.x)
            + (ball.y - foodC1.y) * (ball.y - foodC1.y) 
            <= (ball.r + foodC1.r) * (ball.r + foodC1.r)) 
        {
			foodC1Random();
            ball.r += 2.5;
            ball.color = "blue";
            flag=true;
            
        }


        if ((ball.x - foodC2.x) * (ball.x - foodC2.x)
            + (ball.y - foodC2.y) * (ball.y - foodC2.y) 
            <= (ball.r + 1) * (ball.r + 1)) 
        {
			foodC2Random();
            ball.r += 2.5;
            ball.color = "green";
			flag=true;
        }

        if ((ball.x - foodC3.x) * (ball.x - foodC3.x)
            + (ball.y - foodC3.y) * (ball.y - foodC3.y) 
            <= (ball.r + 4) * (ball.r + 4)) 
        {
            foodC3Random();
            ball.r += 2.5;
            ball.color = "yellow";
            flag=true;
        }

        if ((ball.x - foodC4.x) * (ball.x - foodC4.x)
            + (ball.y - foodC4.y) * (ball.y - foodC4.y) 
            <= (ball.r + 4) * (ball.r + 4)) 
        {
            foodC4Random();
            ball.r += 2.5;
            ball.color = "cyan";
            flag=true;
        }

        if ((ball.x - foodC5.x) * (ball.x - foodC5.x)
            + (ball.y - foodC5.y) * (ball.y - foodC5.y) 
            <= (ball.r + 4) * (ball.r + 4)) 
        {
            foodC5Random();
            ball.r += 2.5;
            ball.color = "white";
            flag=true;
        }

        

        //check red ball and foodR1,2,3,4,5 have touch or not
        if ((ball.x - foodR1.x) * (ball.x - foodR1.x)
            + (ball.y - foodR1.y) * (ball.y - foodR1.y) 
            <= (ball.r + 6) * (ball.r + 6)) 
        {
            foodR1Random();
            ball.r += 2.5;
            ball.color = "orange";
            flag=true;
        }

         if ((ball.x - foodR2.x) * (ball.x - foodR2.x)
            + (ball.y - foodR2.y) * (ball.y - foodR2.y) 
            <= (ball.r + 6) * (ball.r + 6)) 
        {
            foodR2Random();
            ball.r += 2.5;
            ball.color = "blue";
            flag=true;
        }
    
         if ((ball.x - foodR3.x) * (ball.x - foodR3.x)
            + (ball.y - foodR3.y) * (ball.y - foodR3.y) 
            <= (ball.r + 4) * (ball.r + 4)) 
        {
            foodR3Random();
            ball.r += 2.5;
            ball.color = "yellow";
            flag=true;
        }


         if ((ball.x - foodR4.x) * (ball.x - foodR4.x)
            + (ball.y - foodR4.y) * (ball.y - foodR4.y) 
            <= (ball.r + 6) * (ball.r + 6)) 
        {
            foodR4Random();
            ball.r += 2.5;
            ball.color = "cyan";
            flag=true;
        }


         if ((ball.x - foodR5.x) * (ball.x - foodR5.x)
            + (ball.y - foodR5.y) * (ball.y - foodR5.y) 
            <= (ball.r + 6) * (ball.r + 6)) 
        {
            foodR5Random();
            ball.r += 2.5;
            ball.color = "white";
            flag=true;
        }

////////////////////////////////////////////////////////////

        if ((ball.x - bomb1.x) * (ball.x - bomb1.x)
            + (ball.y - bomb1.y) * (ball.y - bomb1.y) 
            <= (ball.r + 6) * (ball.r + 6)) 
        {
            bomb1Random();
            ball.r -= 5;
            ball.color = "lime";
            flag=true;
        }


        if ((ball.x - bomb2.x) * (ball.x - bomb2.x)
            + (ball.y - bomb2.y) * (ball.y - bomb2.y) 
            <= (ball.r + 6) * (ball.r + 6)) 
        {
            bomb2Random();
            ball.r -= 5;
            ball.color = "lime";
            flag=true;
        }

////////////////////////////////////////////////////////////

        //set a max size for ball
        if (ball.r > 200) {

            ball.r = 200;
            alert(" Congratulation! You win the game ! Please click Restart button to play again ! ")
 
        }
        
        //if touch draw new food

        if(flag){

            draw();
        }

        drawFood();
        drawBomb();
 
    }

    
    function drawFood() {

        drawfoodC1();
        drawfoodC2();
        drawfoodC3();
        drawfoodC4();
        drawfoodC5();

        drawfoodR1();
        drawfoodR2();
        drawfoodR3();
        drawfoodR4();
        drawfoodR5();
    }

    function drawBomb() {

        drawBomb1();
        drawBomb2();

    }



 /////////////////////////////////////////////////////////////////////////////
    
 function drawfoodC1() {
        ctx.fillStyle = foodC1.color;
        ctx.beginPath();
        ctx.arc(foodC1.x, foodC1.y, foodC1.r, 0, Math.PI * 2, true);
        ctx.fill();
    }


    window.addEventListener("load", drawfoodC1, true);

		function foodC1Random() {
			foodC1.x = Math.random();
			foodC1.x = Math.ceil(foodC1.x * 600);
			foodC1.y = Math.random();
			foodC1.y = Math.ceil(foodC1.y * 600);
        }
        
    

    function drawfoodC2() {
        ctx.fillStyle = foodC2.color;
        ctx.beginPath();
        ctx.arc(foodC2.x, foodC2.y, foodC2.r, 0, Math.PI * 2, true);
        ctx.fill();
    }


    window.addEventListener("load", drawfoodC2, true);

		function foodC2Random() {
			foodC2.x = Math.random();
			foodC2.x = Math.ceil(foodC2.x * 600);
			foodC2.y = Math.random();
			foodC2.y = Math.ceil(foodC2.y * 600);
        }
     
        
    function drawfoodC3() {
        ctx.fillStyle = foodC3.color;
        ctx.beginPath();
        ctx.arc(foodC3.x, foodC3.y, foodC3.r, 0, Math.PI * 2, true);
        ctx.fill();
    }


    window.addEventListener("load", drawfoodC3, true);

		function foodC3Random() {
			foodC3.x = Math.random();
			foodC3.x = Math.ceil(foodC3.x * 600);
			foodC3.y = Math.random();
			foodC3.y = Math.ceil(foodC3.y * 600);
        }
        



    function drawfoodC4() {
        ctx.fillStyle = foodC4.color;
        ctx.beginPath();
        ctx.arc(foodC4.x, foodC4.y, foodC4.r, 0, Math.PI * 2, true);
        ctx.fill();
    }

    window.addEventListener("load", drawfoodC4, true);

		function foodC4Random() {
			foodC4.x = Math.random();
			foodC4.x = Math.ceil(foodC4.x * 600);
			foodC4.y = Math.random();
			foodC4.y = Math.ceil(foodC4.y * 600);
		}



    function drawfoodC5() {
        ctx.fillStyle = foodC5.color;
        ctx.beginPath();
        ctx.arc(foodC5.x, foodC5.y, foodC5.r, 0, Math.PI * 2, true);
        ctx.fill();
    }

    window.addEventListener("load", drawfoodC5, true);

		function foodC5Random() {
			foodC5.x = Math.random();
			foodC5.x = Math.ceil(foodC5.x * 600);
			foodC5.y = Math.random();
			foodC5.y = Math.ceil(foodC5.y * 600);
		}



////////////////////////////////////////////////////////////////////////////

    function drawfoodR1() {
        ctx.fillStyle = foodR1.color;
        ctx.beginPath();
        ctx.rect(foodR1.x, foodR1.y, foodR1.width, foodR1.height);
        ctx.fill();
    }
    
    window.addEventListener("load", drawfoodR1, true);

        function foodR1Random() {
            foodR1.x = Math.random();
            foodR1.x = Math.ceil(foodR1.x * 600);
            foodR1.y = Math.random();
            foodR1.y = Math.ceil(foodR1.y * 600);

    }


    function drawfoodR2() {
        ctx.fillStyle = foodR2.color;
        ctx.beginPath();
        ctx.rect(foodR2.x, foodR2.y, foodR2.width, foodR2.height);
        ctx.fill();
    }
    
    window.addEventListener("load", drawfoodR2, true);

        function foodR2Random() {
            foodR2.x = Math.random();
            foodR2.x = Math.ceil(foodR2.x * 600);
            foodR2.y = Math.random();
            foodR2.y = Math.ceil(foodR2.y * 600);

    }


    function drawfoodR3() {
        ctx.fillStyle = foodR3.color;
        ctx.beginPath();
        ctx.rect(foodR3.x, foodR3.y, foodR3.width, foodR3.height);
        ctx.fill();
    }
    
    window.addEventListener("load", drawfoodR3, true);

        function foodR3Random() {
            foodR3.x = Math.random();
            foodR3.x = Math.ceil(foodR3.x * 600);
            foodR3.y = Math.random();
            foodR3.y = Math.ceil(foodR3.y * 600);

    }


    function drawfoodR4() {
        ctx.fillStyle = foodR4.color;
        ctx.beginPath();
        ctx.rect(foodR4.x, foodR4.y, foodR4.width, foodR4.height);
        ctx.fill();
    }
    
    window.addEventListener("load", drawfoodR4, true);

        function foodR4Random() {
            foodR4.x = Math.random();
            foodR4.x = Math.ceil(foodR4.x * 600);
            foodR4.y = Math.random();
            foodR4.y = Math.ceil(foodR4.y * 600);

    }

    function drawfoodR5 () {
        ctx.fillStyle = foodR5.color;
        ctx.beginPath();
        ctx.rect(foodR5.x, foodR5.y, foodR5.width, foodR5.height);
        ctx.fill();
    }
    
    window.addEventListener("load", drawfoodR5, true);

        function foodR5Random() {
            foodR5.x = Math.random();
            foodR5.x = Math.ceil(foodR5.x * 600);
            foodR5.y = Math.random();
            foodR5.y = Math.ceil(foodR5.y * 600);

    }




    function drawBomb1() {
        ctx.fillStyle = bomb1.color;
        ctx.beginPath();
        ctx.arc(bomb1.x, bomb1.y, bomb1.r, 0, Math.PI * 2, true);
        ctx.fill();
    }
    
    window.addEventListener("load", drawBomb1, true);

        function bomb1Random() {
            bomb1.x = Math.random();
            bomb1.x = Math.ceil(bomb1.x * 600);
            bomb1.y = Math.random();
            bomb1.y = Math.ceil(bomb1.y * 600);

    }



    function drawBomb2() {
        ctx.fillStyle = bomb1.color;
        ctx.beginPath();
        ctx.arc(bomb2.x, bomb2.y, bomb2.r, 0, Math.PI * 2, true);
        ctx.fill();
    }
    
    window.addEventListener("load", drawBomb2, true);

        function bomb2Random() {
            bomb2.x = Math.random();
            bomb2.x = Math.ceil(bomb2.x * 600);
            bomb2.y = Math.random();
            bomb2.y = Math.ceil(bomb2.y * 600);

    }
///////////////////////////////////////////////////////////////////////////



    function gameTime(){

        var time = document.getElementById("gameTime").value;

        var timeSet =0;
    
        switch(time){
    
            case"60s":
                timeSet = 60;
                break;
    
             case"30s":
                timeSet = 30;
                break;
    
             case"90s":
                timeSet = 90;
                break;
    
        }
        return timeSet;
    }


    function timer() {

        let gameTimeLength = gameTime();

        let time = gameTimeLength;

        let timer = setInterval(myTimer, 1000);

    function myTimer(){

	    time = (time - 1);

	    timeDisplay.innerHTML = time;

	    if(time === 0){

            clearInterval(timer);
            alert( "Time is up ! Please click the restart button to play again! "); 

        }
        
    }

    }
    
      

