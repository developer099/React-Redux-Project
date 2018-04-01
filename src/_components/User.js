import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({ message, author }) => (
    <p>
        <i>{author}</i>{message}
    </p>
)

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default User