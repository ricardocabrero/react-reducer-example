import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css'

const Filter = React.memo(({setFilter, state}) => {

    const text = ['completed', 'pending', 'all'];

    const handleClick = (param) => (e) => {
        setFilter(state => param);
    }

    return (
        <div className={styles.btns}>
            {text.map(text => 
            <button disabled={text === state}
            onClick={handleClick(text)}
            key={text}>{text}</button>
            )}
        </div>
    )
});

Filter.propTypes = {
    setFilter: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired,
}

export default Filter;