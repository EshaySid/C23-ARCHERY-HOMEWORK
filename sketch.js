const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var pb,p;
var cb,cp;
//pb=playerbase object, p=player object;
//cb=computerbase object, cp= computer player object;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  pb= new PlayerBase(300,random(450-300),180,150);
  cb= new ComputerBase(500,random(450-300),180,150);

  p = new Player(285,PlayerBase.body.position.y-153,50,180);
  cp = new ComputerPlayer(485,computerPlayer.body.position.y-153,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    PlayerBase.display();
    ComputerBase.display();


   //display Player and computerplayer
  Player.display();
  ComputerPlayer.display();

}
