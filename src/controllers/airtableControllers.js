require("dotenv").config();
const {
  getAirtableRecords,
} = require("../services/airtableService");

const { AIRTABLE_TABLE1_NAME} = process.env;

const checkCredentials = async (email, password) => {
  try {
    const users = await getAirtableRecords(AIRTABLE_TABLE1_NAME);
    return users.some(
      (user) => user.fields.Email === email && user.fields.Password === password
    );
  } catch (error) {
    throw error;
  }
};


module.exports = { checkCredentials};
