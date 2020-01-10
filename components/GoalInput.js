import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredItem,setEnteredItem] = useState('');

    const ItemInputChanged = (enteredItem) => {
        setEnteredItem(enteredItem)
    }

    const addItemHnadler = ()=>{
        props.AddtoList(enteredItem)
        setEnteredItem('')
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                    <TextInput placeholder='Add New Item' 
                               style={styles.input}
                               onChangeText={ItemInputChanged}
                               value={enteredItem}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='CANCEL' color='red' onPress={props.onCancel} /></View>
                        <View style={styles.button}><Button title='ADD' onPress={addItemHnadler} /></View>
                    </View> 
            </View>
        </Modal> 
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
      },
      input:{
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:10
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
      },
      button:{
          width:'40%'
      }
  });

export default GoalInput;