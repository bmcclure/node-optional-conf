var Conf = require('./index')
var config

module.exports = (cfg, defaults) => {
    if (typeof cfg !== 'undefined' || typeof config === 'undefined') {
        config = new Conf(Object.assign(defaults || {}, cfg))
    }

    return config
}
