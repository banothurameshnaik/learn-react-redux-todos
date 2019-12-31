import { FILTERS, SET_FILTER } from "../actions";

const filter = (state = FILTERS.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
    
        default:
            return state;
    }
};

export default filter;