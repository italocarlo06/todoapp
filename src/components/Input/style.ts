import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%'
    },
    input: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        height: 50,
        width: "100%",
        color: 'rgba(0,0,0,0.50)',
        paddingLeft: 10
    },
    label: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 15,
        lineHeight: 22.5,
        textAlign: "left",
        width: "100%",
        paddingHorizontal: 10
    }
});