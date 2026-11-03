import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f7f9",
    flex: 1,
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 48,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  headerButton: {
    alignItems: "center",
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  headerTitle: {
    color: "#303640",
    fontSize: 14,
    fontWeight: "700",
  },
  content: {
    paddingBottom: 24,
  },
  emptyState: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  emptyText: {
    color: "#737b88",
    fontSize: 14,
  },
  errorText: {
    color: "#b42318",
    fontSize: 14,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#2f6fdb",
    borderRadius: 8,
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;
