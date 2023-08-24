import { useState } from "react";
import { View, Text } from "react-native";
import { checkboxStyles } from "./style";
import ExpoCheckbox from 'expo-checkbox';

interface CheckboxProps {
  id?: string;
  checked: boolean;
  label: string;
}

export const Checkbox = ({ checked, label }: CheckboxProps) => {
  const [isSelected, setSelection] = useState(checked);

  //style={checkboxStyles.checkboxContainer}
  //style={checkboxStyles.checkbox}
  //style={checkboxStyles.label}
  /*<ExpoCheckbox
  value={isSelected}
  onValueChange={setSelection}

  <View style={checkboxStyles.container}>
      <View >

        <Text>{label}</Text>
      </View>
    </View>

/>*/
  return (
    <View style={checkboxStyles.checkboxContainer}>
      <ExpoCheckbox
        value={isSelected}
        onValueChange={setSelection}
        style={checkboxStyles.checkbox}
        color={"#56C5B6"}
      />
      <Text style={[checkboxStyles.label, isSelected ? { textDecorationLine: 'line-through' } : {}]}>{label}</Text>
    </View>


  );
};