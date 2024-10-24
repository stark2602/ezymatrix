const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const leadsRoutes = require('./routes/leadsRoutes');
const campaignsRoutes = require('./routes/campaignsRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/leads', leadsRoutes);
app.use('/api/campaigns', campaignsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
