import React, { useState, useEffect } from "react";
import { getVideos } from "../services/VideoService";
import IVideo from "../models/Video";

export const useHomeController = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchVideos(page);
  }, [page]);

  useEffect(() => {
    filterVideos();
  }, [searchTerm, videos]);

  const fetchVideos = async (page: number) => {
    setLoadingMore(true);
    try {
      const response = await getVideos(page);
      if (response.data && response.data.videos) {
        const newVideos = response.data.videos.filter((newVideo: IVideo) => {
          return !videos.some((existingVideo: IVideo) => existingVideo.id === newVideo.id);
        });
        setVideos((prevVideos) => [...prevVideos, ...newVideos]);
        setHasMore(newVideos.length > 0);
      } else {
        console.error("Formato inesperado de resposta", response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar vídeos:", error);
    } finally {
      setLoadingMore(false);
      setLoading(false);
    }
  };

  const filterVideos = () => {
    if (searchTerm) {
      const filtered = videos.filter((video) => {
        const title = video.title ? video.title.toLowerCase() : "";
        const description = video.description ? video.description.toLowerCase() : "";
        return (
          title.includes(searchTerm.toLowerCase()) ||
          description.includes(searchTerm.toLowerCase())
        );
      });
      setFilteredVideos(filtered);
    } else {
      setFilteredVideos(videos);
    }
  };

  const loadMoreVideos = () => {
    if (hasMore && !loadingMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return {
    videos: filteredVideos,
    loading,
    loadingMore,
    loadMoreVideos,
    searchTerm,
    setSearchTerm,
  };
};
