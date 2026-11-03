import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <View style={styles.container}>
      {/* Previous */}
      <TouchableOpacity
        style={[styles.button, page === 1 && styles.disabled]}
        disabled={page === 1}
        onPress={() => onPageChange(page - 1)}
      >
        <Text style={styles.text}>Trước</Text>
      </TouchableOpacity>

      {/* Page numbers */}
      {pages.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.pageButton, page === item && styles.active]}
          onPress={() => onPageChange(item)}
        >
          <Text style={[styles.text, page === item && styles.activeText]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Next */}
      <TouchableOpacity
        style={[styles.button, page === totalPages && styles.disabled]}
        disabled={page === totalPages}
        onPress={() => onPageChange(page + 1)}
      >
        <Text style={styles.text}>Sau</Text>
      </TouchableOpacity>
    </View>
  );
}
