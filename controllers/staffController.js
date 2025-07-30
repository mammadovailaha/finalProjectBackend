const Staff=require('../models/Staff');

const getAllStaffs=(req,res)=>{
    Staff.find()
    .then(staffs => res.json(staffs))
    .catch(err => res.status(500).json({ message: "Server error" }));
}

const getStaffById=(req,res)=>{
    const staffId = req.params.id;
    Staff.findById(staffId)
      .then(staff => {
        if (!staff) {
          return res.status(404).json({ message: "Staff not found" });
        }
        res.json(staff);
      })
      .catch(err => res.status(500).json({ message: "Server error" }));
}
const createStaff=(req,res)=>{
    const newStaff=new Staff({
        ...req.body,
    });
    newStaff.save()
    .then(staff => res.status(201).json(staff))
    .catch(err => res.status(500).json({ message: "Server error" }));
};


const updateStaffById=(req,res)=>{
    const staffId = req.params.id;
    Staff.findByIdAndUpdate(staffId, req.body, { new: true })
      .then(staff => {
        if (!staff) {
          return res.status(404).json({ message: "Staff not found" });
        }
        res.json(staff);
      })
      .catch(err => res.status(500).json({ message: "Server error" }));
};

const deleteStaffById=(req,res)=>{
    const staffId = req.params.id;
    Staff.findByIdAndDelete(staffId)
      .then(staff => {
        if (!staff) {
          return res.status(404).json({ message: "Staff not found" });
        }
        res.status(204).send();
      })
      .catch(err => res.status(500).json({ message: "Server error" }));
};


module.exports={
    getAllStaffs,
    getStaffById,
    createStaff,
    updateStaffById,
    deleteStaffById
};