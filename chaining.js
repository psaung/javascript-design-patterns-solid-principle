// language like javascript and ruby implicitly return something at the end of the function 
var Calc = function(start) {	
	this.add =	function(x) {
		start = start + x;		
		return this;
	};

	this.multiply = function(x) {
		start = start * x;
		return this;
	};

	this.equals = function(callback) {
		callback(start);
		return this;
	};
}

// module system will implicitly declare the closure scope 
// module export will also publically tell your Calc function  to other script and can access that module
module.exports = Calc;

module.exports = {
	add: function(x,y){
		return new Calc(x).add(y || 0);
	},
	multiply: function(x,y) {
		return new Calc(x).multiply( y || 1);
	}
};

/*new Calc(0)
	.add(1)
	.add(2)
	.multiply(3)
	.equals(function(result){
		console.log(result);
	});
*/