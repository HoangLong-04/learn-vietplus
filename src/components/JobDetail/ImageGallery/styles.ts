import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9edf3",
    height: 205,
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  placeholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#8a93a1",
    fontSize: 12,
    marginTop: 7,
  },
  pagination: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(25, 30, 40, 0.4)",
    borderRadius: 12,
    bottom: 12,
    flexDirection: "row",
    paddingHorizontal: 9,
    paddingVertical: 6,
    position: "absolute",
  },
  dot: {
    backgroundColor: "rgba(255,255,255,0.55)",
    borderRadius: 4,
    height: 6,
    marginHorizontal: 3,
    width: 6,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 15,
  },
});

export default styles;
