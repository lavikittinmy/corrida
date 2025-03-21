function setup() {
    createCanvas(400, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    background('purple');  
    fill ('pink')
    textSize(40);
    text("🐏", xJogador1, 100);
    text("🐑", xJogador2, 300);
    rect(350, 0, 10, 400);
    xJogador1 += random(6);
    xJogador2 += random(2);
  
  }
  