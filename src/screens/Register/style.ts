import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEEEE",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: '100%'
    },
    imageShape: {
        position: "absolute",
        width: 290,
        height: 258,
        top: -100,
        left: -100
    },
    imageSplash: {
        width: 187,
        height: 170,
        marginTop: 200,
    },
    splashText: {
        marginTop: 80,
        textAlign: "center"
    },
    title: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins_700Bold",
        fontSize: 22,
        width: "100%",
        color: 'rgba(0, 0, 0, 0.90)',
        paddingVertical: 10
    },
    subTitle: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        width: "100%",
        color: 'rgba(0, 0, 0, 0.90)',
        paddingVertical: 8
    },
    textInfo: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 50,
        fontSize: 15,
        fontFamily: "Poppins_600SemiBold"
    },
    account: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.80)',
    },
    signIn: {
        fontFamily: "Poppins_700Bold",
        fontSize: 15,
        color: '#62D2C3',
    },




});

