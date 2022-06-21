function animate(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
    var stmp=(target-obj.offsetLeft) / 10;
    stmp=stmp>0?Math.ceil(stmp):Math.floor(stmp);
    if(obj.offsetLeft==target){
        clearInterval(obj.timer);
        if (callback){
            callback();
        }
    }
    
    obj.style.left=obj.offsetLeft+stmp+'px';
 }, 15);
 }