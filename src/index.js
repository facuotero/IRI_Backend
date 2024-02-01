const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const airtableController = require('./routes/airtableRouter');


app.use('/api', airtableController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
