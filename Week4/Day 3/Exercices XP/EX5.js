class Dog {
    constructor(name) {
      this.name = name;
    }
  };
// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};

