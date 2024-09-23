const express = require('express');
const router = express.Router();
const { fetchVideos } = require('../services/mockyService');

// Rota para obter todos os vídeos
router.get('/', async (req, res) => {
  try {
    const videos = await fetchVideos();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

module.exports = router;
