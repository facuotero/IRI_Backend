const {Router} = require('express');
const checkCredentialsHandler = require('../handlers/credentialsHandler');
const submitAnswersHandler = require('../handlers/submitAnswersHandler');

const router = Router();

router.post('/check-credentials', checkCredentialsHandler); 
router.post('/submit-answers', submitAnswersHandler);

  
module.exports = router;