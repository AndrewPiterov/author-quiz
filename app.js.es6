class FlashMessage{
  constructor(message){
    this.message = message;
  }

  display(){
    alert(this.message);
  }
}

let m = new FlashMessage("Hello ES2015");
m.display();