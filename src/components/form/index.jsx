import React from 'react';
import PropTypes from 'prop-types';
import FormHook from '../../customHooks/formHook';
import styles from './style.module.css';

const Form = ({addItem, setExist}) => {

    const { values, handleChange, reset } = FormHook({
        text: '',
    });

    const handleSubmit = (e) => {

        const { text } = values;
        e.preventDefault();

        if(!text.trim()) {
            return;
        }
        
        addItem(text);
        reset();
    }

    const resetExist = () => {
        setExist(state => false);
    }

    return(
        <form 
        className={styles.form}
        onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            onBlur={resetExist}
            autoComplete='off'
            placeholder='task...'
            id="text" 
            type="text" 
            value={values.text}/>
            <button type="submit">Send</button>
        </form>
    )  
}

Form.propTypes = {
    addItem: PropTypes.func.isRequired,
}

export default Form;