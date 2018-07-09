(function () {

    var canvas, ctx, btn1, inputField, txtVal, fontSize, fontFamily, fontColor;
//    myAnimation.z = 0;//Eigenschaft
//    myAnimation.loop = function () {} //Methode des Objekts myAnimation definieren
//    myAnimation.loop(); //Aufruf einer Methode des Objekts myAnimation
//    myAnimation.z //Lesen einer Eigenschaft des Objekts myAnimation
//    
//    var z = 0;
//    var speed = 1;
//    var direction = 1;
//    var color = 'red';


    var myLine = {
        z: 0,
        speed: 1,
        direction: 1,
        color: 'red',
        z1: 3,
        speed1: 2,
        direction1: 1,
        color1: 'green'
    };
    var myCircle = {
        x:50,
        y:100, 
        r:25, 
        degStart:0, 
        degEnd:360,
        color:'red',
        bgColor:'blue',                
        lineWidth:1,
        direction:1,
        speed:1,
        counterclockwise:false
    };
    var myCircle1 = {
        x:60,
        y:70, 
        r:30, 
        degStart:0, 
        degEnd:360,
        color:'lilac',
        bgColor:'green',                
        lineWidth:2,
        direction:1,
        speed:2,
        counterclockwise:false
    };
    var myCircle2 = {
        x:160,
        y:20, 
        r:10, 
        degStart:0, 
        degEnd:360,
        color:'fuchsia',
        bgColor:'mauve',                
        lineWidth:2,
        direction:1,
        speed:4,
        counterclockwise:false
    };
    var init = function () {
        canvas = document.querySelector('canvas');
        btn1 = document.querySelector('#btn'); 
        fontSize = document.querySelector('#fontSize');
        fontFamily = document.querySelector('#fontFamily');
        fontColor = document.querySelector('#fontColor');
        inputField = document.querySelector('#inputField');
        ctx = canvas.getContext('2d');
        ctx.translate(-0.5, -0.5);
        btn1.addEventListener('click', text);       
        

//        line(10, 50, 50, 50, 1, 'red');
//        raster(10, 1, 'red');
        //run();
        //rect();
//        var optsCircle = {
//            degStart: 90,
//            degEnd: 180
//        };
        //circle(myCircle);
        text();
        initFontSize(8,50,4);
    };
    var initFontSize = function(min, max, steps){
        var opt = document.createElement('option');
        opt.text='12 Pixel';
        opt.value='12 px ';
        fontSize.appendChild(opt);
        for(var i=min; i<=max;i+=steps){
            opt = document.createElement('option');
            opt.text= i + ' Pixel';
            opt.value= i +'px ';
            fontSize.appendChild(opt);
        }
    }
    var text=function(){
        clear();
        ctx.font='32px arial';        
        ctx.fillStyle='steelblue';
        //ctx.strokeStyle='red';
//        ctx.fillText('Sehr gut!', 20,50);
//        ctx.strokeText('Sehr gut!', 20,50);          
//        ctx.strokeText('Sauber!!', 100,150);  
        ctx.fillText('Text Canvas!', 40,50); 
        var fontValue=fontSize.value + fontFamily.value;
        //alert(fontValue);
        ctx.fillStyle=fontColor.value;
        ctx.font=fontValue;
        ctx.fillText(inputField.value,40,200);
        
//        ctx.font=fontValue;
        ctx.fill();
        ctx.stroke();
    };    
        
    var rad = function (deg) {
        return deg * Math.PI / 90;
    };
    var circle = function (c) {
        ctx.beginPath();
        ctx.strokeStyle = c.color;
        ctx.fillStyle = c.bgColor;
        ctx.lineWidth = c.lineWidth;
        //1*Math.PI rad = 180° 
        ctx.arc(c.x, c.y, c.r, rad(c.degStart), rad(c.degEnd), c.counterclockwise);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    };

    var rect = function () {
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'steelblue';
        //           x,  y , w,   h
        ctx.fillRect(10, 20, 100, 50);
        ctx.strokeRect(10, 120, 100, 50);
        ctx.rect(10, 220, 100, 50);
        ctx.fill();
        ctx.stroke();


    };




    var run = function () {
        var loopId = window.requestAnimationFrame(run);
        clear();
        update();
        draw();
    };
    var update = function () {
        myLine.z += myLine.speed * myLine.direction;
        myLine.z1 += myLine.speed1 * myLine.direction1;        
        if (myLine.z > canvas.width || myLine.z < 0) {
            myLine.direction *= -1;
            myLine.color = (myLine.direction === 1) ? 'red' : 'blue';
        }
        if (myLine.z1 > canvas.width || myLine.z1 < 0) {
            myLine.direction1 *= -1;
            myLine.color1 = (myLine.direction1 === 1) ? 'pink' : 'crimson';
        }
        myCircle.x += myCircle.speed * myCircle.direction;
        if ((myCircle.x - myCircle.r < 0) || (myCircle.x + myCircle.r) > canvas.width) {
            myCircle.direction *= -1;
            myCircle.color = (myCircle.direction === 1) ? myCircle.color='red' : myCircle.color='blue';
            myCircle.bgColor = (myCircle.direction === 1) ? myCircle.bgColor='blue' : myCircle.bgColor='orange';
        }
        myCircle1.x += myCircle1.speed * myCircle1.direction;
        myCircle1.y += myCircle1.speed * myCircle1.direction;
        if ((myCircle1.x - myCircle1.r < 0) || (myCircle1.x + myCircle1.r) > canvas.width) {
            myCircle1.direction *= -1;
            myCircle1.color = (myCircle1.direction === 1) ? myCircle1.color='black' : myCircle1.color='yellow';
            myCircle1.bgColor = (myCircle.direction === 1) ? myCircle1.bgColor='gold' : myCircle1.bgColor='silver';
        }
        if ((myCircle1.y - myCircle1.r < 0) || (myCircle1.y + myCircle1.r) > canvas.height) {
            myCircle1.direction *= -1;
            myCircle1.color = (myCircle1.direction === 1) ? myCircle1.color='black' : myCircle1.color='yellow';
            myCircle1.bgColor = (myCircle.direction === 1) ? myCircle1.bgColor='gold' : myCircle1.bgColor='silver';
        }
        myCircle2.x -= myCircle2.speed * myCircle2.direction;
        myCircle2.y -= myCircle2.speed * myCircle2.direction;
        if ((myCircle2.x - myCircle2.r < 0) || (myCircle2.x + myCircle2.r) > canvas.width) {
            myCircle2.direction *= -1;
            myCircle2.color = (myCircle2.direction === 1) ? myCircle2.color='black' : myCircle2.color='yellow';
            myCircle2.bgColor = (myCircle.direction === 1) ? myCircle2.bgColor='gold' : myCircle2.bgColor='silver';
        }
        if ((myCircle2.y - myCircle2.r < 0) || (myCircle2.y + myCircle2.r) > canvas.height) {
            myCircle2.direction *= -1;
            myCircle2.color = (myCircle2.direction === 1) ? myCircle2.color='fuchsia' : myCircle2.color='yellow';
            myCircle2.bgColor = (myCircle.direction === 1) ? myCircle2.bgColor='gold' : myCircle2.bgColor='silver';
        }
        
    };
    var clear = function () {
        ctx.clearRect(0, 0, canvas.width + 1, canvas.height + 1);
    };
    var draw = function () {
        line(myLine.z, 0, myLine.z, canvas.height, 1, myLine.color);
        line(myLine.z1 + 20, 0, myLine.z1 + 20, canvas.height, 2, myLine.color1);
        circle(myCircle);
        circle(myCircle1);
        circle(myCircle2);
    };


    var raster = function (px, w, c) {
        for (var x = 0, max = canvas.width; x < max; x += px) {
            line(x, 0, x, canvas.height, w, c);
        }
        for (var y = 0, max = canvas.height; y < max; y += px) {
            line(0, y, canvas.width, y, w, c);
        }
    };


    var line = function (x1, y1, x2, y2, w, c) {
        ctx.beginPath();
        ctx.lineWidth = w;
        ctx.strokeStyle = c;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
    };

    window.addEventListener('load', init);

})();