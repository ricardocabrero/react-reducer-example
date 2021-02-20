import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Item = ({todo, index, deleteItem, toggleSelect}) => {

    const { id, selected, description } = todo;

    const classSelected = (selected) =>  selected ? `${styles.selected}` : ``;

    const handleBtn = (id) => (e) => {
        deleteItem(id);
    }

    const handleCheck = (id) => (e) => {
        toggleSelect(id);
    }

    return(
        <li 
        className={`${styles.item} ${classSelected(selected)}`}
        id={id}>
            <span>{index+1}.</span>
            <input type="checkbox" 
            onChange={handleCheck(id)}
            checked={selected}/>
            <p>{description}</p>
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