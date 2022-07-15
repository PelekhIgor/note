import React from "react";
import Form from "./form/form";
import NoteList from "./notes/notes_list/notes_list";
import './notes_style.css'
import NoteEdit from "./notes/notes_edit/notes_edit";

const notes = []

export default class NotesComponent extends React.Component {
    constructor(props) {
        super(props); // ссылка на конструктор родительского класса
        this.state = {
            currentTodo: null,
            notes,
            isEditeMode: false,


        }
        // При передаче методов объекта в качестве колбэков, возникает проблема – потеря this.
        this.onNewNoteCreate = this.onNewNoteCreate.bind(this)  // привязываем контекст - this с помощью bind
        this.onNoteEdit = this.onNoteEdit.bind(this)
        this.onNoteCreate = this.onNoteCreate.bind(this)


    }

    //единственный обязательный метод в классовом компоненте = render()
    // этот метод будет вызивать сам react когда изменится state
    render() {
        return (
            <>
                <Form cb={this.onNewNoteCreate}></Form>
                <div className='main_container'>
                    <div className='notes_container'>
                        {
                            this.renderNoteContent()
                        }
                    </div>
                </div>
            </>
        )
    }

    renderNoteContent() {
        if (this.state.isEditeMode) {
            return (<NoteEdit
                cb={this.onNoteCreate}
                note={this.state.currentTodo ? this.state.currentTodo : {title: 'yuiyuiyi'}}
            ></NoteEdit>)

        }
        if(!this.state.isEditeMode){
            return (
                <NoteList
                    notes={this.state.notes}
                    onEdit={this.onNoteEdit}
                ></NoteList>
            )
        }

    }


    onNewNoteCreate(note) {
        if (!note.id) {
            this.setState({
                ...this.state, notes: [...this.state.notes, {...note, id: Date.now()}],

            })
        }
    }

    onNoteEdit(note) {
        this.setState({...this.state, currentTodo: note, isEditeMode: true})

    }

    onNoteCreate(note) {
        this.setState({
                ...this.state, notes: [...this.state.notes.map((n) => (n.id === note.id ? note : n))],
                isEditeMode: false,
            }
        )

    }

}

