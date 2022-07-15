
import Note from "../note/note";

export default function NoteList({notes, onEdit}){
    return <div className='list_container'>
        {
            notes.map((e,i)  => <Note note={e} key = {i} cb={()=> onEdit(e)}  ></Note>)

        }

    </div>
}