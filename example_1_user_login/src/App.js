import logo from './logo.svg';
import './App.css';
import Input from "./component/input/input";
import Button from "./component/button/button";
import Form from "./component/form/form"

import {useState} from "react";



function App() {

  const [userForm, setUserForm] = useState({
    userName : "",
    password : "",
  })


  const onValidation = () =>{
    if(userForm.userName === "" || userForm.password ===""){
      alert("Invalid Form")
    }
    else{
      alert("Successful Login")
    }
  }


  return (
    <div className="custom-page">

      <Form>
      <h1 className='login_header'> Login Page </h1>
      <Input value={userForm.userName} placeholder={"Username"}  onChange={(e) => {
        // setUserForm({userName : e.target.value , password: userForm.password})
        setUserForm({...userForm , userName : e.target.value})

      }}/>

      <Input type = "password" value={userForm.password} placeholder={"Password"}  onChange={(e) => {
        // setUserForm({password : e.target.value , userName: userForm.userName})
        setUserForm({...userForm , password : e.target.value})

      }}/>

      <Button text='Click Me' onClick={onValidation} />

      </Form>
    </div>
  );
}

export default App;
