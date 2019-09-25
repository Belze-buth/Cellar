export class Bottle {

  constructor(public name: String, public price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

export class Cellar {
  ArrayBottles: Bottle[] = [];
  id: number;

  constructor(public name: String) {
    this.name = name;
    this.id=Math.round(Math.random()*1000);
  }

  addBottle(name: String, price: number) {
    let b=new Bottle(name,price);
    //this.ArrayBottles[Bottle.length-1].name=name;
    //this.ArrayBottles[Bottle.length-1].price=price;
    this.ArrayBottles[this.ArrayBottles.length]=b;
  }

  getAllBottle() {
    return this.ArrayBottles;
      }

  getBottle(name: String) {
    let i:number;
    for ( i=0 ; i<this.ArrayBottles.length ; i++) {
      if(this.ArrayBottles[i].name === name) {
        return this.ArrayBottles[i];
    }
  }
  }

  calculSomme() {
    var sum = 0;
    for (var i = 0; i < this.ArrayBottles.length; i++) {
      sum += this.ArrayBottles[i].getPrice();
    }
    return sum;
  }
}

let c1 = new Cellar("c1");
console.log(c1.getBottle("c1"));
c1.addBottle("c1", 10);
c1.addBottle("c2", 20);
console.log(c1.calculSomme());