import { observer } from 'mobx-react';
import * as React from 'react';


export const Todo = observer(({ todo }) => 
    <div className="title">
        <input 
            type="checkbox"
            checked = {todo.finished}
            onChange = {todo.toggle}
        />
        

        {todo.title}
       
    </div>
,)

