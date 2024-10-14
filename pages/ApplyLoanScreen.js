import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const ApplyLoanScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    phoneNumber: "",
    city: "",
    address: "",
    loanAmount: "",
    loanterm: "",
    city: "",
    dob:"",
    image: null, // Ensure you use the same key here as you access it later
    status: "Pending",
  });

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setFormData({ ...formData, dob: currentDate });
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
      setFormData({ ...formData, image: result.assets[0].uri }); // Make sure 'image' is used consistently
    }
  };

  const handleInputChange = (field, value) => {
    console.log(field,"feild")
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic  
    setFormData({ ...formData, dob: date });
    console.log(formData);
    console.log("date",date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={formData.firstName} // Use correct state key
        onChangeText={(text) => handleInputChange("firstName", text)}
        placeholder="Enter first name"
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={formData.lastName} // Use correct state key
        onChangeText={(text) => handleInputChange("lastName", text)}
        placeholder="Enter last name"
      />

      <Text style={styles.label}>Father's Name</Text>
      <TextInput
        style={styles.input}
        value={formData.fatherName} // Use correct state key
        onChangeText={(text) => handleInputChange("fatherName", text)}
        placeholder="Enter father's name"
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={formData.phoneNumber} // Use correct state key
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9]/g, ""); // Allow only numbers
          handleInputChange("phoneNumber", numericValue);
        }}
        placeholder="Enter phone number"
        keyboardType="numeric" // Use numeric keyboard
        maxLength={10} // Optional: Set a maximum length for the phone number
      />
      <Text style={styles.label}>Loan Amount</Text>
      <TextInput
        style={styles.input}
        value={formData.loanAmount} // Use correct state key
        onChangeText={(text) => {
          // Allow only numbers and decimal points
          const numericValue = text.replace(/[^0-9.]/g, "");
          handleInputChange("loanAmount", numericValue);
        }}
        placeholder="Enter loan amount"
        keyboardType="numeric" // Use numeric keyboard
      />

      <Text style={styles.label}>Loan Term</Text>
      <TextInput
        style={styles.input}
        value={formData.loanterm} // Use correct state key
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9]/g, ""); // Allow only numbers
          const numericTerm = parseInt(numericValue, 10); // Convert to integer

          // Check if the numeric term is less than 48
          if (numericTerm < 49 || numericValue === "") {
            handleInputChange("loanterm", numericValue); // Update state only if less than 48
          } else {
            // Optionally, you can alert or provide feedback here
            alert("Loan term must be less than 49.");
          }
        }}
        placeholder="Enter loan term"
        keyboardType="numeric" // Use numeric keyboard
      />
      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        value={formData.city} // Use correct state key
        onChangeText={(text) => handleInputChange("city", text)}
        placeholder="Enter city"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={formData.address} // Use correct state key
        onChangeText={(text) => handleInputChange("address", text)}
        placeholder="Enter address"
        keyboardType="numeric"
      />
      <View>
        <Button onPress={showDatepicker} title="Show Date Picker" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <Text>Selected Date: {formData.dob? formData.dob.toLocaleDateString():""}</Text>
      </View>

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

export default ApplyLoanScreen;
