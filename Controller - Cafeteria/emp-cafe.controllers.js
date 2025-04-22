const CafeDB = require('../Modals - Cafeteria/cafeteria.modal');

// Create User ID
const createID = async (req, res) => {
    try {
        const UserID = await CafeDB.create(req.body);
        res.status(200).json(UserID);
       } catch (error) {
         res.status(500).json({message: error.message})
       }
};

// Retrieve all employee details from the database
const getalluserdetails = async (req , res) => {
    try {
        const userdata = await CafeDB.find({});
        res.status(200).json(userdata);
      } catch (error) {
        res.status(500).json({message: error.message})
      }
};

// Retrieve Employee details by AID from the database
const getuserdetails = async (req, res) => {
    try {
        const {aid} = req.params;
        const user = await CafeDB.find({ AID : aid});
        if (!user || user.length === 0) {
          return res.status(404).json({ message: "Employee not found with the specified AID" });
      }
        res.status(200).json(user)
      } catch (error) {
        res.status(500).json({message: error.message})
      }
};

// Update an employee Prefered Drinks in the DB
const UpdatePreference = async (req, res) => {
    try {
        const {aid} = req.params;
        const drink_preference = await CafeDB.findOneAndUpdate({ AID : aid}, req.body, { new: true });
        if(!drink_preference){
          return res.status(404).json({message: "Sorry, User not found"});
        }
        const updatedPreference = await CafeDB.find({AID : aid});
        res.status(200).json(updatedPreference);
      } catch (error) {
        res.status(500).json({message: error.message})
      }
};

// Delete an Employee from the DB
const deleteuser = async (req, res) => {
    try {
        const {aid} = req.params;
       const user =  await CafeDB.findOneAndDelete({AID : aid});
        if(!user){
          return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({ message: "User ID Deleted Successfully"});
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

const getEmployeesByDrink = async (req, res) => {
  try {
      const { drink } = req.params;
      const employees = await CafeDB.find({ drink_preferences: drink }).select('name AID quantity_perday');

      if (!employees || employees.length === 0) {
          return res.status(404).json({ message: "No employees found with the specified drink preference" });
      }

      res.status(200).json(employees);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Get all employees with the same DOB
const getEmployeesByDOB = async (req, res) => {
  try {
      const { dob } = req.params;  // Assume dob is passed in 'YYYY-MM-DD' format
      const employees = await CafeDB.find({ DOB: dob }).select('name AID drink_preferences');

      if (!employees || employees.length === 0) {
          return res.status(404).json({ message: "No employees found with the specified DOB" });
      }

      res.status(200).json(employees);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createID,
    getalluserdetails,
    getuserdetails,
    UpdatePreference,
    deleteuser,
    getEmployeesByDrink,
    getEmployeesByDOB
}