import {useState} from "react";
import AppButton from "../../shared/button";
import AppInput from "../../shared/input";
import './form.css'

export default function Form({
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
                <AppInput placeholder="Title" name={'title'} value={state.title} onChange={setProperty}></AppInput>
                <AppButton cb={onCreateNote}>Create Note</AppButton>

            </div>
        </>
    )
    function onCreateNote(){
        if (state.title === '') {
            state.title = 'there is no note'
        }else{
            cb(state)
            clearInput()
        }
    }
    function clearInput(){
        state.title = ''
    }
}