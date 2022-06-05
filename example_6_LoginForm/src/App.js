import { useState } from "react";
import DynamicForm from "./components/dinamikForm";
import Form from "./components/form";

function App() {

   return(
       <>
       <div>
           <Form/>
       </div>
       <div>
           <DynamicForm/>
       </div>
       </>
   )
}
export default App;
