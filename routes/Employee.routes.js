const express = require("express");

const { EmployeeModel } = require("../model/Employee.model")

const employeeRouter = express.Router();


employeeRouter.get("/", async (req, res) => {
    try {
        const employee = await EmployeeModel.find({ userId: req.body.userId })
        res.status(200).send(employee)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})



employeeRouter.post("/", async (req, res) => {
    try {
        const employee = new EmployeeModel(req.body)
        await employee.save()
        res.status(200).send({ 'msg': 'New Employee has been added' })
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})




employeeRouter.patch("/:employeeID", async (req, res) => {
    const { employeeID } = req.params;
    const employee = await EmployeeModel.findOne({ _id: employeeID })
    try {
        if (req.body.userID !== employee.userID) {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await EmployeeModel.findByIdAndUpdate({ _id: employeeID }, req.body)
            res.status(200).send(`Details of employee with id:${employeeID} has been updated`)
        }
    } catch (err) {
        res.status(400).send(err)
    }
})




employeeRouter.delete("/:employeeID", async (req, res) => {
    const { employeeID } = req.params;
    const employee = await EmployeeModel.findOne({ _id: employeeID })
    try {
        if (req.body.userID !== employee.userID) {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await EmployeeModel.findByIdAndDelete({ _id: employeeID })
            res.status(200).send(`Details of employee with id:${employeeID} has been deleted`)
        }
    } catch (err) {
        res.status(400).send(err)
    }
})



module.exports = {
    employeeRouter
}