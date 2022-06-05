import { useState } from "react";
import React from "react";

function Form() {

  const [formModel,setFormModel] = useState( {
    userName: "",
    userPassword: "" ,
  })

  const [formError,setFormError] =useState( {
    userName : false,
    userPassword : false,
  })

  const onChange = (value,field) => {
    setFormModel( {...formModel,[field]:value} )
  }

  const formValidation = (e) => {
    e.preventDefault()
    const obj = {
      userName : formModel.userName.trim()=== "",
      userPassword: formModel.userPassword.trim()=== ""
    }
    setFormError(obj)
    if(Object.values(obj).includes(true)){
      alert("Hata Mevut")
      return
    }
    alert("Başarılı") 
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-300">
      <div className="w-full max-w-sm">
        <form className="bg-gray-200 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 " onSubmit={formValidation}>
          <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-4" htmlFor="userName" >
                Kullanıcı Adı
              </label>
              <input name="userName" value={formModel.userName} onChange={ (e) => { onChange(e.target.value,"userName")} }
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-gray-800" />

            {formError.userName && <p className="mt-2 text-red-400 text-xs italic">Bu Alan Zorunludur</p>}

          </div>
          <div className="mb-6"> 
            <label className="block text-gray-800 text-sm font-bold mb-4" htmlFor="password" >
                  Parola
              </label>
              <input value={formModel.userPassword} name="password" type="password" placeholder = "*******" onChange={ (e) => { onChange(e.target.value,"userPassword")} }
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-gray-800" />
          
            {formError.userPassword && <p className="mt-2 text-red-400 text-xs italic">Bu Alan Zorunludur</p>}


          </div>
          <div className="flex items-center justify-center ">
              <button type="submit" className="w-full py-3 px-4 rounded-lg bg-gray-600 hover:bg-gray-900 text-white font-bold text-sm cursor-pointer focus:outline-none focus:shadow-yellow-200 ">
                  Giriş Yap
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
