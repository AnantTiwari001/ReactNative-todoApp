import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={styles.todo}
      >
        <Text style={{ color: "white", padding: 8 }}>{props.text}</Text>
        <TouchableOpacity onPress={()=>props.onDelete(props.id)} >
          <Image
            source={require("../assets/deleteicon48.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    // padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white", // does not get inherited by text tag
  },
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
});
