const Branch = require("../models/Branch");

// Create a new branch
exports.createBranch = async (req, res) => {
  try {
    const {
      branch_name,
      start_date,
      description,
      services,
      locations,
      map_embed,
      social_media,
    } = req.body;

    const newBranch = new Branch({
      branch_name,
      start_date,
      description,
      services,
      locations,
      map_embed,
      social_media,
    });

    await newBranch.save();
    res.status(201).json(newBranch);
  } catch (error) {
    res.status(500).json({ error: "Failed to create branch" });
  }
};

// Get all branches
exports.getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch branches" });
  }
};

// Get branch by ID
exports.getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) return res.status(404).json({ error: "Branch not found" });
    res.status(200).json(branch);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch branch" });
  }
};

// Update branch
exports.updateBranch = async (req, res) => {
  try {
    const updatedBranch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedBranch);
  } catch (error) {
    res.status(500).json({ error: "Failed to update branch" });
  }
};

// Delete branch
exports.deleteBranch = async (req, res) => {
  try {
    await Branch.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Branch deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete branch" });
  }
};
