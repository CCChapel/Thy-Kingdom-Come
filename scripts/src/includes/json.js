/**
 * Turns a JSON object into a query string
 * 
 * @obj = the object to turn into a query string
 * 
 * RETURNS a string useful as a query
 */
JSON.toQueryString = function(obj) {
    var str = '';

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var temp = "{0}={1}&";
            str += temp.format([key, obj[key]]);
        }
    }

    if (str.endsWith("&")) {
        var length = str.length;

        str = str.substring(0, length - 1);
    }

    return str;
}