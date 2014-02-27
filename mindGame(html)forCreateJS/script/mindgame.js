//var background;
var stage;
var gameCanvas;
var ctx;
var output;
var background;
var BackGrounds=new Array();  
var bg_index=0;
var Options=new Array();
var Answers=new Array();
var AnswersPosition=new Array();

var background_change_speed=0.03;
var gameState="start";
var textBox1;
var isChange=false;
var targetBG_index_switchTo=1;
var mousePosition={x:-100,y:-100};
var AnswerSelected=1;
var OPTION_HITAREA_ALPHA=0;
var response;
var stage=1;
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}
function Position(x,Y){
    this.X=x;
    this.Y=Y;
}
function textBox()
{
	this.output=stage.addChild(new createjs.Text("","18px monospace","#000"));
    this.output.lineHeight=15;
    this.output.lineWidth=200;
    this.output.textBaseline="top";
    this.output.x=10;
    this.output.y=10;
    this.output.text="this is textBox1";
}
function BackGround(file)
{
    this.Bitmap=new createjs.Bitmap(file);
    this.Bitmap.scaleX=0.5;
    this.Bitmap.scaleY=0.5;
    this.hitArea=new createjs.Shape();
    //this.bg_index=1;
}
function init(){
	//code here
	//background=new Image();
	//background.src="Images/BackGrounds/bg-01.png";
	$("#gameCanvas").click(function(){
		//$(this).hide();
        if(BackGrounds[bg_index].Bitmap.alpha>=1){
             isChange=true;
          targetBG_index_switchTo++;
        }
         
         
         
	});
   
    stage=new createjs.Stage("gameCanvas");
    
    for(var i=0;i<7;i++){
        var j=i+1;
         BackGrounds[i]=new BackGround("Images/BackGrounds/bg-0"+j+".png");
         BackGrounds[i].Bitmap.visible=false;
         BackGrounds[i].Bitmap.alpha=0.2;
         stage.addChild(BackGrounds[i].Bitmap);
    }

    //选择项初始化
    for(var i=0;i<4;i++){
        Options[i]=new BackGround("Images/Options/"+i+".png");
        Options[i].Bitmap.visible=false;
        stage.addChild(Options[i].Bitmap);
    }
     //Options[0].hitArea=new createjs.Shape();
     Options[0].hitArea.graphics.beginFill("#32ee23").drawRect(25,25,210,160);
     Options[0].hitArea.alpha=OPTION_HITAREA_ALPHA;
     stage.addChild( Options[0].hitArea);

     //Options[1].hitArea=new createjs.Shape();
     Options[1].hitArea.graphics.beginFill("#ee2223").drawRect(250,25,210,160);
     Options[1].hitArea.alpha=OPTION_HITAREA_ALPHA;
     stage.addChild( Options[1].hitArea);

     //Options[2].hitArea=new createjs.Shape();
     Options[2].hitArea.graphics.beginFill("#222223").drawRect(25,195,210,160);
     Options[2].hitArea.alpha=OPTION_HITAREA_ALPHA;
     stage.addChild( Options[2].hitArea);

     //Options[3].hitArea=new createjs.Shape();
     Options[3].hitArea.graphics.beginFill("#2222ee").drawRect(250,195,210,160);
     Options[3].hitArea.alpha=OPTION_HITAREA_ALPHA;
     stage.addChild( Options[3].hitArea);

      for(var i=0;i<4;i++){
        Answers[i]=new BackGround("Images/Ans/1/"+i+".png");
         Answers[i].Bitmap.visible=false;
        stage.addChild( Answers[i].Bitmap);
    }
    AnswersPosition[0]=new Position(25,25);
    AnswersPosition[1]=new Position(250,25);
    AnswersPosition[2]=new Position(25,195);
    AnswersPosition[3]=new Position(250,195);
   

    //Options[0].Bitmap.hitArea=optionA_hitArea;
    $("#gameCanvas").bind('mousemove',function(e){ 
        
         mousePosition.x=e.pageX;
         mousePosition.y=e.pageY;
         
     });
   // Options[0].Bitmap.hitArea=new createjs.
     BackGrounds[0].Bitmap.visible=true;
     BackGrounds[0].Bitmap.alpha=1;
    createjs.Ticker.addEventListener("tick",gameUpdate);
    //createjs.Ticker.setInterval(30);
    createjs.Ticker.setFPS(40);
    //stage.update();
    //var ME=new createjs.MouseEvent(click,0,0,gameCanvas,)
    //UI code
    output=stage.addChild(new createjs.Text("","18px monospace","#000"));
    output.lineHeight=15;
    output.lineWidth=100;
    output.textBaseline="top";
    output.x=stage.canvas.width-output.lineWidth-10;
    output.y=20;

    textBox1=new textBox();


}
function gameUpdate(){
	stage.update();
    backGroundUpdate();
	output.text="FPS:"+createjs.Ticker.getFPS()+"\n"+"bg_index:"+bg_index.toString();
    //+background.bg_index.tostring();
    $("#mouseposition").text("e.pageX: " + mousePosition.x + ", e.pageY: " + mousePosition.y+",isHit:");
    $("#gamestate").text("gamestate:"+gameState)
    switch(gameState)
    {
        case "start":
        
           if(bg_index===3){
             gameState="choose"; 
             var AnsPosition_fresh=new Array();
              while(true)
              {
                while(true)
                {
                    var a=Math.floor(Math.random()*4);
                    if(!AnsPosition_fresh.contains(a))
                    {
                        AnsPosition_fresh.push(a);
                        break;
                    }

                }
                 if (AnsPosition_fresh.length >= 4)break;
                    
              }
                   Answers[0].Bitmap.x=AnswersPosition[AnsPosition_fresh[0]].X;Answers[0].Bitmap.y=AnswersPosition[AnsPosition_fresh[0]].Y;
                   Answers[1].Bitmap.x=AnswersPosition[AnsPosition_fresh[1]].X;Answers[1].Bitmap.y =AnswersPosition[AnsPosition_fresh[1]].Y;
                   Answers[2].Bitmap.x=AnswersPosition[AnsPosition_fresh[2]].X;Answers[2].Bitmap.y=AnswersPosition[AnsPosition_fresh[2]].Y;
                   Answers[3].Bitmap.x=AnswersPosition[AnsPosition_fresh[3]].X;Answers[3].Bitmap.y=AnswersPosition[AnsPosition_fresh[3]].Y;
             
             for(var i in Answers)
             {
                Answers[i].Bitmap.visible=true;
                Answers[i].hitArea.graphics.beginFill("#ee2223").drawRect(Answers[i].Bitmap.x,Answers[i].Bitmap.y,210,160);
                //stage.addChild(Answers[i].hitArea);
             }   
            }        
        break;

        case "choose":
            textBox1.output.text="isChange:"+isChange;
            for( var i in Options)
              {
                  if( Options[i].hitArea.hitTest(mousePosition.x,mousePosition.y))
                   {
                             Options[i].Bitmap.visible=true;
                    }else{
                             Options[i].Bitmap.visible=false;
                         }
                         if(bg_index!==3){
                              //gameState="response";
                              Options[i].Bitmap.visible=false;
                              for(var i in Answers)
                              {
                                Answers[i].Bitmap.visible=false;
                                if(Answers[i].hitArea.hitTest(mousePosition.x,mousePosition.y))
                                {
                                gameState="response";
                                 
                                 response=new BackGround("Images/Contents/"+stage+"/Cont_1"+i.tostring()+Math.floor(Math.random()*4+1).tostring()+".png");
                                 stage.addChild(response.Bitmap);
                                }
               
            
           
         
                              } 
                          }
              }
         
         
         
        break;

        case "response":

        break;
        case "result":
        break;
        case "tryAgain":
        break;
        case "gameOver":
        break;
        default:
        textBox1.output.text="rrr";
        
    }
}
function backGroundUpdate()
{
    if(isChange==true)
    {
        //isChange=false;
        if(BackGrounds[bg_index].Bitmap.visible==true)
        {
               BackGrounds[bg_index].Bitmap.alpha-=background_change_speed;
        }
     
        if(BackGrounds[bg_index].Bitmap.alpha<=0.2)
        {
            BackGrounds[bg_index].Bitmap.visible=false;
            BackGrounds[targetBG_index_switchTo].Bitmap.visible=true;
            BackGrounds[targetBG_index_switchTo].Bitmap.alpha+=background_change_speed;
            if(BackGrounds[targetBG_index_switchTo].Bitmap.alpha>=1)
            {
                isChange=false;
                bg_index=targetBG_index_switchTo;
            }
        }
    }
}