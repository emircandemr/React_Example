import React, { useEffect, useState } from 'react';
import ContactsList from './List/ContactsList';
import Form from './Form/Form';


function Contact() {

    const [contacts , setContacts] = useState([])


  return (
    <div className='contactBox'>
        <ContactsList contacts={contacts}/>
        <Form setContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contact