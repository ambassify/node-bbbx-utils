/**
 * Respond to a request with an empty GIF
 * @param  {Response} res
 * @return {void}
 */
function gif( res ) {
	var imgHex = '47494638396101000100800000dbdfef00000021f90401000000002c00000000010001000002024401003b';
	var imgBinary = new Buffer(imgHex, 'hex');
	res.writeHead(200, {'Content-Type': 'image/gif' });
	res.end(imgBinary, 'binary');
}

module.exports = gif;