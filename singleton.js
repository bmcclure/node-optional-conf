var Conf = require('./index')
var config

module.exports = (cfg) => {
    if (typeof cfg !== 'undefined') {
        config = new Conf(cfg)
    } else if (typeof config === 'undefined') {
        config = new Conf()
    }

    return config
}
