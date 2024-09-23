import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import useVideoDetailController from "../../controllers/VideoDetailController";
import styles from "./styles";
import VideoPlayer from "../../components/video/VideoPlayer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RootStackParamList } from "../../types/Types";
import { FontAwesome } from "@expo/vector-icons";

const VideoDetailScreen: React.FC = () => {
  const route = useRoute();
  const { videoId } = route.params as { videoId: string };
  const { videoDetails, loading, toggleLike, isLiked } =
    useVideoDetailController(videoId);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 20,
            paddingBottom: 40,
          }}
        >
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="arrow-back" size={24} color="#344054" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{videoDetails.title}</Text>
        <VideoPlayer uri={videoDetails.hls_path} />

        <Text style={styles.description}>{videoDetails.description}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>
            {videoDetails.views} Visualizações | {videoDetails.likes} Curtidas
          </Text>
          <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
            <FontAwesome
              name="heart"
              size={24}
              color={isLiked ? "red" : "gray"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default VideoDetailScreen;
