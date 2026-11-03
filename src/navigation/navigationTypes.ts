import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
  JobDetail: {
    jobId: string;
  };
  jobList: undefined;
  userProfile: {
    userId: string
  }
};
