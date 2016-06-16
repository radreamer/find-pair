var fp = fp || {};

fp.colorgen = function() { 
	var arr = [],
		cloneArr = [],
		newArr = [],
		i,
		j,
		l,
		x;

	for ( i = 0; i < 8; i++) {
		arr[i] = 'rgb(' + Math.round(Math.random() * 256) + ', ' + Math.round(Math.random() * 256) + ', ' + Math.round(Math.random() * 256) + ')';
	}

	cloneArr = arr;
	arr = cloneArr.concat(arr);

	l = arr.length;

	for ( j = 0; j < l; j++ ) {

		do {
			x = Math.floor( Math.random() * 16);
		} while (typeof newArr[x] !== 'undefined');

		newArr[x] = arr[j];
	}

	return newArr;
}

fp.currentColor = '';