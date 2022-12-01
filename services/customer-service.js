const CustomerServiceModel = require('../models/Customer-Service');

module.exports.findAllEmployees = async () => {
    try{
        const Employees = await CustomerServiceModel.find();
        return Employees;


    } catch(err){
    throw new Error("could not retrieve customer service employees");
}
};