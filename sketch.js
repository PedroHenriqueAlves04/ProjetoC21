var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui
    music = loadMusic("music.mp3");
}

function setup(){
    tela = createSprite(1200,800);

    bloco1 = createSprite(50,385,100,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(350,385,100,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(150,385,130,30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(260,385,100,30);
    bloco4.shapeColor = "red";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 4;
    bola.velocityY = 4;
}

function draw() {
    background(rgb(169,169,169));
  

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 0;
        bola.velocityY = 0;
        //escreva o código para parar a música
        
    }

    //escreva o código de ricochete de bola para bloco3
     if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
         bola.shapeColor = "green"
     }
    //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
       bola.shapeColor = "red";
       
      
    }
    drawSprites();
}