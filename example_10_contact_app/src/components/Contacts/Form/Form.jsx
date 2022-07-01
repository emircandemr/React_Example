import React, { useEffect } from 'react';
import { useState } from 'react';

function Form({setContacts,contacts}) {

    const [form , setForm] = useState({fullname :"" , phone_number:""})

    const onChangeInput = (e) => {

        setForm({...form , [e.target.name] : e.target.value})

    }   
    
    const addContact = (e) => {
        e.preventDefault()

        if(form.fullname === "" || form.phone_number === ""){
           return alert("Geçersiz Giriş")
        }

        setContacts([...contacts,form])

        setForm({fullname :"" , phone_number:""})
    }

  return (
    <form className='formItem' onSubmit={ (e) => {
        addContact(e)
    }}>
        <div>
            <input className='Input' name='fullname' placeholder='Full Name' value={form.fullname}
            onChange={(e) =>{
                onChangeInput(e)
            }} />   
        </div>
        <div>
            <input className='Input' name="phone_number" placeholder='Phone Number' value={form.phone_number} 
             onChange={(e) => {
                onChangeInput(e)
            }} />
        </div>
        <div>
            <button className='addButton'>ADD</button>
        </div>

    </form>
  )
}

export default Form