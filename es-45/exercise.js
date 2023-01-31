function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

const smartphone = new Smartphone("Apple", "SE", 1300);
console.log(smartphone);
