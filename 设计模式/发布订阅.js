function supermarket(name) {
  var _customer = [];
  var _shopping = [];
  var _name = name;
  supermarket.prototype.registerCustomer = function (customer) {
    _customer.push(customer);
  };
  supermarket.prototype.addShopping = function (shopping) {
    _shopping = [..._shopping, shopping];
    _shopping.forEach((v, i) => {
      _customer.forEach((c) => {
        if (c.get_all_shopping().findIndex((s) => v.name === s.name)!==-1) {
          c.update(v);
        }
      });
    });
  };
  supermarket.prototype.get_all_customer = function () {
    return _customer;
  };
  supermarket.prototype.get_all_shopping = function () {
    return _shopping;
  };
}
function customer(name, phone, shopping) {
  var _shopping = [];
  var _name = name;
  customer.prototype.update = function (shopping) {
    console.log(
      _name,
      "你关注的商品:",
      shopping,
      "商家已经添货了;请尽快购买"
    );
  };
  customer.prototype.get_all_shopping = function () {
    return _shopping;
  };
  customer.prototype.addShopping = function (shopping) {
    _shopping = [..._shopping, shopping];
  };
}
function shopping(name, price, num = 1) {
  this.name = name;
  this.num = num;
  this.price = price;
}
var s = new supermarket("三只松鼠专卖店");
var c = new customer("lisi", "123456");
var sp = new shopping("卫龙辣条", 12.5);
s.registerCustomer(c)
c.addShopping(sp);
s.addShopping(sp);
s.addShopping(new shopping("卤蛋",4.5))