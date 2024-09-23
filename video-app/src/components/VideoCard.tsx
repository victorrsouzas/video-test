// components/VideoCard.tsx
import Link from "next/link";
import styles from "./VideoCard.module.css";

interface Video {
  id: string; // Alterado para string
  title: string;
  description: string;
  hls_path: string;
  thumbnail: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className={styles.card}>
      <img src={video.thumbnail} alt="Video thumbnail" className={styles.thumbnail} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <Link href={`/video/${video.id}`} className={styles.details}>
        Ver Detalhes
      </Link>
    </div>
  );
};

export default VideoCard;
