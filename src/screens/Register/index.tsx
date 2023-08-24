import Toast from 'react-native-toast-message';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { loginStyles } from "./style";
import { useState } from "react";
import { auth } from "../../db/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"


interface Props {
    navigation: any; // Add type for navigation prop
}

//const auth = getAuth(app)
interface ToastProps {
    type: "success" | "error" | "info"
    text: string;
}

export function Register({ navigation }: Props) {
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");
    const [name, setName ] = useState("");
    const [loading, setIsLoading] =useState(false);

    const showToast = ({ type, text }: ToastProps) => {
        Toast.show({
          type,
          text1: text,          
        });

        /*Toast.show({
            type: 'info',
            text1: 'This is an info message'
          });*/
      }

    function clearFields() {
       setEmail("") ,
       setPassword(""),
       setConfirmPassword(""),
       setName("")
    }

    const registerUser = () => {
        if(email === '' && password === '') {
          alert('Enter details to signup!')
        } else if (password !== confirmPassword){
            alert('Password does not match with confirmation!')
        }
        else {
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
            updateProfile(res.user, {
              displayName: name
            });
            setIsLoading(false)
            showToast({type: 'success', text:"User registered successfully!"});
            clearFields();
            navigation.navigate('SignIn')
          })
          .catch(error => showToast({type: "error", text:error.message}));
        }
      }
    return (
        <View style={loginStyles.container}>
            <View style={{ paddingHorizontal: 10, width: "100%", gap: 5 }}>
                <Image style={loginStyles.imageShape} source={require("../../../assets/shape.png")} />
                <Text style={[loginStyles.title, { paddingTop: 180 }]}>Welcome OnBoard</Text>
                <Text style={loginStyles.subTitle}>Lets help you in completing your tasks</Text>
                <Input label="Full Name" keyboardType="default" placeholder="Mary Elliot"  onChangeText={setName} value={name}/>
                <Input label="Email" placeholder="mary.elliot@mail.com" onChangeText={setEmail} value={email}/>
                <Input label="Password" secureTextEntry={true} placeholder="*****" onChangeText={setPassword} value={password}/>
                <Input label="Confirm Password" secureTextEntry={true} placeholder="*****" onChangeText={setConfirmPassword} value={confirmPassword}/>
            </View>
            <TextButton label={"Register"} marginTop={140} onClick={registerUser} />
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