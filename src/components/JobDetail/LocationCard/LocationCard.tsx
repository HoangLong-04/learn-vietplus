import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import styles from "./styles";
import AppCard from "../../common/AppCard";
import AppText from "../../common/AppText";

interface Props {
  address: string | undefined;
  zone: string | undefined;
}

export default function LocationCard({ address, zone }: Props) {
  if (!address && !zone) return null;

  const fullAddress = [address?.trim(), zone].filter(Boolean).join(", ");

  return (
    <AppCard style={[styles.card]}>
      <AppText style={[styles.heading]}>Địa điểm làm việc</AppText>
      <View style={styles.addressRow}>
        <MaterialIcons name="location-on" size={19} />
        <AppText style={[styles.address]}>
          {fullAddress || "Chưa cập nhật địa chỉ"}
        </AppText>
      </View>
      <AppCard style={[styles.mapPlaceholder]}>
        <MaterialIcons name="map" size={24} />
        <AppText style={[styles.mapText]}>Bản đồ sẽ được cập nhật</AppText>
      </AppCard>
    </AppCard>
  );
}
