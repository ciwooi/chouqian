new Image().src="decode.png";
new Image().src="234.png";
var start, showDecode, jumpToDecode, lastTime, lastAcc, isStarted = false;

start = function() {
	isStarted = true;
	$('.decode').hide();
	$('.result').show();
	setTimeout(showDecode, 3000);
}

showDecode = function(){
	$('.result').hide();
	$('.decode').show();
	setTimeout(jumpToDecode, 3000);

}

jumpToDecode = function(){
	var mk=Math.floor(Math.random()*19+1);
	console.log(mk);
	// var jumpTo = urls[parseInt(Math.random() * urls.length)];
	// window.location = jumpTo;
	$('#insd').css("background-image","url(../qianwen/"+mk+".jpg)")
}

$('.do').click(start);

//摇一摇
		var seep=50;
		var x=y=lastx=lasty=0;
		navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.msVibrate;
		//记录一下最开始的值；
		window.addEventListener('devicemotion',function (event){
			var data=event.accelerationIncludingGravity;
			x=data.x;
			y=data.y;
			if(Math.floor(x-lastx)>seep||Math.floor(y-lasty)>seep){
				navigator.vibrate(500)//震动1秒
				setTimeout(start,1000)	
			}
			lastx=x;
			lasty=y;
		},false)
// $(window).on('deviceorientation', function(e) {
// 	if (isStarted) {
// 		return true;
// 	}
// 	if (!lastAcc) {
// 		lastAcc = e;
// 		return true;
// 	}
// 	var speed = e.alpha + e.beta + e.gamma - lastAcc.alpha - lastAcc.beta - lastAcc.gamma;
// 	if (Math.abs(speed) > 50) {
// 		navigator.vibrate(500)//震动1秒
// 		start();
// 	}
// 	lastAcc = e;
// });

