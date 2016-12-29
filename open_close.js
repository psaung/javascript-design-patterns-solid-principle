var Order = function() {
  this._orderlist = [];
  this._total = 0;
};

Order.prototype._addItem = function(item) {
  this._orderlist.push(item);
};

Order.prototype._removeItem = function(item) {
  this._orderlist.splice(this._orderlist.indexOf(item),1);
};

Order.prototype._itemCount = function() {
  return this._orderlist.length;
};

Order.prototype._getTotal = function() {
  return this._orderlist.map(function(order) {
    return order.price;
  }).reduce(function(next, price) {
    return next + price;
  }, 0);
};

var FlexibleOrder = function() {  
  Order.apply(this);
};

FlexibleOrder.prototype = Order.prototype;
FlexibleOrder.prototype._credit = 0;
FlexibleOrder.prototype._getCredit = function() {
  return this._credit;
};
FlexibleOrder.prototype._addItemWithCredit = function(item, credit) {   
  this._credit += credit;
  this._addItem(item);
};
FlexibleOrder.prototype._getTotalWithCredit = function() {
  return this._getTotal() - this._credit;
};

var ABC = new Order();

ABC._addItem({
  name: 'alpine',
  price: 22.25
});

ABC._addItem({
  name: 'designer_water',
  price: 35.25
});

var creditItem = {
  name: 'Johnny Walker',
  price: 26.80
};

console.log(ABC._itemCount());
ABC._addItemWithCredit(creditItem, 12.00);
console.log(ABC._getCredit());
console.log(ABC._getTotal());
console.log(ABC._getTotalWithCredit());