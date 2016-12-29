function Book() {
	var name = '';
	Object.defineProperty(this,'name',{
		get: function() {
			return name;
		},
		set: function(val) {
			console.log(val);
			name = val;
		}
	});
}