import React from "react";
import { ViewProps } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ViewProps & {
  children: React.ReactNode;
};

export default function AppView({ children, style, ...props }: Props) {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      {...props}
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}
