const Store = require('../models/store.model');
const Rent = require('../models/rent.model');

exports.update_lease_paid = function(req, res, next){
    try{
        let query = {'name': req.body.storeName};
        let newData = {
            leasePaid: req.body.leasePaid,
            updatedBy: req.body.updatedBy,
            updatedAt: Date.now()
        };
        Store.findOneAndUpdate(query, newData, {upsert: false}, function(err, doc) {
            if (err) throw err;
            res.send('Successfully saved.');
        });
    }catch (e) {
        console.log("Error with updating lease paid");
        console.log(e);
        req.status(400);
        req.send("Could not update lease paid");
    }
};

exports.update_rent_paid = function(req, res, next){
    try{
        let query = {'name': req.body.storeName, 'paymentPeriod': new Date(req.body.date)};
        let newData = {
            amountPaid: req.body.payment,
            updatedBy: req.body.updatedBy,
            updatedAt: Date.now()
        };
        Rent.findOneAndUpdate(query, newData, {upsert: false}, function(err, rent) {
            if (err) throw err;
            res.send('Payment successful');
        });
    }catch (e) {
        console.log("Error with payment processing");
        console.log(e);
        req.status(400);
        req.send("Error with payment processing")
    }
};

exports.create_store = function (req,res, next) {
    try{
        let newstore = {
            name: req.body.storeName,
            leaseStart: req.body.leaseStart,
            leaseEnd: req.body.leaseEnd,
            leaseAmount: req.body.leaseAmount,
            leasePaid: req.body.leasePaid,
            rent: req.body.rent,
            createdBy: req.body.createdBy,
            updatedBy: req.body.createdBy,
            updatedAt: Date.now()
        };
        let query = {'name': req.body.storeName};
        Store.findOneAndUpdate(query, newstore, {upsert: true}, function(err, store){
            if (err) throw err;
            let allRents = create_rents(req.body.leaseStart, req.body.leaseEnd, req.body.storeName, req.body.rent, req.body.createdBy);
            if (allRents.length === 0){
                throw "Problems with creating rents"
            }
            res.status(200);
            res.send("New Store created");
        });
    }catch (e) {
        console.log("Error with creating new store")
        console.log(e);
        req.status(400);
        req.send("Could not create new store")
    }
};

function create_monthly_rent(date, amount, storeName, user) {
    try{
        let query = {'name': storeName, paymentPeriod: date};
        let newrent = {
            name: storeName,
            paymentPeriod: date,
            paymentVal: amount,
            amountPaid: 0,
            updatedBy: user,
            updatedAt: Date.now()
        };
        Rent.findOneAndUpdate(query, newrent, {upsert: true}, function(err, _done_) {
            if (err) throw err;
            return _done_
        });

    }catch (e) {
        console.log("Could not create rent");
        console.log(e);
        return null;
    }
}

function create_rents(start_date, end_date, storeName, amount, username) {
    try{
        let dates = [];

        let start = new Date(start_date);
        let end = new Date(end_date);

        for (let i=start.getMonth(); i <12; ++i){
            dates.push(new Date(start.getFullYear(), i, start.getDate()))
        }

        for (let i=start.getFullYear()+1; i < end.getFullYear(); ++i){
            for (let j=0; j <=12; ++j){
                dates.push(new Date(i,j, start.getDate()))
            }
        }

        for (let i=1; i < end.getMonth(); ++i){
            dates.push(new Date(end.getFullYear(), i, start.getDate()))
        }

        for (let i=0; i < dates.length; ++i){
            let rent = create_monthly_rent(dates[i], amount, storeName, username)
            if (rent === null){
                throw "could not create rent"
            }
        }

        return dates;

    }catch (e) {
        console.log("Error with creating rent values")
        console.log(e);
        return []
    }
}