import React from 'react';

const AddTodo = ({ submitTodo }) => {
    let input;
    return (
        <div className="AddTodo">
            <form onSubmit={(e) => {
                e.preventDefault();
                // If there is no input, simply ignore it
                if (!input.value.trim()) return;
                // Call the dispatch of action here
                submitTodo(input.value.trim());
                // Reset the form with blank value
                input.value = '';
            }}>
                <input ref={node => input = node} />
                <button type="submit" >Add TODO</button>
            </form>
        </div>
    );
};

export default AddTodo;