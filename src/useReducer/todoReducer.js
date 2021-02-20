
const ADD = 'add';
const DELETE = 'delete';
const TOGGLE = 'toggle';

const todoReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [...state, {
                description: action.payload,
                id: new Date().getTime(),
                selected: false,
            }
        ];
        case DELETE:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE:
            return state.map(todo => (todo.id === action.payload) 
            ? {...todo, selected: !todo.selected} : todo);
        default:
            return state;
    }
}

export default todoReducer;