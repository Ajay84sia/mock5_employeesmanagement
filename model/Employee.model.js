const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    FirstName: { type: 'string', required: true },
    LastName: { type: 'string', required: true },
    Email: { type: 'string', required: true },
    userId: { type: 'string', required: true },
    Department: { type: 'string', required: true },
    Salary: { type: Number, required: true },
}, {
    versionKey: false,
})

const EmployeeModel = mongoose.model('employee', employeeSchema)

module.exports = {
    EmployeeModel
}