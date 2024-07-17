import React, { useContext, useEffect } from 'react'
import noteContext from '../context/NoteContext'

function About() {

    const a = useContext(noteContext);
    useEffect(() => {
        a.updateState();
    },[]
)

    return (
        <div>
           <h2> this is about {a.state.name} and he is in class {a.state.class}</h2>

        </div>
    )
}

export default About
