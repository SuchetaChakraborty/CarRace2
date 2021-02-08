var ball;
var database;
var form;
var player;
var game;
var gameState= 0, playerCount = 0;

function setup(){
    createCanvas(500,500); 
    database = firebase.database();
    console.log(database);
    
     game = new Game();
     game.getState();
     console.log("hi")
     game.start();
  
  
}



function draw(){
    background("white");
   
}


