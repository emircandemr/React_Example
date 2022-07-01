import React, { useState } from 'react'

function ContactsList({contacts}) {
    const [filter,setFilter] = useState("")

    const filtered = contacts.filter( (item) => {
        return Object.keys(item).some( (key) => 
        item[key].toString().toLowerCase().includes(filter.toLocaleLowerCase()))
    })

  return (

    <div className='contactListBox'>
        <input className='Input' id='filterInput' placeholder='Filter Contact'
        value={filter}
        onChange={(e) => {
            setFilter(e.target.value)
        }} />

        <ul className='contactList'>
            {filtered.map((contact,key) => (
                    <div className='contacts' key={key}>
                        <span className='name' >{contact.fullname}</span>
                        <span className='phoneNumber'>{contact.phone_number}</span>  
                        
                    </div>)
            )}
        </ul>
    </div>  
  )
}

export default ContactsList