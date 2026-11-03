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
    marginBottom: 12,
  },
  addressRow: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
  },
  address: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 7,
  },
  mapPlaceholder: {
    alignItems: "center",
    borderRadius: 10,
    height: 112,
    justifyContent: "center",
    backgroundColor: '#a7aeb8'
  },
  mapText: {
    fontSize: 11,
    marginTop: 5,
  },
});

export default styles;
