var q = require('q'),
	_ = require('lodash');

/**
 * Later wraps functions and exposes a promise API
 * powered by Q.
 *
 * As soon as the callback returns the promise is resolved,
 * this allows you to create a callback and pass it on
 * futher down the live without having to worry about
 * resolving it.
 *
 * @param  {Function} fn
 * @return {Promise}
 */
function later( fn ) {
	var defer = q.defer(),
		promise = defer.promise;

	var f = function(r) {
		try {
			defer.resolve( fn ? fn.apply(null,arguments) : r );
		} catch( err ) {
			defer.reject( err );
		}
	};

	// Make a promise of f
	_.forIn(promise,function(i, k){
		if( _.isFunction(i) )
			f[k] = i.bind(promise);
	});

	return f;
}

module.exports = later;

/*
A small example

function delayedResponse() {
	var f = later(function(){
		return 10;
	})

	// f is a callback
	setTimeout(f, 2000);

	// f has the promise API as well.
	return f;
}

delayedResponse().then(function(result){
	// result will be 10
	console.log(result);
})

 */