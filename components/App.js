import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [itemList,setItemList] = useState([]);

  const AddtoList = goalItem =>{
    setItemList(currentItems => [...currentItems,{key:Math.random().toString(),value:goalItem}])
  }

  const removeList = goalId => {
    setItemList(currentItems =>
      {
        return currentItems.filter((item) => item.key !== goalId);
      });
  }

  return (
    <View style = {styles.container}>
      <GoalInput AddtoList = {AddtoList} />
      <FlatList data = {itemList}
                renderItem = {itemData => <GoalItem id={itemData.item.key} onDelete = {removeList} title = {itemData.item.value} />
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
});
