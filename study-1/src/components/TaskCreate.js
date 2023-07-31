import { useState } from "react";

function TaskCreate() {

        const [title,setTitle] = useState("")
        const [taskDesc,setTaskDesc]=useState("")
        // console.log(title,taskDesc)

        const handleChange =(event)=> {
            setTitle(event.target.value)
        }
        const handleTaskChange=(event)=>{
            setTaskDesc(event.target.value)
        }
        
  return (
    <div className="task-create">
      <h3>Lütfen Task Giriniz</h3>
      <form className="task-form">
        <label className="task-label" >Başlık</label>
        <input className="task-input" value={title} onChange={handleChange}/>
        <label className="task-label">Task Giriniz</label>
        <textarea className="task-input" value={taskDesc} rows={5} onChange={handleTaskChange} />
        <button className="task-button">Oluştur</button>
      </form>
    </div>
  );
}
export default TaskCreate;
