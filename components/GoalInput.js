import { View, TextInput, StyleSheet, Button, Modal, Image, Alert } from "react-native";
import { useState, useEffect } from "react";

export default function GoalInput(props) {
  const [blur, setBlur] = useState(10);
  useEffect(() => {
    const interval= setInterval(() => {
      setBlur((preVale)=>{
        if (preVale>0){
          return preVale-1;
        }else{
          clearInterval(interval);
        }
      })
    }, 1000/20);
  }, [])
  
  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/todo-logo.png')} blurRadius={blur} />
        <TextInput
          style={styles.textInput}
          placeholder="Your first goal!"
          onChangeText={props.handleChange}
          value={props.text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color='#5e0acc'
              onPress={() => {
                props.handlePress(props.id);
                props.changeVisible();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button color='#f31282' title="Cancel" onPress={props.changeVisible} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    color:'120438',
    borderRadius:6,
    width: "80%",
    padding: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 110,
    marginHorizontal: 8,
  },
  image:{
    margin:20
  }
});
