import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  title: {
    marginLeft: 16,
    fontSize: 16,
    flexShrink: 1,
  },
  loadingIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollToTopButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
