import { DECREMENT, INCREMENT,DEL,MULTYBY10 ,MINUS10} from "../constants"


let initialState= {
    counter:0
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT :
            return{
                ...state,
                counter:action.payload
            }
            
        case DECREMENT :
            return{
                ...state,
                counter:action.payload
            }
        case DEL :
            return{
                // ...state,
                counter:action.payload
            }
        case MULTYBY10 :
                return{
                    ...state,
                    counter:action.payload
                }
        case MINUS10 :
                    return{
                        ...state,
                        counter:action.payload
                    }
            
    
        default:
            return state
            
    }

}