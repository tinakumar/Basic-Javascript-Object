function Sew(fabric, supply, hue, amount) {
  this.fabric = fabric;
  this.supply = supply;
  this.hue = hue;
  this.amount = amount
}

Sew.prototype.toString = function() {
  return "I made this beautiful " + this.hue + " " + this.fabric + " masterpiece with only " +  this.amount + " of stunning material and a " + this.supply;
};

var dress = new Sew("rayon", "sewing machine", "red", "3 yards");
var shirt = new Sew("cotton", "thread", "blue", "2 yards");
var pants = new Sew("microfiber", "pattern", "green", "5 yards")

console.log(dress.toString());




