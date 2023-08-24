import { TouchableOpacity, StyleProp, TextStyle, Text, ActivityIndicator } from 'react-native';
import { buttonStyles } from "./style";

interface IPropsTextButton {
    label: string,
    onClick?: () => void
    style?: StyleProp<TextStyle>
    marginTop?: number,
    isSubmitting?: boolean
}
const TextButton: React.FC<IPropsTextButton> = ({ label, onClick, marginTop, isSubmitting = false }) => {
    return (
        <TouchableOpacity style={{ ...buttonStyles.button, marginTop }} onPress={onClick} disabled={isSubmitting}>
            {isSubmitting && <ActivityIndicator size="large" color="#000" style={{ paddingVertical: 15 }} />}
            {!isSubmitting && <Text style={buttonStyles.text}>{label}</Text>}
        </TouchableOpacity>
    )
}

export { TextButton }