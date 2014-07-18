var q = require('q'),
	_ = require('lodash-node');

function later( fn ) {
	var defer = q.defer(),
		promise = defer.promise;

	var f = function() {
		defer.resolve(fn());
	};

	// Make a promise of f
	_.forIn(promise,function(i, k){
		f[k] = i.bind(promise);
	});

	return f;
}

module.exports = later;