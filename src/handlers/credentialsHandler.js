const {checkCredentials} = require('../controllers/airtableControllers');

const checkCredentialsHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
      const validCredentials = await checkCredentials(email, password);
  
      if (!validCredentials) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      res.status(200).json({validCredentials});
    } catch (error) {
      console.error('Error checking credentials:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = checkCredentialsHandler;