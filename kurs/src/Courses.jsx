import Course from "./Course";

function Courses({ courses ,removeCourse}) {
//   console.log(courses)
  return (
    <div>
      <div>
        <h2>Kurslarım</h2>
      </div>
           
      <div className="card-container">
        {courses.map((course) => {
        return  <Course key={course.id} {...course} removeOneCourse={removeCourse} />
        })}
      </div>
    </div>
  );
}
export default Courses;
