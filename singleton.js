var Conf = require('./index')
var config

module.exports = (cfg, forceInitialize) => {
    if (forceInitialize || typeof config === 'undefined') {
        config = new Conf(cfg)
    }

    return config
}
