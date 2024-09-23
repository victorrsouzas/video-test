"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchVideoById } from "../../../services/videoService";
import {
  AiOutlineLike,
  AiOutlineEye,
  AiOutlineArrowLeft,
} from "react-icons/ai";

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
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadVideo = async () => {
      const data = await fetchVideoById(params.id);
      if (data) {
        setVideo(data);
        setVideoSrc(data.hls_path); // Define o vídeo original

        // Carregar valores do localStorage
        const savedLikes = localStorage.getItem(`video_likes_${params.id}`);
        const savedViews = localStorage.getItem(`video_views_${params.id}`);
        setLikes(savedLikes ? Number(savedLikes) : data.likes);
        setViews(savedViews ? Number(savedViews) : data.views);
      }
    };

    loadVideo();
  }, [params.id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`video_likes_${params.id}`, newLikes.toString());
  };

  const handleFullScreen = (videoElement: HTMLVideoElement | null) => {
    if (videoElement && videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    }
  };

  const incrementViews = () => {
    const newViews = views + 1;
    console.log("Entrei auiq");
    setViews(newViews);
    localStorage.setItem(`video_views_${params.id}`, newViews.toString());
  };

  const handleVideoError = () => {
    setVideoSrc("https://www.youtube.com/embed/x57GYTMVxqI");
  };

  if (!video) return <p>Carregando...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          position: "absolute",
          top: "40px",
          left: "20px",
          border: "none",
          background: "none",
        }}
      >
        <AiOutlineArrowLeft size={24} />
      </button>

      <h1>{video.title}</h1>

      {videoSrc && videoSrc.includes("youtube") ? (
        <iframe
          width="800"
          height="450"
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
          style={{ margin: "20px auto", display: "block" }}
          onPlay={() => {
            incrementViews();
          }}
        ></iframe>
      ) : (
        // Vídeo original
        <video
          width="800"
          controls
          onPlay={(e) => {
            incrementViews();
            handleFullScreen(e.currentTarget);
          }}
          onError={handleVideoError}
          src={videoSrc || ""}
          style={{ margin: "20px auto", display: "block" }}
        ></video>
      )}

      <p>{video.description}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
          }}
          onClick={handleLike}
        >
          <AiOutlineLike size={24} />
          <p>{likes} Likes</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <AiOutlineEye size={24} />
          <p>{views} Visualizações</p>
        </div>
      </div>
    </div>
  );
}
