import { types } from 'mobx-state-tree';

export const TodoItem = types
    .model('Todos', {
    title : types.string,
    finished : false,
    id : types.optional(types.number, () => Math.random())
})
    .actions(self => ({
    toggle(){
        self.finished = !self.finished;
    }
}))

export const TodoStore = types
    .model('TodoStore', {
        todos : types.array(TodoItem)
    })
    .views(self => ({
        get unfinished(){
            return self.todos.filter(todo => !todo.finished).length;
        }
    }))
    .actions(self => ({
        addTodo(title) {
            self.todos.push({title})
        },
        removeTodo(id){
            self.todos = self.todos.filter(t => t.id !== id)
        },
    }))
