import { TODO_ADD, TODO_TOGGLE } from '../actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case TODO_ADD:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];

        case TODO_TOGGLE:
            return state.map((todo) => {
                if (todo.id === action.id)
                    todo.completed = !todo.completed;
                return todo;
            });
    
        default:
            return state;
    }
};

export default todos;