import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredItem,setEnteredItem] = useState('');

    const ItemInputChanged = (enteredItem) => {
        setEnteredItem(enteredItem)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Add New Item' 
                    style={styles.input}
                    onChangeText={ItemInputChanged}
                    value={enteredItem}/>
            <Button title='ADD' onPress={() => props.AddtoList(enteredItem)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      input:{
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10
      }
  });

export default GoalInput;