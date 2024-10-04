import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { emiDate: "02,Aug,2024", status: "paid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f3" },
  { emiDate: "02,Sept,2024", status: "paid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f4" },
  { emiDate: "02,Oct,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f5" },
  { emiDate: "02,Nov,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f6" },
  { emiDate: "02,Dec,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f7" },
  { emiDate: "02,Jan,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f8" },
  { emiDate: "02,Feb,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f9" },
  { emiDate: "02,Mar,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fa" },
  { emiDate: "02,Apr,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fb" },
  { emiDate: "02,May,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fc" },
  { emiDate: "02,Jun,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fd" },
  { emiDate: "02,Jul,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fe" },
  { emiDate: "02,Aug,2024", status: "paid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f3" },
  { emiDate: "02,Sept,2024", status: "paid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f4" },
  { emiDate: "02,Oct,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f5" },
  { emiDate: "02,Nov,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f6" },
  { emiDate: "02,Dec,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f7" },
  { emiDate: "02,Jan,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f8" },
  { emiDate: "02,Feb,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f9" },
  { emiDate: "02,Mar,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fa" },
  { emiDate: "02,Apr,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fb" },
  { emiDate: "02,May,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fc" },
  { emiDate: "02,Jun,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fd" },
  { emiDate: "02,Aug,2024", status: "paid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f3" },
  { emiDate: "02,Sept,2024", status: "paid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f4" },
  { emiDate: "02,Oct,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f5" },
  { emiDate: "02,Nov,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f6" },
  { emiDate: "02,Dec,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f7" },
  { emiDate: "02,Jan,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f8" },
  { emiDate: "02,Feb,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f9" },
  { emiDate: "02,Mar,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fa" },
  { emiDate: "02,Apr,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fb" },
  { emiDate: "02,May,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fc" },
  { emiDate: "02,Jun,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fd" },
  { emiDate: "02,Jul,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fe" },
  { emiDate: "02,Aug,2024", status: "paid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f3" },
  { emiDate: "02,Sept,2024", status: "paid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f4" },
  { emiDate: "02,Oct,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f5" },
  { emiDate: "02,Nov,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f6" },
  { emiDate: "02,Dec,2024", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f7" },
  { emiDate: "02,Jan,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f8" },
  { emiDate: "02,Feb,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3f9" },
  { emiDate: "02,Mar,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fa" },
  { emiDate: "02,Apr,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fb" },
  { emiDate: "02,May,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fc" },
  { emiDate: "02,Jun,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fd" },
  { emiDate: "02,Jul,2025", status: "unpaid", monthlyEmi: 8400, _id: "66a9af435fae735a3659f3fe" },
];

const GridLayout = () => {
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
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#ccc'
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: '#f9f9f9'
  },
  cell: {
    flex: 1,
    // padding: 10,
    paddingVertical:10,
    textAlign: 'center'
  },
});

export default GridLayout;
