
const text = ['completed', 'pending', 'all'];

const COMPLETED = text[0];
const PENDING = text[1];
const ALL = text[2];

const filterFn = (todos, type) => {
    switch(type) {
        case COMPLETED:
            return todos.filter(todo => todo.selected);
        case PENDING:
            return todos.filter(todo => !todo.selected);
        case ALL:
            return todos;
        default:
            return todos;
    }
}

export default filterFn;