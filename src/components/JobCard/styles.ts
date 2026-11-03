import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 12,
  },
  content: {
    flexDirection: "row",
    minHeight: 88,
  },
  photo: {
    width: 88,
    height: 88,
    borderRadius: 9,
  },
  photoPlaceholder: {
    width: 88,
    height: 88,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
    minWidth: 0,
  },
  badges: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginRight: 7,
  },
  hiringBadge: {
    backgroundColor: "#EAF2FF",
  },
  categoryBadge: {
    backgroundColor: "#FFF1E8",
  },
  hiringLabel: {
    color: "#2563EB",
    fontSize: 9,
    fontWeight: "700",
  },
  categoryLabel: {
    color: "#E87532",
    fontSize: 9,
    fontWeight: "700",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 19,
    marginBottom: 5,
  },
  metadata: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 0,
  },
  metadataText: {
    fontSize: 11,
    marginLeft: 3,
    flexShrink: 1,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginTop: 10,
    marginBottom: 9,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  salary: {
    flexShrink: 1,
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 10,
    textAlign: "right",
  },
});
