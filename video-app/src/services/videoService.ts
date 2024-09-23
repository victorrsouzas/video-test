// services/videoService.ts
import axios from 'axios';

interface Video {
  id: string;  // Deve ser string
  title: string;
  description: string;
  hls_path: string;
  thumbnail: string;
  views: number;
  likes: number;
}

const API_URL = 'http://localhost:3000/api/videos';

export const fetchVideos = async (): Promise<Video[]> => {
  const response = await axios.get(API_URL);
  
  if (response.data && Array.isArray(response.data.videos)) {
    return response.data.videos;
  } else {
    throw new Error("A resposta da API não contém o array de vídeos esperado.");
  }
};

export const fetchVideoById = async (id: string): Promise<Video | undefined> => {
  const videos = await fetchVideos(); 
  return videos.find(video => video.id === id); 
};
