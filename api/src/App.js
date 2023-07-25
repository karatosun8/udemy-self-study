import SearchHeader from "./SearchHeader"
import "./App.css"


function App() {
  const handleSubmit=(term)=>{
    
    console.log(term);

  }
  return (
    <div className="App">
      <h1>Hello React</h1>
      <SearchHeader search={handleSubmit}/>
    </div>
  )
}

export default App
