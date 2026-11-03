import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: -18,
    padding: 18,
    shadowColor: "#16233a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 3,
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  metaRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  category: {
    color: "#3478c8",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  postedAt: {
    fontSize: 11,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 24,
  },
  form: {
    fontSize: 12,
    marginTop: 5,
  },
  salary: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 9,
  },
});

export default styles;
