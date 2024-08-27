const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api.js');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});