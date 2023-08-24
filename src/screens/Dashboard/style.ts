import { StyleSheet } from "react-native";

export const dashboardStyles = StyleSheet.create({
    container: {
        backgroundColor: "#62D2C3",
        flex: 1,
    },
    profile: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 134,
        gap: 10
    },
    imageShape: {
        position: "absolute",
        width: 290,
        height: 258,
        top: -100,
        left: -100
    },
    profileName: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Poppins_700Bold",
        fontSize: 22,
        paddingBottom: 15,

    },
    taskContainer: {
        backgroundColor: "#FFF",
        paddingTop: 15,
        flex: 1,
        alignItems: "center"
    },
    clock: {
        marginTop: 48,
        width: 127,
        height: 127,
    },
    title: {
        color: "rgba(0, 0, 0, 0.90)",
        textAlign: "left",
        fontFamily: "Poppins_700Bold",
        fontSize: 22,
        paddingTop: 18,

    },

});

