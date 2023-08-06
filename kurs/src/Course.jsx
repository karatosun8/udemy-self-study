
function Course({id,content,title,price,removeOneCourse}){
    // console.log(id)
    return(
        <div className="cardTitlePrice">
           <h1 className="cardTitle">{title}</h1>
           <p>{content} </p>
           <h3 className="cardPrice">{price} USD </h3>
           <button className="cardDeleteBtn" onClick={()=>removeOneCourse(id)} >Sil</button>

        </div>
    )
}
export default Course