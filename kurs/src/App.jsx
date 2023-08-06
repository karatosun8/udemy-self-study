import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react' //refresh yaptığımızda db.json daki veriler gelsin diye
import axios from "axios"
import Courses from './Courses'
import Loading from './Loading'


function App() {
  const [courses,setCourses] = useState([])
  //başlangıçta loading görünmesini istediğimizden dolayı useState "true" verdik 
  const [loading,setLoading] =useState(true)

  const deleteCourse=(id)=>{
    const afterDeletedCourses =courses.filter((course)=> course.id !== id);
    setCourses(afterDeletedCourses)
    console.log(afterDeletedCourses)
  }


  const fetchCourses = async ()=>{
    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:3000/courses`);
    setCourses(response.data)
    setLoading(false);

    }
    //Herhangibir hata varsa veya yükleme esnasında loading göstermek istiyorsak
    catch (error){
      //hata aldığımızda loading false olacak
      setLoading(false);

    }
    }

useEffect(()=>{
  fetchCourses()

},[])
  return (
    <div className='App'>
      {loading ? (
        <Loading/>
      ):(
        <Courses courses={courses} removeCourse={deleteCourse}/>
      )}
      

     
    </div>
  )
}

export default App
