//
this.juerryjs=this.juerryjs||{};
(function(){
  var getContextById=function(id){
    if(typeof id =="string"){ 
      console.log("id is a string");   
      var ctx=document.getElementById(id).getContext("2d");
      return ctx;
    }
    else{
    	console.log("id is not astring,please set canvas id correct!");   
      return;
    }
  } 
  juerryjs.getContextById=getContextById;

  var Sprite=function(imageURL){
    var image=new Image();
    image.src="images/"+imageURL+".png";
    return image;
    
  }
  juerryjs.Sprite=Sprite;
}());

