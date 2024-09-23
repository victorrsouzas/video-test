import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "../../themes/Dimensions";


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: widthPercentageToDP("30%"),
    paddingHorizontal: widthPercentageToDP("5%"),
    borderWidth: 2,
    borderColor: "#3992D4",
    borderRadius: 5,
    overflow: "hidden",
  },
  loadingIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
