import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 14,
    padding: 16,
  },
  heading: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 17,
  },
  item: {
    alignItems: "center",
    flexDirection: "row",
    minHeight: 36,
    width: "50%",
  },
  iconWrap: {
    alignItems: "center",
    borderRadius: 9,
    height: 34,
    justifyContent: "center",
    marginRight: 9,
    width: 34,
  },
  copy: {
    flex: 1,
    paddingRight: 7,
  },
  label: {
    fontSize: 10,
    marginBottom: 3,
  },
  value: {
    fontSize: 11,
    fontWeight: "600",
  },
});

export default styles;
