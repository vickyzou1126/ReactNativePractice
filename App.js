import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [itemList,setItemList] = useState([]);

  const AddtoList = goalItem =>{
    setItemList(currentItems => [...currentItems,{key:Math.random().toString(),value:goalItem}])
  }

  return (
    <View style = {styles.container}>
      <GoalInput AddtoList = {AddtoList} />
      <FlatList data = {itemList}
                renderItem = {itemData => <GoalItem title = {itemData.item.value} />
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
});
