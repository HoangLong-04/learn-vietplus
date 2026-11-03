import { useTheme } from "../context/ThemeContext";
import JobDetailScreen from "../screens/JobDetailScreen/JobDetailScreen";
import JobListScreen from "../screens/JobListScreen/JobListScreen";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfileScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { RootStackParamList } from "./navigationTypes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const { colors } = useTheme();
  
  return <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },

        headerTintColor: colors.text,

        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="JobDetail"
        component={JobDetailScreen}
        options={{
          title: "Chi tiết việc làm",
        }}
      />

      <Stack.Screen
        name="jobList"
        component={JobListScreen}
        options={{
          title: "Danh sách việc làm",
        }}
      />

      <Stack.Screen
        name="userProfile"
        component={UserProfileScreen}
        options={{
          title: "Hồ sơ người dùng",
        }}
      />
    </Stack.Navigator>
}
