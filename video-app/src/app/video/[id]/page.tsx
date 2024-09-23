// app/video/[id]/page.tsx
"use client"; // Isso informa ao Next.js que o componente deve ser tratado como um Client Component

import { useEffect, useState } from 'react';
import { fetchVideoById } from '../../../services/videoService';

interface Video {
  id: string;
  title: string;
  description: string;
  hls_path: string;
  views: number;
  likes: number;
}

export default function VideoDetail({ params }: { params: { id: string } }) {
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const data = await fetchVideoById(params.id);
        if (data) {
          setVideo(data);
        } else {
          console.error("Vídeo não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar o vídeo:", error);
      }
    };
    loadVideo();
  }, [params.id]);

  if (!video) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{video.title}</h1>
      <video controls src={video.hls_path}></video>
      <p>{video.description}</p>
      <p>Views: {video.views}</p>
      <p>Likes: {video.likes}</p>
    </div>
  );
}
