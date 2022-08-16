import React, { useState } from 'react'


const defaultItems = [
    {
    name:"Item A"
    },
    {
    name:"Item B"
    },
    {
    name:"Item C"
    },
]

function Todo() {

    const[text,setText] = useState("")
    const[items, setItems] = useState(defaultItems)

    const addItem = () => {

        setItems([{name : text},...items])
        setText("")

    }

    return (
    <div>

        <input value={text} onChange={(e) => {setText(e.target.value)}} />
        <button onClick={() => {addItem()}}>Add</button>
        <br></br>

        {items.map( (item,key)=> (
            <div key={key}> {item.name} </div>
        ))}
    </div>
  )
}

export default Todo