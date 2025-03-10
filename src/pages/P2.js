import { useContext } from "react";
import { GlobalState } from "../components/GlobalState";

export default function P2() {
    
    const{data,setData} = useContext(GlobalState);

    const todos = data?.todos || [{done: false, text: ""}];

    return(
        <div className="todoListContainer">
        {
            todos.map((item, index) =>
            <Todo todos={todos} index={index} setData={setData}/>)
        }
        </div>
    );

}

function Todo({todos, index, setData}) {
    return(
        <div className="todo">
            <button 
            className={`todoCheck ${todos[index].done ? "done" : ""}`}
            onClick={() => {
                todos[index].done = !todos[index].done;
                setData(prevData => ({ ...prevData, todos }));
            }}>
            </button>
            <input className="todoText"
                type="text"
                value={todos[index].text}
                onChange={(e) => {

                    let updatedTodos = [...todos];

                    if(index !== todos.length-1 && e.target.value === "") {
                        updatedTodos = todos.filter((_, i) => i !== index);
                    }
                    else {

                        if (todos[index].text === "" && index === todos.length -1) {
                            updatedTodos.push({done: false, text: ""});
                        }
    
                        updatedTodos[index].text = e.target.value;
                        
                    }

                    setData(prevData => ({ ...prevData, todos: updatedTodos }));
                }}
                placeholder="// To Do"
            />
        </div>
    );
}