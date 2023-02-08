interface IFlyBehaviour {
  fly: () => void;
}

class Duck {
  flyBehaviour: IFlyBehaviour;

  constructor(flyBehaviour?: IFlyBehaviour) {
    this.flyBehaviour = flyBehaviour;
  }

  fly() {
    if (!this.flyBehaviour)
      throw Error("no fly behaviour assigned");
    this.flyBehaviour.fly();
  }
}

class FlyHigh implements IFlyBehaviour {
  fly() {
    console.log("I'M FLYING SUPER HIIIIIGH");
  }
}

class NoFly implements IFlyBehaviour {
  fly() {
    console.log("I'm afraid I can't fly...");
  }
}

class Mallard extends Duck {
  flyBehaviour = new FlyHigh();
}

class RubberDuck extends Duck {
  flyBehaviour = new NoFly();
}

const mallard: Duck = new Mallard();
const rubberDuck: Duck = new RubberDuck();

mallard.fly();
rubberDuck.fly();

const duck: Duck = new Duck(new FlyHigh());
duck.fly();
