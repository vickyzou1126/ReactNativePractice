import React,{useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [itemList,setItemList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const AddtoList = goalItem =>{
    setItemList(currentItems => [...currentItems,{key:Math.random().toString(),value:goalItem}])
    setIsAddMode(false);
  }

  const removeList = goalId => {
    setItemList(currentItems =>
      {
        return currentItems.filter((item) => item.key !== goalId);
      });
  }

  const cancelAdditionalHandler = ()=>{
    setIsAddMode(false);
  }

  return (
    <View style = {styles.container}>
      <Button title="Add New Item" onPress={() => {setIsAddMode(true)}} />
      <GoalInput visible={isAddMode} AddtoList = {AddtoList} onCancel = {cancelAdditionalHandler} />
      <FlatList data = {itemList}
                renderItem = {itemData => <GoalItem id={itemData.item.key}
                                                    onDelete = {removeList} 
                                                    title = {itemData.item.value} />
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
});
