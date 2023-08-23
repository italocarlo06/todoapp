import { Image, Text, View } from "react-native";
import { TextButton } from "../../components/TextButton";
import { splashStyles } from "./style";

export function Splash(){
    return (
    <View style={splashStyles.container}>
        <View></View>        
        <Image style={splashStyles.imageShape} source={require("../../../assets/shape.png")} />
        <Image style={splashStyles.imageSplash} source={require("../../../assets/splash.png")} />
        <View style={splashStyles.splashText}>
            <Text style={splashStyles.title}>Get things done with TODO</Text>
            <Text style={splashStyles.textInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere gravida purus id eu condimentum est diam quam. Condimentum blandit diam.</Text>
        </View>
        <TextButton label={"Get Started"} marginTop={140} />
    </View>)
}