function parseQueryString( query ) {
	var result = {},
		re = /([^&=]+)=([^&]*)/g, m;

	while (m = re.exec( query )) {
		result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
	}

	return result;
}

module.exports = parseQueryString;