module.exports = {
  number: function(value, prefix) {
    prefix = prefix || ''
    var SUFFIXES = ["", "K", "M", "B","T"]
    var suffixIndex = Math.floor(("" + value).length / 3)
    var newValue = ''
    var tmpValue = ''

    for (var precision = 3; precision >= 1; precision--) {
      tmpValue = parseFloat((suffixIndex !== 0 ? (value / Math.pow(1000, suffixIndex)) : value).toPrecision(precision));
      if ((tmpValue + '').replace(/[^a-zA-Z 0-9]+/g,'').length < 3) { break }
    }

    // always return an integer
    if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
    newValue = shortValue + SUFFIXES[suffixIndex];

    return prefix ? prefix + newValue : newValue
  },

  bytes: function(bytes, precision) {
    if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
    if (typeof precision === 'undefined') precision = 1;

    var UNITS = ['MB', 'GB', 'TB', 'PB'],
    number = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
  }
}