import { useSelector } from "react-redux";
import Header from "./components/Header";
import Input from "./components/input";
import ListContent from "./components/listContent";

function App() {
  
  const {todoList} = useSelector( (state) => state.todos)
  console.log(todoList)
  return (
    <div className="md:container md:mx-auto">

      <Header>
        <Input/>
        <ListContent/>  
      </Header>
    </div>
    
  )
}

export default App;
