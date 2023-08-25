
import Cards from "./components/Cards"
import data from './data/data.json'

const App = () => {
  return (
    <>
      {
        data.map( item => {
          return (
            <Cards key={item.id} channel={item.channel} des={item.des}/>
          )
        })
      }
    </>
  )
}


export default App