export const TODO_ADD = 'TODO_ADD';

export const TODO_TOGGLE = 'TODO_TOGGLE';

export const SET_FILTER = 'SET_FILTER';


let todoId = 0;

export const TodoAdd = text => ({
    type: TODO_ADD,
    id: todoId++,
    text: text,
});

export const TodoToggle = id => ({
    type: TODO_TOGGLE,
    id,
});

export const SetFilter = filter => ({
    type: SET_FILTER,
    filter
});


export const FILTERS = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
};
