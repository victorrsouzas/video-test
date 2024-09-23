const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const videoRoutes = require('./routes/videos');
const authRoutes = require('./routes/auth');

app.use(express.json());

app.use(cors());

app.use(bodyParser.json());

app.use('/api/videos', videoRoutes);
app.use('/api', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
