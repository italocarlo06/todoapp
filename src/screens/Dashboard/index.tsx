import { Image, View, Text, FlatList } from "react-native";
import { Avatar } from "react-native-paper";
import { dashboardStyles } from "./style";
import { Checkbox } from "../../components/Checkbox";
import { auth } from "../../db/firebase";
interface Props {
    navigation: any; // Add type for navigation prop
}

interface TaskInfo {
    id: string;
    isDone: boolean;
    description: string;
}
export function Dashboard({ navigation }: Props) {

    const user = auth.currentUser;

    if (!user)
        navigation.navigate('SignIn', {})


    const tasks: TaskInfo[] = [
        {
            id: "1",
            isDone: false,
            description: "Breakfeast"
        },
        {
            id: "2",
            isDone: true,
            description: "Learning Programming"
        },
        {
            id: "3",
            isDone: true,
            description: "Studying English"
        },
        {
            id: "4",
            isDone: false,
            description: "Breakfeast"
        },
        {
            id: "5",
            isDone: true,
            description: "Learning Programming"
        },
        {
            id: "6",
            isDone: true,
            description: "Studying English"
        }
    ]

    const renderCardRows = (tasks: Array<TaskInfo>) => {


        return (<FlatList style={dashboardStyles.taskItems}
            contentContainerStyle={{ maxHeight: 200, width: "100%" }}
            numColumns={1}
            data={tasks}
            keyExtractor={(task) => task.id}
            scrollEnabled={true}
            renderItem={({ item, index }) => {
                return (
                    <Checkbox checked={item.isDone} label={item.description} />
                    //<Text>{item.description}</Text>
                );
            }}
        />);
    };
    return (
        <View style={dashboardStyles.container}>
            <Image style={dashboardStyles.imageShape} source={require("../../../assets/shape2.png")} />
            <View style={dashboardStyles.profile}>
                <Avatar.Text size={100} label="IC" />
                <Text style={dashboardStyles.profileName}>Welcome {user?.displayName}!</Text>
            </View>
            <View style={dashboardStyles.taskContainer}>
                <Image style={dashboardStyles.clock} source={require("../../../assets/clock.png")} />
                <View style={dashboardStyles.taskList}>
                    <Text style={dashboardStyles.taskTitle}>Task List</Text>
                    <View style={dashboardStyles.taskCard}>
                        <View style={dashboardStyles.taskCardHeader}>
                            <Text style={dashboardStyles.taskCardHeaderTitle}>Daily Tasks</Text>
                            <Image style={{ height: 20, width: 20 }} source={require("../../../assets/pluscircle.png")} />
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-start", width: "100%" }}>
                            {renderCardRows(tasks)}
                        </View >
                    </View>
                </View>

            </View>

        </View>
    )
}