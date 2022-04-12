import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput
} from "react-native";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { authentication, db } from "../../firebase";
// import { collection, getDocs, setDoc, doc } from "firebase/firestore/lite";

const Profile = ({ route, navigation }) => {
  const signOutID = () => {
    signOut(authentication)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  // const GetData = async () => {
  //   const citiesCol = collection(db, "Todos");
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map((doc) => doc.data());
  //   // console.log(citiesCol);
  //   // setShowName(<FlatList data={cityList} renderItem={your_name}/>);
  //   setShowName(cityList[id].your_name);
  //   setShowClas(cityList[id].your_email);
  //   setShowCity(cityList[id].city_name);
  // };
  const [city, setCity] = useState("");
  const [Clas, setClas] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [showName, setShowName] = useState();
  const [showClas, setShowClas] = useState("");
  const [showCity, setShowCity] = useState("");

  // const SetData = async () => {
  //   await setDoc(doc(db, "Todos", 'BywFzTiPAVhmitTp04dZ9Ndyyd72'), {
  //     // id: id + 1,
  //     your_name: name,
  //     your_email: Clas,
  //     city_name: city,
  //   });
  //   // setId(id + 1);
  //   setCity("");
  //   setClas("");
  //   setName("");
  // };
 

  const { email } = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "700" }}>Email : {email}</Text>
      <TouchableOpacity onPress={signOutID} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      // onPress={GetData}
       style={styles.button}>
        <Text style={styles.buttonText}>Show Latest Data</Text>
      </TouchableOpacity>
      <Text style={{ right: 80 }}>Name</Text>
      <TextInput
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: 200,
          borderRadius: 5,
        }}
      />
      <Text style={{ right: 80 }}>Email</Text>
      <TextInput
        placeholder="Enter Your Email"
        value={Clas}
        onChangeText={(text) => setClas(text)}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: 200,
          borderRadius: 5,
        }}
      />
      <Text style={{ right: 80 }}>City</Text>
      <TextInput
        placeholder="Enter Your City"
        value={city}
        onChangeText={(text) => setCity(text)}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: 200,
          borderRadius: 5,
        }}
      />
      <TouchableOpacity
      //  onPress={SetData}
        style={styles.button}>
        <Text style={styles.buttonText}>Add Info in Database</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{navigation.navigate('TodoApp')}} 
      style={styles.button}>
        <Text style={styles.buttonText}>Go To Add ToDo App</Text>
      </TouchableOpacity>
      <View >
        <Text style={{ fontSize: 25 }}>
          {showName == "" ? "" : `Name : ${showName}`}
          {/* {showName} */}
        </Text>
        <Text style={{ fontSize: 25 }}>
          {showClas == "" ? "" : `Email : ${showClas}`}
        </Text>
        <Text style={{ fontSize: 25 }}>
          {showCity == "" ? "" : `City : ${showCity}`}
        </Text>
        
      </View>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
