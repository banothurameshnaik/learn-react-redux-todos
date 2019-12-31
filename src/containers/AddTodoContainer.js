import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { TodoAdd } from '../actions';

const mapStateToProps = () => {

};

const mapDispatchToProps = (dispatch) => ({
    submitTodo: text => dispatch(TodoAdd(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);