const Compute = require('@google-cloud/compute');
const Zone = require('@google-cloud/compute/src/zone');

let instance;

exports.initialize = () => {
    const compute = new Compute();
    const zone = compute.zone('asia-southeast2-a');
    instance = zone;

    return zone;
}

/**
 * @returns {Zone}
 */
exports.getInstance = () => instance ? instance : this.initialize();

module.exports = exports;
