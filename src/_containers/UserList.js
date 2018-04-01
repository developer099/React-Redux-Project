import { connect } from 'react-redux';
import UserListComponent from '../_components/UserList';

export const UserList = connect(state => ({users: state.users}), {})(UserListComponent);