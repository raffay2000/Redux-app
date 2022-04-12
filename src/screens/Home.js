import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { authentication} from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";


// import {useSelector,useDispatch} from 'react-redux'
// import { increment,decrement,del,multyby10,minus10} from '../redux/actions/HomeAction'

export default function Home({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  

  const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((data) => {
        // Signed in
        const user = data.user;
        console.log("Email", user.email);
        navigation.replace("Profile", { email });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((data) => {
        // Signed in
        const user = data.user;
        navigation.navigate("Profile", { email });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (email.length > 0 || password.length > 0) {
          setErr(true);
        }
      });
  };
  // const loginWithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(authentication,provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };
  // const counter = useSelector(state=>state.HomeReducer.counter)
  // const dispatch = useDispatch()
  return (
    // <View style={{justifyContent:'center',alignItems:'center'}}>
    //   {/* // Redux COding */}
    //   {/* <Button title='PLUS-10'  onPress={()=>{dispatch(multyby10(counter))}}/>
    //   <Button title='+'  onPress={()=>{dispatch(increment(counter))}}/>
    //   <Text>{counter}</Text>
    //   <Button title='-'  onPress={()=>{dispatch(decrement(counter))}}/>
    //   <Button title='MINUS-10'  onPress={()=>{dispatch(minus10(counter))}}/>
    //   <Button title='Reset'  onPress={()=>{dispatch(del(counter))}}/> */}
    //     <Text style={{fontSize:88}}>FireBase</Text>
    // </View>
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
            onBlur={() => {
              setErr(false);
            }}
          />
        </View>
        <Text style={{ color: "red" }}>
          {err === true ? "Incorrect Email or Password" : ""}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={loginWithGoogle} style={styles.button}>
            <Text style={styles.buttonText}>Login With Google</Text>
          </TouchableOpacity> */}
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
