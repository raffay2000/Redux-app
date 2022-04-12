// import { View, Text } from 'react-native'
// import React from 'react'

// export default function HomeAction() {
//   return (
//     <View>
//       <Text> HomeAction </Text>
//     </View>
//   )
// }
import {INCREMENT,DECREMENT,DEL,MULTYBY10, MINUS10} from '../constants'

export const increment = (counter)=>{
    let newVal = counter + 1;
return{
    type:INCREMENT,
    payload:newVal

}
}
export const decrement = (counter)=>{
    let newVal = counter - 1;
return{
    type:DECREMENT,
    payload:newVal

}
}
export const del = ()=>{
    let newVal = 0;
return{
    type:DEL,
    payload:newVal
}
}
export const multyby10 = (counter)=>{
    let newVal = counter +10;
return{
    type:MULTYBY10,
    payload:newVal
}
}
export const minus10=(counter)=>{
    let newVal=counter-10
    return{
        type:MINUS10,
        payload:newVal
    }
}