import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals(prevState=> [...prevState, {text:enteredGoalText, id:Math.random().toString()}])
  }
  return (
    <View style={styles.appContainer}>
         <View style={styles.inputContainer}> 
          <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
          <Button title='Add Goal' onPress={addGoalHandler}/>
         </View>
         <View style={styles.goalContainer}>
          <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={(itemData)=>{
            return(
            <View style={styles.eachGoalContainer}>
              <Text style={styles.eachGoalText}>{itemData.item.text}</Text>
            </View>
            )
          }}
          keyExtractor={(item,index)=>{
            return item.id
          }}
          />
          
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  padding:60,
  paddingHorizontal:16,
  flex:1,
  backgroundColor:'#1C1C1E'
 },
 inputContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:"100%",
  alignItems:'center',
  marginBottom:24,
  flex:1,
  borderBottomWidth:2,
  borderBottomColor:'white'
 },
 textInput:{
  borderWidth:2,
  borderColor:"white",
  color:'white',
  fontSize:18,
  width:'70%',
  borderRadius:6,
  marginRight:8,
  padding:8
 },
 goalContainer:{
  flex:4
 },
 eachGoalContainer:{
   backgroundColor:'#007AFF',
   borderRadius:6,
   padding:8,
   margin:8,
   
 },
 eachGoalText:{
  color:'white',
  fontSize:18
 }
});
