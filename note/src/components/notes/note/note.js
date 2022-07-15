
import './note.css'
export default function Note({note, cb}){
    return (
        <div onClick={cb} className= 'note_container'>
            <div>{`Title:${note.title}`} </div>

        </div>
    )

}