const axios = require('axios');

const fetchVideos = async () => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/68e08137-ae33-4618-82a8-8bb037a6f575');
    return response.data;
  } catch (error) {
    console.error('Error fetching videos from Mocky', error);
    throw error;
  }
};

module.exports = {
  fetchVideos,
};
