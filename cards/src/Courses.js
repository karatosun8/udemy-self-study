import React from "react";

const Courses = ({ title, description, img }) => {
  // console.log(props);
  // const title=props.title
  // const description=props.description
  // const {title,description} =props;
  return (
    <div>
    <img src={img} style={{width:"150px"}} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default Courses;
