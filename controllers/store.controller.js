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
        res.status(400);
        res.send("Could not update lease paid");
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
        res.status(400);
        res.send("Error with payment processing")
    }
};

exports.create_store = function (req,res, next) {
    try{
        let newstore = new Store({
            name: req.body.storeName,
            leaseStart: req.body.leaseStart,
            leaseEnd: req.body.leaseEnd,
            leaseAmount: req.body.leaseAmount,
            leasePaid: req.body.leasePaid,
            rent: req.body.rent,
            createdBy: req.body.createdBy,
            updatedBy: req.body.createdBy
        });
        newstore.save(function(err){
            if (err){
               throw err
            }
            else{
                let allRents = create_rents(req.body.leaseStart, req.body.leaseEnd, req.body.storeName, req.body.rent, req.body.createdBy);
                if (allRents.length === 0){
                    throw "Problems with creating rents"
                }
                res.status(200);
                res.send("New Store created");
            }
        })
    }catch (e) {
        console.log("Error with creating new store");
        console.log(e);
        res.status(400);
        res.send("Could not create new store")
    }
};

function create_monthly_rent(date, amount, storeName, user) {
    try{
        let newrent = new Rent({
            name: storeName,
            paymentPeriod: date,
            paymentVal: amount,
            amountPaid: 0,
            updatedBy: user,
            updatedAt: Date.now()
        });
        newrent.save(function(err) {
            if (err) throw err;
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

exports.get_all_stores = async function (req, res, next) {
    try{
        await Store.find()
            .then(allstore => {
                res.status(200);
                res.send({'stores': allstore})
            }).catch(e => {
                throw e
            })

    }catch (e) {
        console.log("Error with getting number of stores")
        console.log(e);
        res.status(400);
        res.send("Could not get number of stores")
    }
}