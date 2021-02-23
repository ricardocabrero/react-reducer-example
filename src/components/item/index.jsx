import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Item = ({todo, index, deleteItem, toggleSelect}) => {

    const { id, selected, description } = todo;

    const handleBtn = (id) => (e) => {
        deleteItem(id);
    }

    const handleCheck = (id) => (e) => {
        toggleSelect(id);
    }

    return(
        <li 
        className={styles.item}
        id={id}>
            <span>{index+1}.</span>
            <input type="checkbox" 
            id={description}
            onChange={handleCheck(id)}
            checked={selected}/>
            <label htmlFor={description}>
            {description}
            </label>
            <button onClick={handleBtn(id)}>Delete</button>
        </li>
    )
}

Item.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteItem: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired,
}

export default Item;