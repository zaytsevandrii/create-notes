import { useState } from "react"
import "./App.scss"
import Note from "./Note"

function App() {
    const [note, setNote] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])
    const [text,setText]= useState('')

    const onDelete=(id)=>{
        setNote(note.filter(el=>el.id !== id))
    }
    const onAdd=()=>{
        const newId=Math.floor(Math.random()*10000)
        setNote([...note, { id: newId}])
    }
    return (
        <div className="App">
            <button className="add" id="add" onClick={onAdd}>
                <i className="fas fa-plus"></i>Add Note
            </button>
            {note.map((el) => (
                <Note key={el.id} onDelete={onDelete} {...el} text={text}/>
            ))}
        </div>
    )
}

export default App
