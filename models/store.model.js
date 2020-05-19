const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let StoreSchema = new Schema({
    name: {type: String, required: true, index: { unique: true }},
    leaseStart: { type: Date, required: true, default: Date.now },
    leaseEnd: {type: Date, required: true, default: Date.now()},
    leaseAmount: {type: Number, required: true},
    leasePaid: {type: Number, required: true},
    rent: {type: Number},
    createdBy: {type: String, required: true},
    updatedBy: {type: String, required: true},
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

StoreSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    return next();
});

module.exports = mongoose.model('Store', StoreSchema);