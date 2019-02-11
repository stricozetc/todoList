import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { connect } from 'react-redux';
import { deleteTodo } from '../../store/actions/todo/todo.actions';

import ButtonControl from '../share/control-button/buttonControl';

const ToDOItemComponent = ({ text, }) => (
    <li className="container-item">
        <input className="item-check" type="checkbox" />
        <p
            className="item-text"
        >
            {text}
        </p>
        <ButtonControl content={<i className="fas fa-check"></i>} color='#71b346' />
        <ButtonControl content={<i className="fas fa-pencil-alt"></i>} color='#63b8a9'/>
        <ButtonControl content={<i className="fas fa-trash-alt"></i>} color='#f16b5e'/>
    </li>
)

ToDOItemComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default connect()(ToDOItemComponent);
