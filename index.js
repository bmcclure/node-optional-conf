const Conf = require('conf')

class OptionalConf extends Conf {
    constructor(opts) {
        super(opts)
        this.persist = typeof opts.persist !== 'undefined' 
            ? opts.persist 
            : true
        this.tempStore = {}
    }

    get store() {
        if (this.persist) {
            try {
                return Object.assign(obj(), JSON.parse(fs.readFileSync(this.path, 'utf8')));
            } catch (err) {
                if (err.code === 'ENOENT') {
                    makeDir.sync(path.dirname(this.path));
                    return obj();
                }

                if (err.name === 'SyntaxError') {
                    return obj();
                }

                throw err;
            }
        } else {
            return this.tempStore
        }
		
	}
	set store(val) {
        if (this.persist) {
            // Ensure the directory exists as it could have been deleted in the meantime
            makeDir.sync(path.dirname(this.path));

            fs.writeFileSync(this.path, JSON.stringify(val, null, '\t'));
        } else {
            this.tempStore = val
        }
	}
}

module.exports = OptionalConf
