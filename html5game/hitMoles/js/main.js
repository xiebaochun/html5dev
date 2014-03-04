window.onload=function(){

   setInterval(Update,16);
   setInterval(Draw,16);
   var context=juerryjs.getContextById("gameCanvas");
   var background=juerryjs.Sprite("bg1");
    //game main update
   function Update(){
      
   }
   //game draw
   function Draw(){
      context.drawImage(background, 0, 0,background.width,background.height,0,0,background.width,background.height);
      context.drawImage(background, 0, 0,background.width,background.height,200,0,background.width,background.height);
   }
};