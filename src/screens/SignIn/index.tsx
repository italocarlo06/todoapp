import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { useToast } from "../../hooks/useToast";
import { signInStyles } from "./style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../db/firebase";


interface Props {
    navigation: any; // Add type for navigation prop
}
export function SignIn({ navigation }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { error: errorToast, sucess, info } = useToast();

    function clearFields() {
        setEmail("");
        setPassword("");
        setIsLoading(false);
    }

    const userLogin = () => {
        if (email === '' && password === '') {
            info('Enter details to signin!')
        } else {
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    sucess('User logged-in successfully!')
                    clearFields();
                    navigation.navigate('Dashboard')
                })
                .catch(error => {
                    setIsLoading(false);
                    errorToast("Email or password incorrect!")
                })
        }
    }
    return (
        <View style={signInStyles.container}>
            <View style={{ paddingHorizontal: 10, width: "100%", gap: 5 }}>
                <Image style={signInStyles.imageShape} source={require("../../../assets/shape.png")} />

                <Text style={[signInStyles.title, { paddingTop: 134 }]}>Welcome Back</Text>
                <View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <Image style={signInStyles.imageLogin} source={require("../../../assets/login.png")} />
                </View>
                <Input label="Email" placeholder="mary.elliot@mail.com" onChangeText={setEmail} value={email} />
                <Input label="Password" secureTextEntry={true} placeholder="*****" onChangeText={setPassword} value={password} />
                <Text style={[signInStyles.signUp, { width: "100%", textAlign: "right" }]}>Forgot Password?</Text>
            </View>
            <TextButton label={"Login"} marginTop={140} isSubmitting={isLoading} onClick={userLogin} />
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                paddingTop: 10
            }}>
                <Text style={signInStyles.account}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register', {}) }}>
                    <Text style={signInStyles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>)
}