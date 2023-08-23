import { StyleProp, TextInput, TextStyle, View, TextInputProps, Text } from "react-native";
import { inputStyles } from "./style";


interface IPropsInput extends TextInputProps {
    label: string,
    style?: StyleProp<TextStyle>
    marginTop?: number
}
const Input: React.FC<IPropsInput> = ({ label, style, ...rest }) => {
    return (
        <View style={inputStyles.container}>
            <Text style={inputStyles.label}>{label}</Text>
            <TextInput style={inputStyles.input} {...rest} />
        </View>
    )
}

export { Input }
