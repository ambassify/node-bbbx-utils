var uri = {
    parse: function (string) {
        var argsParsed = {};
        if (string === '') {
            return argsParsed;
        }
        var vars = string.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            argsParsed[pair[0]] = decodeURIComponent(pair[1]).replace(/\+/g, ' ');
        }
        return argsParsed;
    },
    stringify: function( obj ) {
        var query = [];
        for(var key in obj) {
            query.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return query.join('&');
    }
};

module.exports = uri;
