const { Router } = require("express");
const router = Router();

router.use('/building', require('./building'));

module.exports = router;