import React from "react";
import { View, Text, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/Types";
import styles from "./styles";
import { useHomeController } from "../../controllers/HomeController";
import VideoList from "../../components/videoList/VideoList";

const HomeScreen: React.FC = () => {
  const { videos, loading, loadingMore, loadMoreVideos, searchTerm, setSearchTerm } = useHomeController();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Vídeos</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar vídeos..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <VideoList
          videos={videos}
          loading={loading}
          loadingMore={loadingMore}
          loadMoreVideos={loadMoreVideos}
          navigation={navigation}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
