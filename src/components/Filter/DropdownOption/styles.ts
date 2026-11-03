import { StyleSheet } from "react-native";
import type { lightColors } from "../../../theme/colors";

type ThemeColors = typeof lightColors;

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      minHeight: 56,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.border,
    },
    labelContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    label: {
      fontSize: 14,
      fontWeight: "500",
      color: colors.textSecondary,
    },
    dropdown: {
      flex: 1,
      minHeight: 44,
      marginLeft: 8,
    },
    dropdownMenu: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      backgroundColor: colors.card,
    },
    placeholder: {
      fontSize: 14,
      color: colors.textSecondary,
      textAlign: "right",
    },
    selectedText: {
      fontSize: 14,
      color: colors.primary,
      textAlign: "right",
    },
    itemContainer: {
      minHeight: 44,
      justifyContent: "center",
      paddingHorizontal: 12,
    },
    itemText: {
      fontSize: 15,
      color: colors.text,
    },
  });