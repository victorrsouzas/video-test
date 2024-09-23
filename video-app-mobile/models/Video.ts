import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/Types";

export default interface IVideo {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}

export interface VideoListProps {
  videos: IVideo[];
  loading: boolean;
  loadingMore: boolean;
  loadMoreVideos: () => void;
  navigation: NavigationProp<RootStackParamList>;
}
