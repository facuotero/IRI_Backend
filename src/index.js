const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const airtableController = require('./routes/airtableRouter');

app.use('/api', airtableController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
