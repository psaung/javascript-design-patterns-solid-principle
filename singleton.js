var Singleton = function() {
  if(Singleton.__instance__) {
    return Singleton.__instance__;
  }
  Singleton.__instance__ = this;
  this.inlineProperty = {};
};

Singleton.prototype.setProperty = function(match, fn) {
  this.inlineProperty[match] = fn;
};

var obj1 = new Singleton();
var obj2 = new Singleton();

obj1.setProperty('a', function(){
  console.log('hi');
});

obj1.inlineProperty['a']();
obj2.inlineProperty['a']();