import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const ApplyLoanScreen = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    fathersname: "",
    phonenumber: "",
    loanAmount: "",
    loanterm: "",
    image: null,
  });
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  const handleImagePick = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "We need access to your camera roll to choose an image."
      );
      return;
    }

    // Open the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, image: result.assets[0].uri });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={formData.firstname}
        onChangeText={(text) => handleInputChange("firstname", text)}
        placeholder="Enter first name"
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={formData.lastname}
        onChangeText={(text) => handleInputChange("lastname", text)}
        placeholder="Enter last name"
      />

      <Text style={styles.label}>Father's Name</Text>
      <TextInput
        style={styles.input}
        value={formData.fathersname}
        onChangeText={(text) => handleInputChange("fathersname", text)}
        placeholder="Enter father's name"
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={formData.phonenumber}
        onChangeText={(text) => handleInputChange("phonenumber", text)}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Loan Amount</Text>
      <TextInput
        style={styles.input}
        value={formData.loanAmount}
        onChangeText={(text) => handleInputChange("loanAmount", text)}
        placeholder="Enter loan amount"
        keyboardType="numeric"
      />

      <View>
        <Button onPress={showDatepicker} title="Show Date Picker" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date" // You can use "time" or "datetime" as well
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <Text>Selected Date: {date.toLocaleDateString()}</Text>
      </View>

      <Text style={styles.label}>Loan Term</Text>
      <RNPickerSelect
        onValueChange={(value) => handleInputChange("loanterm", value)}
        items={[
          { label: "6 months", value: "6" },
          { label: "12 months", value: "12" },
          { label: "18 months", value: "18" },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: "Select loan term", value: null }}
      />

      <Text style={styles.label}>Choose Image</Text>
      <TouchableOpacity onPress={handleImagePick} style={styles.imagePicker}>
        <Text style={styles.imagePickerText}>Pick an image</Text>
      </TouchableOpacity>
      {formData.image && (
        <Image source={{ uri: formData.image }} style={styles.image} />
      )}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  imagePicker: {
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  imagePickerText: {
    color: "#000",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputAndroid: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
};

export default ApplyLoanScreen;
