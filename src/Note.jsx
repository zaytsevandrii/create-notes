import React, { useState } from "react"
import "./App.scss"

const Note = ({id,onDelete,text}) => {
      const [hid,setHid] = useState('hidden')
      const toggleClassCheck=()=>{
            setHid(hid=>hid?'':'hidden')
      }
    return (
        <div className="note">
            <div className="tools">
                <button className="edit" onClick={toggleClassCheck}>
                    <i className="fas fa-edit"></i>
                </button>
                <button className="delete" onClick={()=>onDelete(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

            <div className={`main ${text?'':hid}`}></div>
            <textarea className={`${text?hid:''}`} name="" id="" cols="30" rows="10"></textarea>
        </div>
    )
}

export default Note
