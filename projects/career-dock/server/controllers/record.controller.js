import Record from "../models/record.model.js";
import User from "../models/user.model.js";

export const create = async (req, res) => {
  const { userId, title, category, company, description, country, type } =
    req.body;

  try {
    // const user = User.findById({ userId });
    // if (!user) {
    //   console.log("Cannot create new record without valid user.");
    // }
    const record = await Record.create(req.body);
    console.log("Record created successfully.");
    res.status(201).json(record);
  } catch (err) {
    console.log("Error creating record.");
    res
      .status(400)
      .json({ message: "Error creating record.", error: err.message });
  }
};
