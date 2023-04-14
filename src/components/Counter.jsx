import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterRest, counterSum, counterSumarNumero, setTemporal } from '../redux/actions/counterActions'


const Counter = () => {
  const {counter,temporal } = useSelector(state => state.counter);
  const state = useSelector(state => state);
  console.log(state)
  const dispatch = useDispatch()
  const handleChange = (e) => dispatch(setTemporal(Number(e.target.value))) 
  return (
    <>
    <h1>Counter : {counter}</h1>
     <input type="number" onChange={handleChange} />
      <button onClick={() => dispatch(counterSumarNumero(temporal))}>Sumar : {temporal}</button>
     <button onClick={() => dispatch(counterSum()) }>Sumar</button>
     <button onClick={() => dispatch(counterRest()) }>Restar</button>
     <button onClick={() => dispatch(counterSumarNumero(5)) }>Sumar + 5</button>
    </>
  )
}

export default Counter