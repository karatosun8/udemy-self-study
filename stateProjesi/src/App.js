import Courses from "./Courses"
import {useState} from "react"
import "./App.css"

function getRandomCourse (){
  const courseArray = ["Angular","Bootstrap","Developer","Js"]
  return courseArray[Math.floor(Math.random()*courseArray.length)]//Math.random sıfırla bir arası rasgele sayı seçer
  
}



function App() {
  const [courses,setCourses] = useState([])
    const handleClick =()=>{
      setCourses([...courses,getRandomCourse()])   //Daha önceki kurslar silinmeden eklenmesini istiyorsak ...courses i array içine eklemeliyiz.aksi halde önceki kursları göremeyiz
    }
  
  return (
    <div className="App">
      <button className="appButon" onClick={handleClick}>Kurs Ekle </button>
      <div className="card-container ">
      {
        courses.map((course,index)=>{
return <Courses key={index} courseName= {course} className= "courseList "/> //key değerini vermemiz gerekir çünkü bu sayede course nin farklı komponentlere ait olduğunu anlaması gerekir.aksi halde hata alırız
        })
      }
      
      </div>
    </div>
  )
}

export default App
