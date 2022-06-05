import { useState } from "react";
import React from "react";

function DynamicForm() {

    const [ formState, setFormState] = useState(
        [
            {
                field:"userName",
                hasError:false,
                label: "Kullanıcı Adı",
                isRequired: true,
                type:"text",
                value:""
            },
            {
                field:"userPassword",
                hasError:false,
                label:"Parola",
                isRequired: true,
                type:"password",
                value:""

            },
        ]
    )

  const onChange = (value,field) => {
    const stateCopy = [...formState]
    const findedIndex = formState.findIndex((item) => item.field === field)
    stateCopy[findedIndex].value = value
    setFormState(stateCopy)
}

  const formValidation = (e) => {
    e.preventDefault()

    const stateCopy = [...formState]
    const newArr = stateCopy.map((item) => {
        if(item.isRequired && item.value.trim()===""){
            return{
                ...item,
                hasError:true
            }
        }
        return {
            ...item,
            hasError:false
        }
    })
    setFormState(newArr)
    const isExitError = newArr.filter((item)=> item.hasError)
    if(isExitError.length){
        alert("Hatalı Giriş")
        return
    }
    alert("Başarılı")
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-300">
      <div className="w-full max-w-sm">
        <form className="bg-gray-200 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 " onSubmit={formValidation}>
            {formState.map( (item) => {
                return(
                <div className="mb-4" key={item.label}>
                    <label className="block text-gray-800 text-sm font-bold mb-4" htmlFor="userName" >
                        {item.label} {item.isRequired && <span className="text-red-500">*</span>}
                    </label>
                    <input type={item.type} name={item.field} value={item.value} onChange={ (e) => { onChange(e.target.value,item.field)} }
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-gray-800" />
  
                    {item.hasError && <p className="mt-2 text-red-400 text-xs italic">{item.label} Zorunludur</p>}
  
                </div> )
            })}
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

export default DynamicForm;
