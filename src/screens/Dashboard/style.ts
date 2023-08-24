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
        backgroundColor: "#EEE",
        paddingTop: 15,
        flex: 1,
        alignItems: "center"
    },
    clock: {
        marginTop: 48,
        width: 127,
        height: 127,
    },
    taskList: {
        width: "90%",
        paddingTop: 18
    },
    taskCard: {
        height: 260,
        borderRadius: 10,
        shadowColor: 'black',     
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,   
        backgroundColor: "#FFF",
        marginTop: 12 
    },
    taskCardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: 18,
        paddingBottom: 31                
    },
    taskCardHeaderTitle: {
        color: "rgba(0, 0, 0, 0.80)",
        fontFamily: "Poppins_700Bold",
        fontSize: 17,
        opacity: 0.9
    },   
    taskTitle: {
        color: "rgba(0, 0, 0, 0.90)",
        textAlign: "left",
        fontFamily: "Poppins_700Bold",
        fontSize: 22,
        paddingTop: 18,

    },
    taskItems: {
        flex: 1,        
        marginHorizontal: 15,
        width: "90%"
    }

});

