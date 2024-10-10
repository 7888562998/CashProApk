import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import GridLayout from "../components/GridLayout";
import axiosInstance from "../services/service";

const HomeScreen = ({ navigation }) => {
  const handleApplyLoan = () => {
    // Logic for applying for a loan
    console.log("Apply Loan button pressed");
  };

  const handleLogout = () => {
    navigation.navigate("Login",{ reload: true });
  };

  const [data, setData] = useState();
  const [amounts, setAmounts] = useState("");
  const getLoanList = async () => {
    try {
      const result = await axiosInstance.get("/loan/list");
      if (result.status === 200) {
        console.log(result.data[0].detail, "result");
        setData(result.data[0].detail);
        setAmounts({
          loanAmount: result.data[0].loanAmount,
          tottleAmount: result.data[0].tottleAmount,
        });
      }
    } catch (error) {
      navigation.navigate("Login");
      await AsyncStorage.setItem('token', "");
      console.log(error);
    }
  };
  useEffect(() => {
    getLoanList();
  }, []);

  return (
    <View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.applyLoanButton}
          onPress={handleApplyLoan}
        >
          <Text style={styles.buttonText}>Apply Loan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loanInfo}>
        <Text style={styles.buttonText}>
          Loan Amount:Rs{amounts.loanAmount}
        </Text>
        <Text style={styles.buttonText}>
          Tottle Amount with interest:Rs:{amounts.tottleAmount}
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <GridLayout data={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  marqueContainer: {
    overflow: "hidden",
    height: 50,
  },
  marquee: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    paddingRight: 20,
    marginRight: 10,
  },
  applyLoanButton: {
    backgroundColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "red",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  loanInfo: {
    marginHorizontal: "auto",
    backgroundColor: "green",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
});

export default HomeScreen;