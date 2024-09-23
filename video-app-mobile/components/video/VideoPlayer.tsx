import {
  Video,
  ResizeMode,
  Audio,
  AVPlaybackStatus,
  VideoFullscreenUpdateEvent,
} from "expo-av";
import React, { useRef, useState, useEffect } from "react";
import { ActivityIndicator, Platform, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

const VideoPlayer = ({ uri }: { uri: string }) => {
  const videoRef = useRef<Video>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const enableAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          staysActiveInBackground: false,
          playThroughEarpieceAndroid: false,
        });
      } catch (e) {
        console.log(e);
      }
    };

    enableAudio();
  }, []);

  const setOrientation = (event: VideoFullscreenUpdateEvent) => {
    if (Platform.OS == "android") {
      if (event.fullscreenUpdate == 0 || event.fullscreenUpdate == 1) {
        ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
      } else {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (videoRef.current) {
          videoRef.current.pauseAsync();
        }
      };
    }, [])
  );

  const onPlaybackStatusUpdate = (playbackStatus: AVPlaybackStatus) => {
    if (!playbackStatus.isLoaded) {
      if (playbackStatus.error) {
        console.log(`Error during playback: ${playbackStatus.error}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loadingIndicator}
        />
      )}
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri }}
        useNativeControls
        resizeMode={ResizeMode.STRETCH}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        onFullscreenUpdate={setOrientation}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
      />
    </View>
  );
};

export default VideoPlayer;
