import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: "#62D2C3",        
        borderRadius: 5,   
        width: "90%",   
        shadowColor: 'black',     
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text: {
        fontFamily: "Poppins_700Bold",
        fontSize: 20,
        lineHeight: 30,
        textAlign:"center",        
        paddingVertical: 15,
    }
});