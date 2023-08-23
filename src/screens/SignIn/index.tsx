import { Image, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { signInStyles } from "./style";


interface Props {
    navigation: any; // Add type for navigation prop
}
export function SignIn({ navigation }: Props) {
    return (
        <View style={signInStyles.container}>
            <View style={{ paddingHorizontal: 10, width: "100%", gap: 5 }}>
                <Image style={signInStyles.imageShape} source={require("../../../assets/shape.png")} />

                <Text style={[signInStyles.title, { paddingTop: 134 }]}>Welcome Back</Text>
                <View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <Image style={signInStyles.imageLogin} source={require("../../../assets/login.png")} />
                </View>
                <Input label="Email" placeholder="mary.elliot@mail.com" />
                <Input label="Password" secureTextEntry={true} placeholder="*****" />
                <Text style={[signInStyles.signUp, { width: "100%", textAlign: "right" }]}>Forgot Password?</Text>
            </View>
            <TextButton label={"Login"} marginTop={140} />
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                paddingTop: 10
            }}>
                <Text style={signInStyles.account}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Login', {}) }}>
                    <Text style={signInStyles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>)
}