import {useState} from 'react'

const values =['A', 'B', 'C', 'D', 'E', 'F','0', '1', '2', '3', '4', '5','6', '7', '8', '9'] 
const [color,setColor] = useState('#FFFFFF');
    let hexColor = "#";
    for (let i = 0; i < 6; i++)
        hexColor += values[Math.floor(Math.random() *(values.length -1))]
      setColor(hexColor)

const App = () => {
  return (
    <div style={{backgroundColor:{hexColor}}}>
      <h1 className="text-3xl font-bold underline">
        {hexColor}
      </h1>
    </div>
  )
}

export default App