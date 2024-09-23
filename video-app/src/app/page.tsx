// app/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { fetchVideos } from '../services/videoService';
import VideoCard from '../components/VideoCard';
import SkeletonLoader from '../components/SkeletonLoader';

interface Video {
  id: string;
  title: string;
  description: string;
  hls_path: string;
  thumbnail: string;
  views: number;
  likes: number;
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await fetchVideos();
        
        // Remover duplicados com base no título
        const uniqueVideos = data.reduce((acc: Video[], current: Video) => {
          const x = acc.find(item => item.title === current.title);
          if (!x) {
            acc.push(current);
          }
          return acc;
        }, []);
        
        setVideos(uniqueVideos);
        setFilteredVideos(uniqueVideos); // Inicialmente, todos os vídeos são mostrados sem duplicidade
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
        setVideos([]);
        setFilteredVideos([]);
      } finally {
        setLoading(false);
      }
    };
    loadVideos();
  }, []);

  // Atualiza os vídeos filtrados quando o termo de busca muda
  useEffect(() => {
    const filtered = videos.filter(video =>
      (video.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
      (video.description?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered);
  }, [searchTerm, videos]);

  return (
    <div>
      <h1>Lista de Vídeos</h1>
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar vídeos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px', fontSize: '16px' }}
      />

      {loading ? (
        <div>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      ) : (
        <div>
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          ) : (
            <p>Nenhum vídeo encontrado</p>
          )}
        </div>
      )}
    </div>
  );
}
