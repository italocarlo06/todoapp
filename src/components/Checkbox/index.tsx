import { useState } from "react";
import { View, Text } from "react-native";
import { checkboxStyles } from "./style";
import ExpoCheckbox from 'expo-checkbox';

interface CheckboxProps {
    id?: string;
    checked: boolean;
    label: string;
}

export const Checkbox = ({checked, label}: CheckboxProps) => {
    const [isSelected, setSelection] = useState(checked);
  
    return (
      <View style={checkboxStyles.container}>
        <View style={checkboxStyles.checkboxContainer}>
          <ExpoCheckbox
            value={isSelected}
            onValueChange={setSelection}
            style={checkboxStyles.checkbox}
          />
          <Text style={checkboxStyles.label}>{label}</Text>
        </View>        
      </View>
    );
  };