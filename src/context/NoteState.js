import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {

    const s1 = {
        "name": "vinod",
        "class": "5B"
    }

    const updateState = () => {

        setTimeout(() => {

            setState({
                "name": "singh",
                "class": "ANZ"
            })

        }, 1000);
    }
    const [state, setState] = useState(s1);

    return (

        <NoteContext.Provider value={{state , updateState}}>
            {props.children}
        </NoteContext.Provider>

    )
}


export default NoteState;