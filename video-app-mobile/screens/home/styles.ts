import { StyleSheet } from "react-native";
import { statusBarHeight } from "../../constants/StatusBarHeight";
import { widthPercentageToDP } from "../../themes/Dimensions";
const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: statusBarHeight + widthPercentageToDP("2%"),
    padding: widthPercentageToDP("2%"),
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
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
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default styles;
