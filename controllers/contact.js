const { createContactService } = require("../core/contact");

const CreateContactController = async (req, res) => {
    const response = await createContactService(req.body);
    return res.status(200).json({
        status: true,
        statusCode: 200,
        message: response,
    });;
}


module.exports = {
    CreateContactController
}