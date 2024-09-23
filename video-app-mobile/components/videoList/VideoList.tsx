// VideoList.tsx

import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import IVideo, { VideoListProps } from "../../models/Video";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from "./styles";

const VideoList: React.FC<VideoListProps> = ({
  videos,
  loading,
  loadingMore,
  loadMoreVideos,
  navigation,
}) => {
  const renderItem = ({ item, index }: { item: IVideo; index: number }) => {
    if (loading || !item) {
      return (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item
              width={100}
              height={100}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item marginLeft={20}>
              <SkeletonPlaceholder.Item
                width={120}
                height={20}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={80}
                height={20}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      );
    }

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate("VideoDetail", { videoId: item.id })}
      >
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return <ActivityIndicator style={styles.loadingIndicator} />;
  };

  if (!loading && videos.length === 0) {
    return <Text>Sem vídeos disponíveis.</Text>;
  }

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      onEndReached={loadMoreVideos}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  );
};

export default VideoList;
