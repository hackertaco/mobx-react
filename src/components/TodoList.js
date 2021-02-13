import { observer } from 'mobx-react';
import { useState } from "react"
import { Todo } from './AddTodo'


  
  const TodoList = observer((store) => {
      const [todo, setTodo] = useState('');
      const onChangeTodo = e => {
          setTodo(e.target.value);
      }
      const {todoStore} = store;
      return (
        <div>
            <div className="input-create">
                <input placeholder="add todo" onChange={onChangeTodo} value={todo}/>
                <button onClick={() => {
                    todoStore.addTodo(todo);
                    setTodo('');
                }}>add</button>
                <div>

                남은 일 : {todoStore.unfinished}
                </div>
            </div>
            <div>
                {todoStore.todos.map((t) => 
                    
                (<>
                <Todo todo ={t} key={t.id}/>
                    <button onClick={() => {todoStore.removeTodo(t.id)}}>x</button>
                    </>
                    )
                )}
                <div className="chore">

                </div>
            </div>
        </div>
      )
  })

  export default TodoList;