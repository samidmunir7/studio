import Record from "../models/record.model.js";
import User from "../models/user.model.js";

export const create = async (req, res) => {
  const { userId, title, category, company, description, country, type } =
    req.body;

  try {
    const user = User.findById({ userId });
    if (!user) {
      console.log("Cannot create new record without valid user.");
      return res.status(500).json({
        message: "Cannot create new record without valid user.",
        error: "User not found.",
      });
    }
    const record = await Record.create(req.body);
    console.log("Record created successfully.");
    return res.status(201).json(record);
  } catch (err) {
    console.log("Error creating record.");
    return res
      .status(400)
      .json({ message: "Error creating record.", error: err.message });
  }
};

export const getAllRecordsByUserId = async (req, res) => {
  const { userId } = req.body;
  try {
    const records = await Record.find({ userId: userId });
    return res.status(200).json(records);
  } catch (err) {
    console.log("Error getting records for user.");
    return res
      .status(400)
      .json({ message: "Error getting records for user.", error: err.message });
  }
};
