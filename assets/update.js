var fp = fp || {};

fp.update = function() {
	fp.list = [];
	fp.arr = fp.colorgen();

	fp.arr.forEach( function(el, i) {
		var obj = {};
		obj.id = i;
		obj.color = el;
		fp.list.push(obj);
	})
};