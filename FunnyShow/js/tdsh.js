infi.onclick = function(e){
	location.href='mvinf.html'
}

var stars=document.querySelectorAll('.stars span');
	var info=document.querySelector('.info');
	var grades = ["极差","差","一般","良好","优秀"];
	var active=-1;   //记录当前点击的是哪颗星星
 
	for(var i=0;i<stars.length;i++){
		stars[i].index=i;
		stars[i].onmouseover=function(){setStar(this.index);};
		stars[i].onmouseout=function(){setStar(active);};
		stars[i].onclick=setClick;
	}
 
	function setStar(nub){
		var name='';
		name= nub<2?'show':'show2';
		for(var i=0;i<stars.length;i++){
			stars[i].className= i<=nub?name:'';
		}
		info.style.display= nub<0? 'none':'block';
		info.innerHTML=grades[nub];
	}
 
	function setClick(){
		active=this.index;
	}

var btn = document.getElementsByClassName('bnt')[0]
var spread = document.getElementById('spread')
var iSpread = false
/*高度*/
var height = spread.scrollHeight
/*总时间*/
var time = 420;
/*间隔*/
var interval = 8.4
/*速度*/
var speed = height/(time/interval)
/*点击事件*/
// btn.onclick = function (e) {
//     btn.disabled = 'disabled';
//     if(!iSpread){
//         var speeds = 0
//         var timer = setInterval(function () {
//             speeds += speed
//             spread.style.height = speeds + 'px'
//
//             if(parseInt(spread.style.height) >=height){
//                 clearTimeout(timer)
//                 btn.disabled = ''
//             }
//         },interval)
//         this.innerHTML = '收起'
//     }else {
//         var speeds = height
//         this.innerHTML = '展开'
//         var timer = setInterval(function () {
//             speeds -= speed
//             spread.style.height = speeds + 'px'
//             if(speeds <= 0){
//                 clearTimeout(timer)
//                 btn.disabled = ''
//             }
//         },interval)
//     }
//     iSpread = !iSpread
// }