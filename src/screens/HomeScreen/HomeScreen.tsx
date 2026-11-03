import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { RootStackParamList } from "../../navigation/navigationTypes";
import AppView from "../../components/common/AppView";
import AppText from "../../components/common/AppText";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "MainTabs">;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <AppView style={{ padding: 20 }}>
      <AppText
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Trang chủ
      </AppText>

      <Button title="Tìm việc" onPress={() => navigation.navigate("jobList")} />
    </AppView>
  );
}
