import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import TodoItem from "../../src/components/TodoItem";
import { authentication, db } from "../../firebase";
import { collection, getDocs, setDoc, doc,deleteDoc, addDoc} from "firebase/firestore/lite";

const TodoApp = () => {
  const [Todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  // const [getTitle, setGetTitle] = useState("");
  // const [getDes, setGetDes] = useState("");
  // const [userId, setUserId] = useState(0);
//   const [showTodo, setShowTodo] = useState(false);


    useEffect(()=>{
        GetData();
    },[Todo])

  const AddTodo = () => {
    // let obj = {
    //   // id: userId,
    //   title: title,
    //   des: des,
    // };
    // const tempArr = [...Todo, obj];
    if (title == "" || des == ""){
      alert("Todo (Title or Description) is Empty");
    } else {
      // setTodo(tempArr);
      // setTodo()
      SetData2();
    }
  };
  // const onDelete = (index) => {
  //   let itemCopy = [...Todo];
  //   itemCopy.splice(index, 1);
  //   setTodo(itemCopy);
  // };
  const GetData = async () => {
    const id = authentication.currentUser.uid;
    const citiesCol = collection(db, `Todos/${id}/TodoList`);
    const citySnapshot = await getDocs(citiesCol);
    const data = citySnapshot.docs.map(item=> { return {id: item.id, data: item.data()}})
    // console.log(data)
    setTodo(data)
    // console.log(data)
    // const todoTitle = citySnapshot.docs.map((doc) => doc.data().your_todo_title);
    // const todoDes = citySnapshot.docs.map((doc) => doc.data().your_todo_des);
    // console.log(citySnapshot.docs.map((doc) => doc.data().your_todo_title));
    // setTitle(citySnapshot.docs.map((doc) => doc.data().your_todo_title));
    // setDes(citySnapshot.docs.map((doc) => doc.data().your_todo_des));
  };
  const SetData2 = async () => {
    const id = authentication.currentUser.uid;
    const email = authentication.currentUser.email;
    //   let Todos=(db,"Todos","BywFzTiPAVhmitTp04dZ9Ndyyd72")
//    return alert(authentication.currentUser.uid)
    const docRef = doc(db, "Todos", id);
    await setDoc(docRef,{
        id,
        email 
   });
    await addDoc(collection(db, `Todos/${id}/TodoList`), {
        your_todo_title: title,
          your_todo_des: des
    })
    setTitle("");
    setDes("");
    // await setDoc(collection(db, ""))
    // await addDoc(collection(db, ""))
    // await setDoc(doc(db,"Todos/BywFzTiPAVhmitTp04dZ9Ndyyd72/Todolist"), {
    // //   id: 1,
    //   your_todo_title: title,
    //   your_todo_des: des
    // });
    // setUserId(userId+1)
  };
  const delData=async(id)=>{
    const uid = authentication.currentUser.uid
    // const TodoRef = doc(db, `Todos/${id}/TodoList`)
    // console.log(pid)
    // console.log(id)
    await deleteDoc(doc(db,`Todos/${uid}/TodoList`,id));
  }
  return (
    <View>
      <Text style={{ right: 80 }}>City</Text>
      <TextInput
        placeholder="Add Your Todo"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: 200,
          borderRadius: 5,
          padding: 8,
          marginLeft:12
        }}
        
      />
      {/* <Text>{userId}</Text> */}
      <Text style={{ right: 80 }}>City</Text>
      <TextInput
        placeholder="Add Your Todo Description"
        value={des}
        onChangeText={(text) => setDes(text)}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: 200,
          borderRadius: 5,
          padding: 8,
          marginLeft:12
        }}
      />
      <TouchableOpacity
        onPress={() => {
          AddTodo();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
      {
      Todo.map((item,index) => {
        return <TodoItem key={index} text={item.data.your_todo_title} desc={item.data.your_todo_des} onPress={()=>{
          delData(item.id);
          // onDelete(index);
        }}/>;
      })
      }
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginLeft:12,
    marginTop:10
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
