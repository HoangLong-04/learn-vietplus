
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 16,
  },

  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
  },

  pageButton: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },

  active: {
    backgroundColor: "#2563EB",
  },

  text: {
    fontSize: 14,
    color: "#374151",
  },

  activeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  disabled: {
    opacity: 0.4,
  },
});

export default styles;
