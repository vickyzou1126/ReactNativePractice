import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredItem,setEnteredItem] = useState('');
  const [itemList,setItemList] = useState([]);

  const ItemInputChanged = (enteredItem) => {
    setEnteredItem(enteredItem)
  }
  const AddtoList = () =>{
    setItemList(currentItems => [...currentItems,{key:Math.random().toString(),value:enteredItem}])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Add New Item' 
                  style={styles.input}
                  onChangeText={ItemInputChanged}
                  value={enteredItem}/>
        <Button title='ADD' onPress={AddtoList} />
      </View>
      <FlatList data={itemList}
                renderItem={
                  itemData => (<View><Text>{itemData.item.value}</Text></View>)
                }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
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
