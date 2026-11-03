import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 16,
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 14,
    padding: 13,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#e8f2ff",
    borderRadius: 23,
    height: 46,
    justifyContent: "center",
    width: 46,
  },
  initials: {
    color: "#3478c8",
    fontSize: 14,
    fontWeight: "700",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: "700",
  },
  locationRow: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 4,
  },
  location: {
    fontSize: 10,
    marginLeft: 2,
  },
  badge: {
    alignItems: "center",
    borderColor: '#3478c8',
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  badgeText: {
    color: "#3478c8",
    fontWeight: "600",
    marginLeft: 3,
  },
});

export default styles;
