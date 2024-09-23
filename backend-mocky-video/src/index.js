const express = require('express');
const cors = require('cors');
const app = express();
const videoRoutes = require('./routes/videos');

app.use(express.json());

app.use(cors());

app.use('/api/videos', videoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
