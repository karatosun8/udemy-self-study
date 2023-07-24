import {useState} from "react"



function App() {
  const [value,setValue] =useState(0)
  const handleClik = ()=>{
   setValue(value +2)
    
  }
  return (
    <div className="App">
      <div>Kurs Sayısı:{value}</div>
      <button onClick={handleClik}>Kurs Ekle</button>
    </div>
  )
}

export default App
