import {TouchableOpacity,StyleProp,TextStyle,Text } from 'react-native';
import { buttonStyles } from "./style";

interface IPropsTextButton {
    label: string ,
    onClick? : ()=>void 
    style? : StyleProp<TextStyle>
    marginTop?: number
}
const TextButton : React.FC<IPropsTextButton> = ({label,onClick,style, marginTop})=>{    
    return (
        <TouchableOpacity style={{...buttonStyles.button, marginTop }} onPress={onClick} >
            <Text style={buttonStyles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export { TextButton }