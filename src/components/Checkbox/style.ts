import { StyleSheet } from "react-native";

export const checkboxStyles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%"      
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 12,
      width: "100%"
    },
    checkbox: {
      alignSelf: 'center',
      backgroundColor: "#56C5B6",
      outline: "3px solid black" 
    },
    label: {      
      color: 'rgba(0, 0, 0, 0.80)',
      fontSize: 15,
      fontFamily: "Poppins_700Bold",
      marginLeft: 8,
      opacity: 0.9
    },
  });