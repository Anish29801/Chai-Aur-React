import {useCallback,useState} from 'react'

const App = () => {
  const [length,setLength] = useState(8)
  const [numAllowed,setnumAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(true)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(fn,[length,numAllowed,charAllowed,password])
  
  return (
    <>
      <h2>{length}</h2>
    </>
  )
}

export default App