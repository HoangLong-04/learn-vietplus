import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import AppView from "../../components/common/AppView";
import AppText from "../../components/common/AppText";
import JobCard from "../../components/JobCard/JobCard";
import Pagination from "../../components/Pagination/Pagination";
import DropdownOption from "../../components/Filter/DropdownOption/DropdownOption";
import { zoneList } from "../../components/Filter/DropdownOption/mockList";
import { MaterialIcons } from "@expo/vector-icons";
import AppCard from "../../components/common/AppCard";
import { fetchJobList } from "../../redux/slices/jobList/jobThunk";
import { useFocusEffect } from "@react-navigation/native";
import { fetchJobCategory } from "../../redux/slices/jobCategoryList/jobCategoryThunk";
import { jobCategoryLabels, jobFormLabels } from "./jobEnum";
import { fetchJobForm } from "../../redux/slices/jobFormList/jobFormListThunk";
import { useTheme } from "../../context/ThemeContext";

export default function JobListScreen() {
  const [page, setPage] = useState<number>(1);
  const [zone, setZone] = useState("all");
  const [jobCategory, setJobCategory] = useState("all");
  const [jobForm, setJobForm] = useState("All");

  const dispatch = useDispatch<AppDispatch>();
  const {colors} = useTheme()

  const { jobList, loading, error, totalPages } = useSelector(
    (state: RootState) => state.job,
  );
  const { categoryList } = useSelector((state: RootState) => state.jobCategory);
  const { formList } = useSelector((state: RootState) => state.jobForm);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchJobList({ page, limit: 10, jobCategory }));

      dispatch(fetchJobForm());
    }, [dispatch, page, jobCategory]),
  );

  useEffect(() => {
    dispatch(fetchJobCategory());
  }, [dispatch]);

  const jobFormOptions = [
    { label: "Tất cả", value: "all" },
    ...formList?.map((item) => ({
      label: jobFormLabels[item] || item,
      value: item,
    })),
  ];

  const jobCategoryOptions = [
    { label: "Tất cả", value: "all" },
    ...(categoryList?.map((item) => ({
      label: jobCategoryLabels[item] || item,
      value: item,
    })) || []),
  ];

  return (
    <AppView style={styles.container}>
      {loading && <ActivityIndicator />}

      {error && <AppText>{error}</AppText>}

      {!loading && !error && (
        <FlatList
          ListHeaderComponent={
            <AppCard>
              <DropdownOption
                filterList={zoneList}
                placeHolder="Chọn khu vựccc"
                label="Khu vực"
                setValue={setZone}
                value={zone}
                Icon={() => <MaterialIcons name="location-on" size={18} color={colors.icon} />}
              />
              <DropdownOption
                filterList={jobCategoryOptions}
                placeHolder="Chọn loại công việc"
                label="Loại công việc"
                setValue={setJobCategory}
                value={jobCategory}
                Icon={() => <MaterialIcons name="work" size={18} color={colors.icon} />}
              />
              <DropdownOption
                filterList={jobFormOptions}
                placeHolder="Chọn hình thức làm việc"
                label="Hình thức làm việc"
                setValue={setJobForm}
                value={jobForm}
                Icon={() => <MaterialIcons name="timer" size={18} color={colors.icon} />}
              />
            </AppCard>
          }
          data={jobList}
          renderItem={({ item }) => <JobCard jobData={item} />}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={
            <Pagination
              onPageChange={(newPage) => setPage(newPage)}
              page={page}
              totalPages={totalPages}
            />
          }
          ListEmptyComponent={
            <AppView style={styles.emptyTextContainer}>
              <AppText>Không có việc nào phù hợp</AppText>
            </AppView>
          }
        />
      )}
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  emptyTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
