const Express = require("express");
const router = Express.Router();
const {CreateContactController} = require('./controllers/contact');

router.post("/createContact", CreateContactController);

module.exports = router;
