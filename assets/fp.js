var fp = fp || {};

fp.list = [];
fp.arr = fp.colorgen();

fp.arr.forEach( function(el, i) {
   var obj = {};
   obj.id = i;
   obj.color = el;
   fp.list.push(obj);
})

fp.collection = new fp.Tiles(fp.list);
new fp.TilesView(fp.collection);