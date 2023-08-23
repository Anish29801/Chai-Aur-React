import { useState } from 'react'
import './App.css'

const App = () => {

  const [value,setValue] = useState(0)
  return (
    <>
      <h2>Counter App</h2>
      <h2>{value}</h2>
      <button className='b1' onClick={()=> setValue(value+1)}>Increase</button>
      <button className='b2' onClick={() => setValue(value-1)}>Decrease</button>
    </>
  )
}

export default App