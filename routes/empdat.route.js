const express = require("express");
const {  createID, getalluserdetails, getuserdetails, UpdatePreference, deleteuser, getEmployeesByDrink, getEmployeesByDOB} = require('../Controller - Cafeteria/emp-cafe.controllers');
const emp_router = express.Router();

emp_router.post('/', createID);
emp_router.get('/', getalluserdetails);
emp_router.get('/aid/:aid', getuserdetails);
emp_router.put('/put/:aid', UpdatePreference);
emp_router.delete('/del/:aid', deleteuser);
emp_router.get('/drink/:drink', getEmployeesByDrink);
emp_router.get('/dob/:dob', getEmployeesByDOB);

module.exports = emp_router;