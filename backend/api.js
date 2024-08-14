const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});

router.post('/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});

module.exports = router;