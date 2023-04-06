import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state,action)=>{
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CountThree() {
    const [count, dispatch] = useReducer(reducer,initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer,initialState)

  return (
    <div>
        <h1>Count One - {count}</h1>
        <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{dispatch('increment')}}>Increment</button>
        <button onClick={()=>{dispatch('reset')}}>Reset</button>

        <h1>Count Two - {countTwo}</h1>

        <button onClick={()=>{dispatchTwo('decrement')}}>Decrement</button>
        <button onClick={()=>{dispatchTwo('increment')}}>Increment</button>
        <button onClick={()=>{dispatchTwo('reset')}}>Reset</button>
    </div>
  )
}

export default CountThree