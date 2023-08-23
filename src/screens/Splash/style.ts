import { StyleSheet } from "react-native";

const splashStyles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEEEE",
        flexDirection: "column",
        alignItems: "center",             
        width: "100%" 
    },  
    imageShape: {
        position: "absolute",
        width: 290,
        height: 258,
        top: -94,
        left: -66
    },    
    imageSplash: {
        width: 187,
        height: 170,
        marginTop: 200,
    },
    splashText : {
        marginTop: 80,           
        textAlign: "center"     
    },
    title: {
        textAlign: "center",     
        fontFamily: "Poppins_700Bold",
        fontSize: 22,
        width: "100%"
    },
    textInfo: {
        textAlign: "center",     
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 50,
        fontSize: 15,
        fontFamily: "Poppins_600SemiBold"
    }

    

});

export { splashStyles }

