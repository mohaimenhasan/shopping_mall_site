const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const RentSchema = new Schema({
    name: {type: String, required: true},
    paymentPeriod: {type: Date, required: true},
    paymentVal: {type: Number, required: true},
    amountPaid: {type: Number, required: true},
    updatedBy: {type: String, required: true},
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

RentSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    return next();
});

RentSchema.pre('update', function(next) {
    this.updatedAt = Date.now();
    return next();
});

module.exports = mongoose.model('Rent', RentSchema);