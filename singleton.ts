class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance() {
    if (!this.instance)
      this.instance = new Singleton();
    return this.instance;
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

console.log(s1 === s2)
