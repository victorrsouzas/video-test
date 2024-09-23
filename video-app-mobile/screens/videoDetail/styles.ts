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
    padding: 20,
    backgroundColor: "#fff",
  },
  video: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  stats: {
    fontSize: 14,
    color: "#999",
  },
  likeButton: {
    marginLeft: 10,
    padding: 5,
  },
  arrowButton:{
    position: "absolute", left: 0, top: 15 
  }
});

export default styles;
