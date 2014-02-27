var curIndex =0;
var time = 400;
var slideTime = 5000;
var adTxt = $("#banner_img>li>div>.ad_txt");
//var adImg = $("#banner_img>li>div>.ad_img");
var adImg = $("#banner_img>li>div>.ad_img");
//var int1 = setInterval("autoSlide()", slideTime);
var currentIndex=0;
var isAnimationOver=false;
var time1=0;
var isMouseOver=false;
var timeUpdate=setInterval(timeUpdate,250);
var isStart=false;
function timeUpdate(){
    
    if(isMouseOver==true){  
         time1=0;
         isMouseOver=false;
         isStart=true;
     }

     if(isStart==true){
    time1++;
    if(time1>1)
    {
        time1=0
        isAnimationOver=true;
        isStart=false;
    }
}

    if(isAnimationOver==true){
        isAnimationOver=false;
        
        setTimeout(function(){     
         show(currentIndex);
         // window.clearInterval(int);
         
        },400);
      
    
     }
}
//调用show()方法实现鼠标移入触发效果
$("#banner_ctr>ul>li").mouseover(function () {
	var _this=$(this);
     currentIndex=_this.index("#banner_ctr>ul>li");
    isMouseOver=true;
    // trigger=setTimeout(function(){     
    //      show(currentIndex);
    //      // window.clearInterval(int);
         
    //     },400);

});

//调用show()方法实现滑块自动移动效果
function autoSlide(){
    
   //console.log(curIndex);
   
	
	// ++curIndex;
     currentIndex++;
    if(currentIndex>6){
      currentIndex=0;
    }
    isMouseOver=true;
}
//实现方法
function show(index) {
    $.easing.def = "easeOutQuad";
    $("#drag_ctr,#drag_arrow").stop(false, true).animate({ left: index * 115 + 40 }, 300);
    $("#banner_img>li").eq(curIndex).stop(false,true).fadeOut(time);
    adTxt.eq(curIndex).stop(false,true).animate({ top: "340px" }, time);
    adImg.eq(curIndex).stop(false,true).animate({ right: "120px" }, time);
    setTimeout(function () {
        $("#banner_img>li").eq(index).stop(false,true).fadeIn(time);
        adTxt.eq(index).children("p").css({ paddingTop: "50px", paddingBottom: "50px" }).stop(false,true).animate({ paddingTop: "0", paddingBottom: "0" }, time);
        adTxt.eq(index).css({ top: "0", opacity: "0" }).stop(false,true).animate({ top: "170px", opacity: "1" }, time);
        adImg.eq(index).css({ right: "-50px", opacity: "0" }).stop(false,true).animate({ right: "10px", opacity: "1" }, time);
        console.log(index);
    }, 200)
    curIndex = index;
}