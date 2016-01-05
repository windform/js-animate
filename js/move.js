function startMove(obj,attr,iTarget){
	clearInterval(obj.timer);
	//oDiv=document.getElementById("div1");
	obj.timer=setInterval(function(){
		var icur=0;
		if(attr='opacity'){
			icur=parseFloat(getStyle(obj,attr))*100;
			}else{
				icur=parseInt(getStyle(obj,attr));
				}
		var speed=0;
		if(icur>iTarget){
			speed=-10;
			}else{
				speed=10;
				}
		if(icur==iTarget){
			clearInterval(obj.timer);
			}else{
				if(attr='opacity'){
					obj.style.filter='alpha(opacity:'+(icur+speed)+')';
					obj.style[attr]=(icur+speed)/100;
					}else{
						obj.style[attr]=icur+speed+'px';
						}
				//obj.alpha+=speed;
				//obj.style.filter='alpha(opacity:'+parseInt(getStyle(obj,attr))+')';
//				obj.style[attr]=parseInt(getStyle(obj,attr))/100;
				}
	
		},30)
	}
	
function getStyle(obj,attr){
	//currentStyle是针对IE浏览器获取样式
	//getComputedStyle是针对火狐浏览器获取样式
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
			}
	
}