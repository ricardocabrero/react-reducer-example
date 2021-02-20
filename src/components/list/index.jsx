import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import styles from './style.module.css';

const List = ({todos, deleteItem, toggleSelect}) => {

    return(
        <ul className={styles.list}>
            {todos.map((todo, i) => 
                <Item 
                todo={todo}
                index={i}
                key={todo.id}
                deleteItem={deleteItem}
                toggleSelect={toggleSelect}
                />
            )}
        </ul>
    )
}

List.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired,
}

export default List;