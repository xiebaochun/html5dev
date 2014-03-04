var juerryjs=juerryjs||{};
juerryjs.keys={};
(function(){
	var keys={};
 window.onkeydown=function(e){
        	switch(e.keyCode){
            case 37:
               keys.leftArrowKeyState="down"; 
               ///console.log("leftArrowKey down");
               break;
            case 38:
               keys.upArrowKeyState="down";
               break;
            case 39:
               keys.rightArrowKeyState="down";
               break;
            case 40:
               keys.downArrowKeyState="down";
               break;
            }
           juerryjs.keys=keys;
        }
        
   


}());