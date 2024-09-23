import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.8:3000',
  timeout: 10000,
});


export const getVideos = (page: number) => api.get(`api/videos?_page=${page}&_per_page=10`);

export const getVideoById = async (id: string) => {
  try {
    // Faz a requisição para buscar todos os vídeos
    const response = await api.get('api/videos');
    
    // Verifica se response.data existe e tem uma propriedade videos
    if (response.data && Array.isArray(response.data.videos)) {
      const video = response.data.videos.find((video: any) => video.id === id);
      
      if (!video) {
        throw new Error(`Vídeo com ID ${id} não encontrado.`);
      }

      return video;
    } else {
      throw new Error("Estrutura inesperada na resposta da API. Esperado um array 'videos'.");
    }
  } catch (error) {
    console.error('Erro ao buscar vídeo por ID:', error);
    throw error;
  }
};


// Função para atualizar um vídeo (exemplo: atualizar views ou likes)
export const updateVideo = (id: string, data: any) => api.patch(`api/videos/${id}`, data);
