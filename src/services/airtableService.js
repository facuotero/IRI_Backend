const axios = require('axios');
require('dotenv').config();

const {AIRTABLE_API_KEY, AIRTABLE_BASE_ID} = process.env;

const airtableHeaders = {
  'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
  'Content-Type': 'application/json'
};
const getAirtableRecords = async (tableName) => {
  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableName}`,
      { headers: airtableHeaders }
    );
    return response.data.records;
  } catch (error) {
    throw error;
  }
};

module.exports = {getAirtableRecords};