class Dice{
  launch(){
    let face = Math.ceil(Math.random()*6);
    if(face == 1){
      return 3;
    } else if(face <= 3){
      return 1;
    }else if(face <= 6){
      return 2;
    }
    
  }
}

class Chalenger{
  constructor(name){
    this.name = name;
    this.position = 0;
    this.dice = new Dice;
  }
  
 run(){
    return this.position += this.dice.launch();
  }
  
}

let c1 = new Chalenger('Dominic');
let c2 = new Chalenger('Paul');

do{
  c1.run();
  console.log(`${c1.name} se encuentra en la posicion número: ${c1.position}`);
  c2.run();
  console.log(`${c2.name} se encuentra en la posicion número: ${c2.position}`);
  
} while (c1.position < 100 && c2.position < 100);

 if(c1.position >= 100 && c2.position >= 100){
    console.log('Empate');
  } else if (c1.position >= 100){
    console.log(`${c1.name} a ganado la carrera!!`);
  } else if (c2.position >= 100){
    console.log(`${c2.name} a ganado la carrera!!`);
  };


