import { Image, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { loginStyles } from "./style";


interface Props {
    navigation: any; // Add type for navigation prop
}

export function Register({ navigation }: Props) {
    return (
        <View style={loginStyles.container}>
            <View style={{ paddingHorizontal: 10, width: "100%", gap: 5 }}>
                <Image style={loginStyles.imageShape} source={require("../../../assets/shape.png")} />
                <Text style={[loginStyles.title, { paddingTop: 180 }]}>Welcome OnBoard</Text>
                <Text style={loginStyles.subTitle}>Lets help you in completing your tasks</Text>
                <Input label="Full Name" keyboardType="default" placeholder="Mary Elliot" />
                <Input label="Email" placeholder="mary.elliot@mail.com" />
                <Input label="Password" secureTextEntry={true} placeholder="*****" />
                <Input label="Confirm Password" secureTextEntry={true} placeholder="*****" />
            </View>
            <TextButton label={"Register"} marginTop={140} />
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                paddingTop: 10
            }}>
                <Text style={loginStyles.account}>Already have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SignIn', {}) }}>
                    <Text style={loginStyles.signIn}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </View>)
}