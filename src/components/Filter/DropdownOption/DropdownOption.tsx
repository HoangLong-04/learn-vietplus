import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AppText from "../../common/AppText";
import { createStyles } from "./styles";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: React.ComponentType<any>;
  label: string;
  filterList: { label: string; value: string }[];
  placeHolder: string;
  value: string;
  setValue: (value: string) => void;
}

export default function DropdownOption({
  Icon,
  label,
  filterList,
  placeHolder,
  value,
  setValue,
}: Props) {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {Icon ? (
          <Icon />
        ) : (
          <MaterialIcons name="location-on" size={18} color={colors.text} />
        )}
        <AppText style={styles.label}>{label}</AppText>
      </View>

      <Dropdown
        value={value}
        onChange={(item) => setValue(item.value)}
        placeholder={placeHolder}
        data={filterList}
        labelField="label"
        valueField="value"
        style={styles.dropdown}
        containerStyle={styles.dropdownMenu}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        itemContainerStyle={styles.itemContainer}
        itemTextStyle={styles.itemText}
        iconColor={colors.textSecondary}
        activeColor={colors.surface}
        maxHeight={240}
      />
    </View>
  );
}
