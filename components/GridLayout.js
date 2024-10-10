import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const GridLayout = ({data}) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{index + 1}</Text>
      <Text style={styles.cell}>{item.emiDate}</Text>
      <Text style={styles.cell}>{item.monthlyEmi}</Text>
      <Text style={styles.cell}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>S.No</Text>
        <Text style={styles.headerCell}>EMI Date</Text>
        <Text style={styles.headerCell}>Amount</Text>
        <Text style={styles.headerCell}>Status</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#ccc",
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: "#f9f9f9",
  },
  cell: {
    flex: 1,
    // padding: 10,
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default GridLayout;
