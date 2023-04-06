import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 2
}

const reducer = (state,action)=>{
    switch (action.type) {
        case 'increment':
            return {...state,firstCounter: state.firstCounter + action.value} 
        case 'decrement':
            return {...state,firstCounter: state.firstCounter - action.value}
        case 'increment5':
                return {...state,firstCounter: state.firstCounter + action.value}
        case 'increment10':
                return {...state,firstCounter: state.firstCounter + action.value}
        case 'decrement2':
                    return {...state,secondCounter: state.secondCounter - action.value}
        case 'increment2':
                    return {...state,secondCounter: state.secondCounter + action.value}
        case 'reset':
                return initialState
        default:
            return state
    }
}

function CountTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2> Count {count.firstCounter}</h2>
        <h2> Count {count.secondCounter}</h2>
        <button onClick={()=> {dispatch({type: 'decrement', value:1})}}>Decrement</button>
        <button onClick={()=> {dispatch({type: 'increment', value: 1})}}>Increment</button>
        <button onClick={()=> {dispatch({type: 'increment5', value: 5})}}>Increment 5</button>
        <button onClick={()=> {dispatch({type: 'increment10', value: 10})}}>Increment 10</button>

        <div>
            <button onClick={()=> {dispatch({type: 'decrement2', value: 1})}}>Decrement Counter 2</button>
            <button onClick={()=> {dispatch({type: 'increment2', value: 1})}}>Increment Counter 2</button>
        </div>


        <button onClick={()=> {dispatch({type: 'reset'})}}>Reset</button>
    </div>
  )
}

export default CountTwo