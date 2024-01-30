require("dotenv").config();
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

const Airtable = require("airtable");
Airtable.configure({
  apiKey: AIRTABLE_API_KEY,
});

const base = Airtable.base(AIRTABLE_BASE_ID);

const {AIRTABLE_TABLE2_NAME } = process.env;

const submitAnswersHandler = async (req, res) => {
  const formData = req.body;
  
  const name = formData.studentProgress.name
  const hours = formData.studentProgress.hours
  const progress = formData.studentProgress.progress

  const data = {
    fields: {
      Name: name,
      Progress: progress,
      Hours: hours,
    },
  };

  try {
    const records = await base(AIRTABLE_TABLE2_NAME).create([data]);
    console.log(records);
    res.json(records);
  } catch (error) {
    console.error('Error inserting record into Airtable:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

  module.exports = submitAnswersHandler;