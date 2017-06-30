const Conf = require('conf')


class OptionalConf extends Conf {
    constructor(opts) {
        this.persist = typeof opts.persist !== 'undefined' 
            ? opts.persist 
            : true
        
        super(opts)

        this.tempStore = {}
    }

    get store() {
        return this.persist
            ? super()
            : this.tempStore
    }

    set store(val) {
        if (this.persist) {
            super(val)
        } else {
            this.tempStore = val
        }
    }
}
