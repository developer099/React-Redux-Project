import { connect } from 'react-redux';
import AddMessageComponent from '../_components/AddMessage';
import { chatActions } from '../_actions';

const mapDispatchToProps = dispatch => ({
        dispatch: (message) => {
            dispatch(chatActions.addMessage(message))
        }
    }   
    
)

export const AddMessage = connect(()=>({}), mapDispatchToProps)(AddMessageComponent);