import Angular from "./images/angular.png"
import Bootstrap from "./images/bootstrap.jpg"
import Developer from "./images/developer.png"
import Js from "./images/js.png"



const courseMap={
    Angular,
    Bootstrap,
    Developer,
    Js
}



function Courses ({courseName}){
    // console.log(courseName);
    return(
<div >
    <img className=""  width={"250px"} height={"200px"} src={courseMap[courseName]}/>

</div>

    )
}

export default Courses