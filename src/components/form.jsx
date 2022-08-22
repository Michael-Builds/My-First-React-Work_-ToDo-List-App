import  React from 'react';
function Form ({setInputText, todos,setTodos, inputText, setStatus}){
    const  inputTextHandler = (e)=>{
        // console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{ text: inputText, completed:false, id:Math.random()*1000}
        ]);
        setInputText("");
    };

    const statusHandler = (e) =>{
            console.log(e.target.value);
            setStatus(e.target.value);
            
    }
    return(
        <form action="#">
            <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input' />
            <button className="todo-button" type='submit' onClick={submitHandler}>
            <i className="fa-solid fa-square-plus"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler} >
                    <option value="all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        
    )
}

export default Form;