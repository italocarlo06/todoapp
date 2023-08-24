import { Image, View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { dashboardStyles } from "./style";


interface Props {
    navigation: any; // Add type for navigation prop
}
export function Dashboard({ navigation }: Props) {
    return (
        <View style={dashboardStyles.container}>
            <Image style={dashboardStyles.imageShape} source={require("../../../assets/shape2.png")} />
            <View style={dashboardStyles.profile}>
                <Avatar.Text size={100} label="IC" />
                <Text style={dashboardStyles.profileName}>Welcome Italo Carlo!</Text>
            </View>
            <View style={dashboardStyles.taskContainer}>
                <Image style={dashboardStyles.clock} source={require("../../../assets/clock.png")} />
                <Text style={dashboardStyles.title}>Task List</Text>
            </View>

        </View>
    )
}