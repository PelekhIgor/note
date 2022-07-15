import {useState} from "react";
import AppInput from "../../../shared/input";
import AppButton from "../../../shared/button";



export default function NoteEdit({
                                     cb,
                                     note= {title:''},
                                 }) {
    const [state, setstate] = useState(note)

    function setProperty(note){

        const newState = {...state}// скопировали наш state
        newState[note.target.name] = note.target.value // обратились к его существующему проперти и заменили на те данные которые к нам прищли
        setstate(newState)  // засетили непосредственно в состояние нашего компонента
    }
    return (
        <>
            <div className="create_note">
                <AppInput  placeholder="Title" name={'title'} value={state.title} onChange={setProperty}></AppInput>
                <AppButton cb={() => cb(state) }>Edit Note</AppButton>

            </div>
        </>
    )



}