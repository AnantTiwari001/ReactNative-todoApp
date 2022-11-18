import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Button, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function Lesson1() {
  const [goalInput, changeGoalInput] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    retrieveData();
  }, [])

  useEffect(() => {
    storeData();
}, [courseGoals]);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
        'GoalsLocal',
        JSON.stringify(courseGoals)
      );
    } catch (error) {
      // Error saving data
      Alert.prompt('error storing locally');
    }
  };
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('GoalsLocal');
      if (value !== null) {
        // We have data!!
        console.log(JSON.parse(value));
        setCourseGoals(JSON.parse(value))
      }
    } catch (error) {
      // Error retrieving data
      Alert.prompt('error getting data');
    }
  };

  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    changeGoalInput(enteredText);
  };
  const goalAddHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalInput, key: Math.random().toString() },
    ]);
    changeGoalInput("");
    storeData();
  };
  const handleDelete = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
    storeData();
  };
  const changeVisible = () => {
    setModalVisible((pre) => {
      return !pre
    });
  };
  return (
    <View style={styles.appContainer}>
      <Button title="Add new Goal" onPress={changeVisible} />
      <GoalInput
        handleChange={goalInputHandler}
        handlePress={goalAddHandler}
        text={goalInput}
        visible={modalVisible}
        changeVisible={changeVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.key}
                onDelete={handleDelete}
                text={itemData.item.text}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />

        {/* <ScrollView>  //It is not optimised to use it for lists
        {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={{color:'white'}}>{goal}</Text>
          </View>
        ))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});
